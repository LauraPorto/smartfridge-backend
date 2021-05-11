<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">SMART FRIDGE-backend</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg)](http://hackathon.url.com)
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

Este proyecto aborda la parte Backend del proyecto full stack para final del bootcamps de GeeksHubs. La idea del trabajo es poder buscar recetas fácilmente con los ingredientes que hay en tu nevera. De este modo, se ofrecen las diferentes posibilidades para poder encontrar tu plato ideal sin esfuerzo, mediante una lista de tus alimentos para la búsqueda.
Además de esto, también existe la opción de explorar por la aplicación y descubrir recetas nuevas en función de diferentes criterios, como la dieta (gluten, vegan, etc.), la preparación en minutos o los ingredientes extendidos para dicha receta. Además, podrás guardar en favoritos todas las recetas que quieras, para poder tener acceso rápido a tus platos favoritos.  

## 💡 Idea / Solution <a name = "idea"></a>

Para poder desarrollar la anterior idea, se ha construido un esquema con las dos tablas fundamentales de este proyecto Backend. A pesar de tratarse de un proyecto MERN, se adjunta a continuación ambas tablas con sus datos para facilitar la comprensión del proyecto. 

TABLA RELACIONAL


## 🚀 Future Scope <a name = "future_scope"></a>

Se está trabajando en la construcción de más roles de usuario con acceso reservado a diferentes rutas de backend e interacciones con la base de datos, que luego tendrán salida también en el frontend.

## 🏁 Getting Started <a name = "getting_started"></a>
 
These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

El proyecto está en un entorno de desarrollo Docker, que incluye también Node. Por tanto, para poder arrancar el proyecto con todas las dependencias utilizadas, debemos ejecutar: 

```
Docker-compose up --build
```

### Installing

A step by step series of examples that tell you how to get a development env running.
Para poder arrancar la base de datos y el servidor una vez estén instaladas todas las dependencias, se ejecutará el comando siguiente:

```
Docker-compose up
```


## 🎈 Usage <a name="usage"></a>

El backend de la web nos ofrece una serie de rutas a través de las cuales podemos interactuar con nuestra base de datos mediante el protocolo APIRestFul. 
Por una parte, en la parte del Usuario, tenemos el registro de usuario mediante la creación de una nueva instancia del modelo User (POST), así como el log in una vez está registrado. Además, existe también la opción de modificar los datos personales de registro (UPDATE), así como el borrado de la cuenta registrada (DELETE). A través del método GET podemos conocer los datos de todos los usuarios registrados (rol de usuario distinto a User).
Por su parte, en la parte de Store, nos encontramos con la opción POST de guardar un plato como favorito y poder borrarlo de nuestra lista de favoritos (DELETE). Además, también tenemos la opción de lectura de datos (GET), con la opción de obtener todos nuestros platos favoritos, así como todos los platos favoritos de todos los usuarios, filtrados también por Id y por Título de la receta, reservado para el rol de usuario Admin (futuras mejoras).
Todas estas rutas están disponibles y pueden ser probadas en Postman:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14551978-babf3fe9-9f94-48df-919c-c27172d750d9?action=collection%2Ffork&collection-url=entityId%3D14551978-babf3fe9-9f94-48df-919c-c27172d750d9%26entityType%3Dcollection%26workspaceId%3Dd2caca0a-3cd4-4c24-a9f5-39d9e4bc00e1)

Además, se ha trabajado también con la API Spoonacular, de donde se extrae toda la información de las recetas y los ingredientes. Se realizan consultas de tipo GET, mediante las rutas de búsqueda de ingredientes, búsqueda de recetas por ingredientes, obtención de los detalles de la receta, así como la búsqueda aleatoria de recetas en función de criterios.
Se adjunta también a continuación todas las rutas que ofrece la API para poder probar en Postman: 

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

A todos mis compañeros de Bootcamp, por la ayuda, el apoyo y las risas, cuando se necesitan.
