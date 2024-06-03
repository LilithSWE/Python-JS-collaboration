import os
from dotenv import load_dotenv, dotenv_values 
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import httpx

load_dotenv() 
# accessing and printing value
print(os.getenv("MY_FE"))
print(os.getenv("MY_API"))

app = FastAPI()

@app.get("/")
def online():
    return("The backend is online")


# Define the request body model
class NewUser(BaseModel):
    id: int
    firstName: str
    lastName: str
    email: str
    password: str


@app.post("/user")
async def get_data(request_data: NewUser):
    return(request_data)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)


# @app.post("/api/data")
# async def get_data(request_data: RequestData):
#     try:
#         api_url = 'https://api.example.com/data'
#         async with httpx.AsyncClient() as client:
#             response = await client.post(api_url, json=request_data.dict())
#             api_response = response.json()
#         return api_response
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))