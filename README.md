<p align="center">
  <a href="" rel="noopener">
 <img src="https://www.flaticon.com/svg/vstatic/svg/1662/1662402.svg?token=exp=1620736423~hmac=702bbf26fb7519da9894e8e54cc9b591" alt="Project logo"></a>
</p>
<h3 align="center">SMART FRIDGE-backend</h3>

<div align="center">


[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> Proyecto Full Stack MERN - Backend SMART FRIDGE
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

This project addresses the Backend part of the full stack project at the end of the GeeksHubs bootcamps. The idea of ​​the job is to be able to easily search for recipes with the ingredients that are in your fridge. In this way, the different possibilities are offered to be able to find your ideal dish without effort, by means of a list of your foods to search.
In addition to this, there is also the option to explore the application and discover new recipes based on different criteria, such as diet (gluten, vegan, etc.), preparation in minutes or extended ingredients for said recipe. In addition, you can save all the recipes you want to favorites, so you can have quick access to your favorite dishes.

## 💡 Idea / Solution <a name = "idea"></a>

In order to develop the previous idea, a diagram has been built with the two fundamental tables of this Backend project. Despite being a MERN project, both tables with their data are attached below to facilitate understanding of the project.

TABLA RELACIONAL


## 🚀 Future Scope <a name = "future_scope"></a>

Work is being done on the construction of more user roles with reserved access to different backend routes and interactions with the database, which will then also have output on the frontend.

## 🏁 Getting Started <a name = "getting_started"></a>
 
These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

The project is in a Docker development environment, which also includes Node. Therefore, in order to start the project with all the dependencies used, we must execute:

```
Docker-compose up --build
```

### Installing

A step by step series of examples that tell you how to get a development env running.
In order to start the database and the server once all the dependencies are installed, the following command will be executed:

```
Docker-compose up
```

## 🎈 Usage <a name="usage"></a>

The backend of the web offers us a series of routes through which we can interact with our database through the APIRestFul protocol.
On the one hand, on the User side, we have the user registration by creating a new instance of the User model (POST), as well as the log in once it is registered. In addition, there is also the option to modify the personal registration data (UPDATE), as well as the deletion of the registered account (DELETE). Through the GET method we can know the data of all registered users (user role different from User).
For its part, in the Store part, we find the POST option to save a dish as a favorite and be able to delete it from our favorites list (DELETE). In addition, we also have the option to read data (GET), with the option to obtain all our favorite dishes, as well as all the favorite dishes of all users, also filtered by Id and by Recipe Title, reserved for the role Admin user (future improvements).
All of these routes are available and can be tested in Postman:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14551978-babf3fe9-9f94-48df-919c-c27172d750d9?action=collection%2Ffork&collection-url=entityId%3D14551978-babf3fe9-9f94-48df-919c-c27172d750d9%26entityType%3Dcollection%26workspaceId%3Dd2caca0a-3cd4-4c24-a9f5-39d9e4bc00e1)

In addition, we have also worked with the Spoonacular API, from which all the information on the recipes and ingredients is extracted. GET-type queries are carried out, through the search routes for ingredients, search for recipes by ingredients, obtaining the details of the recipe, as well as the random search for recipes based on criteria.
Also attached below are all the routes offered by the API to be able to test in Postman:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14551978-6092a68c-465e-4a55-aa31-c6f12f017b9b?action=collection%2Ffork&collection-url=entityId%3D14551978-6092a68c-465e-4a55-aa31-c6f12f017b9b%26entityType%3Dcollection%26workspaceId%3Dd2caca0a-3cd4-4c24-a9f5-39d9e4bc00e1)


## ⛏️ Built With <a name = "tech_stack"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - Database ORM
- [Express](https://expressjs.com/) - Server Framework
- [JavaScript](https://www.javascript.com/) - Programming Language
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Nodemon](https://nodejs.org/en/) - Server Environment
- [Docker](https://nodejs.org/en/) - Server Environment
- [Cors](https://www.npmjs.com/package/cors) - Middleware
- [JWT Token](https://jwt.io/) - Library
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Library
- [GitFlow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow) - Workflow Methodology


## ✍️ Authors <a name = "authors"></a>

- [@LauraPorto](https://github.com/LauraPorto) - Idea & Initial work


## 🎉 Acknowledgments <a name = "acknowledgments"></a>

To all my fellow Bootcamps, for help, support, and laughs, when needed.