import os
import json
import random
from dotenv import load_dotenv
from fastapi import FastAPI, requests
from pydantic import BaseModel
import requests
app = FastAPI()


# --------ENCRYPTION----------- 
load_dotenv('Backend\\.env') 
# accessing and printing value - add as requirement to all calls to backend later. 
fe_key = os.getenv("MY_FE")
api_key = os.getenv("MY_API")

# --------SERVER----------- 
# Is backend online? 
@app.get("/")
def online():
    return("The backend is online")






# --------JSON----------- 
# Send in Python Object + filepath to JSON as string to add new JSON object to file.  
def write_in_json(new_data: dict, filepath):
    with open(filepath, "r+") as userDB:
            # Json -> Python
            userData = json.load(userDB)
            # Add pythin object to python array
            userData.append(new_data)
            # find first spot in array
            userDB.seek(0)
            # Convert back to Json
            json.dump(userData, userDB, indent=4)
            # close file
            userDB.close






# --------USERS----------- 
# Define the request body model for accepting data from FrontEnd
class NewUser(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str

class Login(BaseModel):
    email: str
    password: str

# Adding a new user + failsafes for: 
    # Wrong data structure 
    # Can't find db
    # Already exsists
@app.post("/user/add")
async def get_data(newUser: NewUser):
    filepath: str = "./Databases/login.json"
    alreadyRegistered: bool = False

    # Try to connect to database
    try:
        with open(filepath, "r") as userDB:
            userData = json.load(userDB)
    except FileNotFoundError:
        return {"statusCode": 503, "message": "The database could not be found"}

    # Loop through current reg users and look for matches.
    for user in userData:
        # If exsisting, send msg about user already exsisting in db
        if user['email'] == newUser.email:
            alreadyRegistered = True
            userDB.close
            return {"statusCode": 409, "message": "The user is already registered in the database"}


    # If none, add and send statuscode + add user
    if alreadyRegistered == False:
        # generate random id and double check so there won't be duplicates
        new_user: dict = {'id': generate_unique_id(userData)}
        # Remove class from the newUser we recieved
        new_user_dict = newUser.model_dump()
        # Connect the two dict, id in front. 
        new_user.update(new_user_dict)

        write_in_json(new_user, filepath)
        return {"statusCode": 201, "message": "The user was added to the database"}

def generate_unique_id(userData):
    while True:
        random_id = random.randint(1, 1000000)  # Generate a random ID within the range 1 to 1,000,000
        if not any(user['id'] == random_id for user in userData):
            return random_id

# Try to log in using email + password in a JSON object. If correct answer with message + id. 
@app.post("/user/login")
async def try_login(login: Login):
    filepath: str = "./Databases/login.json"

    # Try to connect to database
    try:
        with open(filepath, "r") as userDB:
            userData = json.load(userDB)
    except FileNotFoundError:
        return {"statusCode": 503, "message": "The database could not be found"}

    # Loop through current reg users and look for matches.
    for user in userData:
        # Check email fisrt, then password
        if user['email'] == login.email:
            if user['password'] == login.password:
                return {"statusCode": 200, "message": "The user was found in the database", "id": user["id"]}
            else: 
                return {"statusCode": 401, "message": "The password isn't a match"}
        else:
            return {"statusCode": 401, "message": "There is no such email in the database"}




# --------EXCERSISE API----------- 

class Exercise(BaseModel):
    name: str
    type: str
    muscle: str
    difficulty: str
    instructions: str

class Search_Term(BaseModel):
    search_term: str

def classify_term(search_term:str):
    types = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching', 'strongman']
    muscles = ['abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps']
    difficulties = ['beginner', 'intermediate', 'expert']
    
    if search_term in types:
        return 'type'
    elif search_term in muscles:
        return 'muscle'
    elif search_term in difficulties:
        return 'difficulty'
    else:
        return 'error'

@app.get("/exercise/search")
async def get_exercises(search_term: Search_Term):
    theme: str = classify_term(search_term.search_term)
    if theme != 'error':
        api_url = 'https://api.api-ninjas.com/v1/exercises?{}={}'.format(theme, search_term.search_term)
        response = requests.get(api_url, headers={'X-Api-Key': api_key})
        if response.status_code == requests.codes.ok:
            exercises = response.json()
            return {"statusCode": response.status_code, "message": "10 exercises were found", "exercises": exercises}
        else:
            return {"statusCode": response.status_code, "message": response.text}





# --------USER FAVOURITES----------- 
#Connect to db (json file) - move to the appropriate function later. 
favouritesDB = open('./Databases/favourites.json')
usersFavourites = json.load(favouritesDB)


# --------SERVER RUN----------- 
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)


