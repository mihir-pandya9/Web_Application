import random
import json
import requests
import torch
import pandas as pd

from model import NeuralNet
from nltk_utils import bag_of_words, tokenize

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('intents.json', 'r') as json_data:
    intents = json.load(json_data)

# def workout_api():
#     url = "http://127.0.0.1:5000/generate_workout"
#     headers = {"Content-Type": "application/json"}  # Specify JSON content type if needed
#     data = {"Muscles": "leg", "Intensity_Level": "Intermediate"}  # Define the request body data
#     payload = data  # Set the payload to contain just the request body data

#     response = requests.post(url, headers=headers, json=payload)
#     workouts = response.json()
#     lst = []
#     for workout in workouts:
#         lst.append(workout["WorkOut"])

#     # Check if the request was successful
#     if response.status_code == 200:
#         # print(response.json())
#         return lst
#     else:
#         return ("error Failed to fetch response from API")
    
# def yoga_api():
#     url = "http://127.0.0.1:5000/generate_yoga"
#     headers = {"Content-Type": "application/json"}  # Specify JSON content type if needed
#     data = {"Level": "Beginners", "Benefits": "improve blood circulation and remove constipation"}  # Define the request body data
#     payload = data  # Set the payload to contain just the request body data

#     response = requests.post(url, headers=headers, json=payload)
#     name = response.json()
#     l = []
#     for yoga in name:
#         l.append(yoga["AName"])

#     # Check if the request was successful
#     if response.status_code == 200:
#         # print(response.json())
#         return l
#     else:
#         return ("error Failed to fetch response from API")
      
def workout_api(muscles, intensity_level):
    url = "http://127.0.0.1:5000/generate_workout"
    headers = {"Content-Type": "application/json"}
    data = {"Muscles": muscles, "Intensity_Level": intensity_level}
    payload = data

    response = requests.post(url, headers=headers, json=payload)
    workouts = response.json()
    lst = []
    for workout in workouts:
        lst.append({
            "Name": workout["WorkOut"],
            "Equipment": workout["Equipment"],
            "Beginner_Sets": workout["BeginnerSets"],
            "Explanation": workout["Explaination"]
        })

    if response.status_code == 200:
        return lst
    else:
        return ("error Failed to fetch response from API")

# def yoga_api(level, benefits):
def yoga_api():
    url = "http://127.0.0.1:5000/generate_yoga"
    headers = {"Content-Type": "application/json"}
    # data = {"Level": level, "Benefits": benefits}
    data = {"Level": "Beginners", "Benefits": "improve blood circulation and remove constipation"}
    payload = data

    response = requests.post(url, headers=headers, json=payload)
    poses = response.json()
    l = []
    for pose in poses:
        l.append({
            "Name": pose["AName"],
            "Benefits": pose["Benefits"],
            "Breathing": pose["Breathing"]
        })

    if response.status_code == 200:
        return l
    else:
        return ("error Failed to fetch response from API")

FILE = "data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

bot_name = "Sam"
print("Let's chat! (type 'quit' to exit)")
while True:
    # sentence = "do you use credit cards?"
    sentence = input("You: ")
    if sentence == "quit":
        break

    sentence = tokenize(sentence)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    if prob.item() > 0.75:
        for intent in intents['intents']:
            if tag == intent["tag"]:
                print(f"{bot_name}: {random.choice(intent['responses'])}")
                if tag == "workout_plan_generation":
                    api_response = workout_api()
                    # print(api_response)
                    for i in api_response:
                        print(i)
                elif tag == "yoga_plan_generation":
                    api_response = yoga_api()
                    # print(api_response)
                    for pose in api_response:
                        print(f"Name: {pose['Name']}")
                        print(f"Benefits: {pose['Benefits']}")
                        print(f"Breathing: {pose['Breathing']}")
    else:
        print(f"{bot_name}: I do not understand...")




'''
workOut
Equiptment
Beginner Sets
Explaination

AName
Benefits
Breathing
'''