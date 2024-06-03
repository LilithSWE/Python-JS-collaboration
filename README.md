# Python-JS-collaboration

This is a sideproject me and 2 classmates have decided to create to practise connecting FE with BE, using a file.json as a database and a free API.

## Authors

### Backend:

@LilithSWE

### Frontend:

@CarolineVarsaga @RalfiSlask

## Tech stack:

### Backend:

Python, Fast API, Redis + Types-Redis (?), Uvicorn, Dotenv

### Frontend:

HTML 5, CSS 3, Tailwind, JavaScript React, Vite

## API:

[Exercises API](https://api-ninjas.com/api/exercises) - A free API that responds with 10 exercises based on preset search terms.

## Installation/ Usage

To be able to use this application one needs to start up both the backend and frontend on ones own computer.
One also needs to have the extension "live server" or similar installed.

The API key is hidden in an env file not avaliable on github. Therefore if one wishes to connect to the real API linked above, one needs to get an account at [API Ninjas](https://api-ninjas.com/) and get their own API key, then follow the instructions provided under the backend subtitle.

### Backend:

- In Backend folder > Create .env file named simply ".env"
- In this file add 2 parameters:

```
MY_API = "[your api key from API Ninjas]"
MY_FE = "sillochpotatis"
```

- Start terminal with app.py file selected
- Run live server - extension

### Frontend:

- Start terminal from Frontend folder
- @ npm init
- @ npm run dev - open link to local host
