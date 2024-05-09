'''
Second model 
'''
from flask import Flask, request, jsonify
import random
import json
import torch
from model import NeuralNet
from nltk_utils import bag_of_words, tokenize
from recommendation import generate_workout_plan, generate_yoga_plan
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/chat": {"origins": "http://localhost:3000"},
                     r"/workout": {"origins": "http://localhost:3000"},
                     r"/yoga": {"origins": "http://localhost:3000"}})

with open('intents.json', 'r') as json_data:
    intents = json.load(json_data)

def workout_model(user_preferences):
    workouts = generate_workout_plan(user_preferences)
    return workouts

def yoga_model(user_preferences):
    yoga_poses = generate_yoga_plan(user_preferences)
    return yoga_poses

def get_bot_response(sentence, user_preferences=None):
    FILE = "data.pth"
    data = torch.load(FILE)

    input_size = data["input_size"]
    hidden_size = data["hidden_size"]
    output_size = data["output_size"]
    all_words = data['all_words']
    tags = data['tags']
    model_state = data["model_state"]

    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = NeuralNet(input_size, hidden_size, output_size).to(device)
    model.load_state_dict(model_state)
    model.eval()

    sentence = tokenize(sentence)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    if tag == "workout_plan_generation":
        if user_preferences:
            return workout_model(user_preferences)
        else:
            return "Please provide user preferences for generating a workout plan."
    
    elif tag == "yoga_plan_generation":
        if user_preferences:
            return yoga_model(user_preferences)
        else:
            return "Please provide user preferences for generating a yoga plan."
    else:
        for intent in intents['intents']:
            if tag == intent["tag"]:
                return random.choice(intent['responses'])

# @app.route('/chat', methods=['POST'])
# def chat():
#     data = request.json
#     user_input = data.get('message')
#     user_preferences = data.get('preferences')  # Assuming preferences are sent as a dictionary
#     bot_response = get_bot_response(user_input, user_preferences)
#     return jsonify({"response": bot_response})

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get('message')
    user_preferences = data.get('preferences')  # Assuming preferences are sent as a dictionary

    if not user_input:
        return jsonify({"response": "Please provide a message."})

    # Check if the user input contains a keyword related to workout plan generation
    if 'workout' in user_input.lower():
        if not user_preferences:
            return jsonify({"response": "Please provide user preferences for generating a workout plan."})
        bot_response = workout_model(user_preferences)
        return jsonify({"response": bot_response})
    
    # Check if the user input contains a keyword related to yoga plan generation
    elif 'yoga' in user_input.lower():
        if not user_preferences:
            return jsonify({"response": "Please provide user preferences for generating a yoga plan."})
        bot_response = yoga_model(user_preferences)
        return jsonify({"response": bot_response})

    # If neither workout nor yoga keywords are found, return a generic response
    else:
        # Check if preferences are provided
        if user_preferences:
            # If preferences are provided, get the bot response
            bot_response = get_bot_response(user_input, user_preferences)
            return jsonify({"response": bot_response})
        else:
            bot_response = get_bot_response(user_input, user_preferences)
            return jsonify({"response": bot_response})

@app.route('/workout', methods=['POST'])
def generate_workout():
    data = request.json
    user_preferences = data.get('preferences')  # Assuming preferences are sent as a dictionary

    if not user_preferences:
        return jsonify({"response": "Please provide user preferences for generating a workout plan."})

    bot_response = workout_model(user_preferences)
    return jsonify({"response": bot_response})

@app.route('/yoga', methods=['POST'])
def generate_yoga():
    data = request.json
    user_preferences = data.get('preferences')  # Assuming preferences are sent as a dictionary

    if not user_preferences:
        return jsonify({"response": "Please provide user preferences for generating a yoga plan."})

    bot_response = yoga_model(user_preferences)
    return jsonify({"response": bot_response})


if __name__ == '__main__':
    app.run(debug=True, port=7000)

'''
First model 
'''
# # importing the required modules
# from flask import Flask, request, jsonify
# import random
# import json
# import torch
# from model import NeuralNet
# from nltk_utils import bag_of_words, tokenize
# import requests
# from recommendation import generate_workout_plan, generate_yoga_plan

# # Creating the flask
# app = Flask(__name__)

# # Loading the intents.json file 
# with open('intents.json', 'r') as json_data:
#     intents = json.load(json_data)

# # function to take input and pass it to the recommendation generate workout plan
# def workout_model():
#     user_preferences = {
#         "Muscle":"Chest",
#         "Intensity_Level": "Beginner"
#     }

#     #calling the function 
#     workouts = generate_workout_plan(user_preferences)
#     return workouts

# # function to take input and pass it to the recommendation that generates yoga plan
# def yoga_model():
#     user_preferences = {
#     'Level': 'Beginners',  
#     'Benefits': 'improve blood circulation and remove constipation',
#     }
#     # calling the function 
#     yoga_poses = generate_yoga_plan(user_preferences)
#     return yoga_poses

# def get_bot_response(sentence):
#     FILE = "data.pth"
#     data = torch.load(FILE)

#     input_size = data["input_size"]
#     hidden_size = data["hidden_size"]
#     output_size = data["output_size"]
#     all_words = data['all_words']
#     tags = data['tags']
#     model_state = data["model_state"]

#     device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
#     model = NeuralNet(input_size, hidden_size, output_size).to(device)
#     model.load_state_dict(model_state)
#     model.eval()

#     sentence = tokenize(sentence)
#     X = bag_of_words(sentence, all_words)
#     X = X.reshape(1, X.shape[0])
#     X = torch.from_numpy(X).to(device)

#     output = model(X)
#     _, predicted = torch.max(output, dim=1)

#     tag = tags[predicted.item()]

#     if tag == "workout_plan_generation":
#         # muscles = request.json.get('muscles')
#         # intensity_level = request.json.get('intensity_level')
#         # return workout_model(muscles, intensity_level)
#         return workout_model()
    
#     elif tag == "yoga_plan_generation":
#         # level = request.json.get('level')
#         # benefits = request.json.get('benefits')
#         # return yoga_api(level, benefits)
#         return yoga_model()
#     else:
#         for intent in intents['intents']:
#             if tag == intent["tag"]:
#                 return random.choice(intent['responses'])
            
# @app.route('/chat', methods=['POST'])
# def chat():
#     user_input = request.json.get('message')
#     bot_response = get_bot_response(user_input)
#     return jsonify({"response": bot_response})

# if __name__ == '__main__':
#     app.run(debug=True, port=5001)