# importing the required libraries
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import joblib
import random

# Load the yoga model and DataFrame
yoga_model = joblib.load('yoga_tfidf_vectorizer.pkl')
ydf = pd.read_csv('yoga_pose.csv')
ydf = ydf.dropna()

# Load the fitness model and DataFrame
workout_model = joblib.load('tfidf_vectorizer.pkl')
wdf = pd.read_csv('fitness_data.csv')
wdf = wdf.dropna()

# Function to generate fitness workout plan
def generate_workout_plan(user_preferences, num_exercises=5, random_selection=True):
    # Combine relevant columns into a single text column for TF-IDF vectorization
    wdf['combined'] = wdf['WorkOut'] + " " + wdf['Intensity_Level'] + " " + wdf['Explaination'] + " " + wdf['Muscles'] + " " + wdf['Equipment'] + " " + wdf['Beginner Sets'] 

    # Transform user preferences using the TF-IDF vectorizer
    user_preferences_text = " ".join(user_preferences.values())
    user_preferences_vector = workout_model.transform([user_preferences_text])

    # Calculate cosine similarity between user preferences and exercises
    cosine_similarities = cosine_similarity(user_preferences_vector, workout_model.transform(wdf['combined'])).flatten()

    # Get indices of exercises sorted by similarity
    similar_exercises_indices = cosine_similarities.argsort()[::-1]

    # Recommend top exercises
    top_recommendations = wdf.iloc[similar_exercises_indices][:num_exercises]

    # Randomly select a subset of exercises from the top recommendations
    if random_selection:
        num_selected_exercises = min(num_exercises, len(top_recommendations))
        selected_recommendations = random.sample(top_recommendations.index.tolist(), num_selected_exercises)
        recommended_exercises = wdf.loc[selected_recommendations]
    else:
        recommended_exercises = top_recommendations

    return recommended_exercises.to_dict(orient='records')

# Function to generate yoga recommendations
def generate_yoga_plan(user_preferences, num_recommendations=5, random_selection=True):
    # Combine relevant columns into a single text column for TF-IDF vectorization
    ydf['combined'] = ydf['AName'] + " " + ydf['Description'] + " " + ydf['Benefits'] + " " + ydf['Contraindications'] + " " + ydf['Breathing'] + " " + ydf['awareness'] + " " + ydf['Variations'] + " " + ydf['Level']

    # Transform user preferences using the TF-IDF vectorizer
    user_preferences_text = " ".join(user_preferences.values())
    user_preferences_vector = yoga_model.transform([user_preferences_text])

    # Calculate cosine similarity between user preferences and yoga poses
    cosine_similarities = cosine_similarity(user_preferences_vector, yoga_model.transform(ydf['combined'])).flatten()

    # Get indices of yoga poses sorted by similarity
    similar_yoga_indices = cosine_similarities.argsort()[::-1]

    # Recommend top yoga poses
    top_recommendations = ydf.iloc[similar_yoga_indices][:num_recommendations]

    # Randomly select a subset of exercises from the top recommendations
    if random_selection:
        num_selected_exercises = min(num_recommendations, len(top_recommendations))
        selected_recommendations = random.sample(top_recommendations.index.tolist(), num_selected_exercises)
        recommended_exercises = ydf.loc[selected_recommendations]
    else:
        recommended_exercises = top_recommendations

    return recommended_exercises.to_dict(orient='records')

# user_preferences = {
#     "Muscle":"Chest",
#     "Intensity_Level": "Beginner"
# }

# recommended_workouts = generate_workout_plan(user_preferences)
# print(recommended_workouts)

# For warnings
# import warnings
# from sklearn.exceptions import InconsistentVersionWarning

# warnings.filterwarnings("ignore", category=InconsistentVersionWarning)

# {
#   "message": "I need help with my exercise routine"
# }