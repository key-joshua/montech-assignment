[![Maintainability](https://api.codeclimate.com/v1/badges/d88ca3c046d2632c3a29/maintainability)](https://codeclimate.com/github/key-joshua/montech-assignment/maintainability)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/key-joshua/montech-assignment/tree/develop.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/key-joshua/montech-assignment/tree/develop)
[![Coverage Status](https://coveralls.io/repos/github/key-joshua/montech-assignment/badge.svg?branch=develop)](https://coveralls.io/github/key-joshua/montech-assignment?branch=develop)
[![codecov](https://codecov.io/gh/key-joshua/montech-assignment/branch/develop/graph/badge.svg?token=3I37KVL3XW)](https://codecov.io/gh/key-joshua/montech-assignment)

# BACKEND CHALLEGE
- This Backend Challenge

#### This is the Hosted link of the backend challenge
https://heritage-backend-app.herokuapp.com

#### This is the Hosted link of Swagger Documentation
Postman: [Swagger Collection APIs](https://heritage-backend-app.herokuapp.com/api/v1/documentation).
#### This is Task description documentation 1
Task Description 1: [Task Description Documentation 1](https://docs.google.com/document/d/1C0epIDFBL0nh-MK4apGRhjApSV1sK3J0MIkfoqytqz0/edit?usp=sharing).

#### This is the Github Repository link of the backend repo 
https://github.com/key-joshua/montech-assignment

<br>

## Features

- Add a movie.
- View a movie.
- View all movies.
- Rank a movie.
- Delete a movie.

## Backend Assignment APIs
Before we get started Remember to take  :coffee:   :pizza:  and :dancer:   When You Are coding, come on Dude it all about relax

## Backend tools
 - All Neccessary libraries.
 - Express JS.
 - NodeJs.


#### TABLE OF API ENDPOINTS SPECIFICATION AND DESCRIPTION
- Version API using URL versioning starting with https://heritage-backend-app.herokuapp.com/api/v1  


|NO  | VERBS  |                    ENDPOINTS                           |    STATUS    |   ACCESS |              DESCRIPTION                     |
|----|--------|--------------------------------------------------------|--------------|----------|----------------------------------------------|
| 4  | POST   | /movies/add-movie                                      | 201 OK       | private  | add movie with session in header             |
| 4  | GET    | /movies/view-movie/:id                                 | 200 OK       | private  | view movie with session in header            |
| 4  | GET    | /movies/view-movies                                    | 200 OK       | private  | view all movie with session in header        |
| 4  | PATCH  | /movies/ranking-movie/:id                              | 200 OK       | private  | edit movie with session in header            |
| 4  | DELETE | /movies/delete-movie/:id                               | 200 OK       | private  | delete movie with session in header          |


#### Other Tools
Other tools and technologies used in development of this application are;

- Hosting: [Heroku](https://heroku.com/).
- Compiler: [Babel](https://babeljs.io/).
- Style Guide: [Airbnb](https://airbnb.io/projects/javascript/).

- Framework: [ExpressJS](http://expressjs.com/).
- Linting Library: [ESLint](https://eslint.org/).
- Documentation 1: [Swagger](https://swagger.io/).
- Documentation 2: [Postman](https://www.postman.com/).

- API Testing environment: [Postman](https://www.getpostman.com).
- Programming language: [JavaScript(ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/).
- Text Editor: [VSCode](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com/).

## GETTING START WITH PROJECT
- should clone this repository with ```git clone https://github.com/key-joshua/montech-assignment.git```

- should switch into this branch with ```git checkout develop```

- Install the required dependencies found in package.json by running this command:

 ```
npm install
 ```
 
- And then to start running  this project on your machine , run this command:

 ```
npm run start
 ```