## Introduction
Pali coding challenge.  
This task involves exposing an api endpoint which takes a list of meal ids, uses themealdb.com api to get ingredient details for each meal and return the meal with the least ingredient requirement.

## Requirements
- node 10
- docker

## How To Setup and Run Locally
Run the following commands in your terminal

- git clone https://github.com/s2-datong/pali.git
- cd pali
- docker build -t "pali:docker" .
- docker run -p 3000:3000 -d pali:docker

This would build a docker container and run it locally on port 3000

## How to Test App
To test that the application is running

- Open a browser
- Type http://localhost:3000/52772/52770 (/:mealid/:mealid)
- You can pass a variable number of mealids in the path