import os
from dotenv import load_dotenv, dotenv_values 
from fastapi import FastAPI

# loading variables from .env file
load_dotenv() 
app = FastAPI()

# accessing and printing value in our terminal
print(os.getenv("MY_API"))
print(os.getenv("MY_FE"))

@app.get("/")
def root():

    return {"message": "Hello World"}

@app.get("/test")
def root():
    return {"username": "Test", "email": "test@email.com"}