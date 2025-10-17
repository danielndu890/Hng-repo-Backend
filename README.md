# Backend - stage 0 Task

## Project Description

A RESTful API endpoint that return profile information, along with dynamic cat facts from external API.

**Key Details:**

- Dynamic profile endpoint at '/me'
- Real-time cat facts from an external api
- Proper error handling with fallback response
- ISO 8601 timestamp formatting
- CORS enabled for cross-origin requesets

##

\*\*Production URL: "https://hng-repo-backend-production.up.railway.app/me"

## Git-hub Repository link

- https://github.com/danielndu890/Hng-repo-Backend.git

## Setup Instructions

1. Clone this repository
2. Install dependencies
3. Set up enviroment variable
4. Start the server

## Run locally

git clone https://github.com/danielndu890/Hng-repo-Backend.git

cd Test0

npm install

create a .env file and add : PORT=7878

npm start

server runs on : 'http://localhost:7878'

Set : 'http://localhost:7878/me' to get cat facts data

## Dependencies

- express
- axios
- cors
- nodemon
  (npm i express axios cors nodemon)
