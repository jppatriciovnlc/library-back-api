# Api for libraries

## API for libraries (books, not codes), the plan is to establish a backend to be consumed by react and kotlin apps. But it should work with anything else.

![](https://img.shields.io/badge/status-inProgress-yellow.svg)
![](https://img.shields.io/badge/Node-14.15.3-green.svg)
![](https://img.shields.io/badge/license-MIT-blue.svg)

---


## Index

- [Overview](#-overview)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Install](#-install)
- [How To Use](#-how-to-use)
- [Technologies](#-technologies)
- [Contact](#-contact)

---


## Overview
API for library management, including user registration, login routine, book registration and loan management.
The application was built in Node, using typescrupt and typeORM as an interface for a mariaDB database.

---


## Features

These are the main features I have planned, others can be added as needed.
- [x] User registration
- [ ] User Editing
- [ ] User deletion
- [ ] Listing of users
- [ ] Login
- [ ] Logoff
- [x] Book registration
- [ ] Book editing
- [ ] Deleting books
- [ ] Listing of books
- [ ] Book search by attribute (name, author, publisher...)
- [ ] Book loan interaction

---

## Prerequisites

NPM, YARN and GIT installed. You will also need access to a mariaDB or MySQL database. For other databases, changes to migrations and entities may be required.

---

## Install


Clone the repository:
```bash
$ git clone https://github.com/jppatriciovnlc/library-back-api.git
```

Create a ormconfig.json file in library-back-api folder:
```json
{
    "type": "mysql",
    "host": "endereço do servidor (ip o dns)",
    "port": 3306,
    "username": "usuario",
    "password": "senha",
    "database": "library",
    "migrations": ["src/database/migrations/*.ts"],   
    "entities": ["src/database/entities/*.ts"],
    "cli": {
       "migrationsDir": "src/database/migrations",
       "entitiesDir": "src/database/entities"
    }
 }
```

Install the dependencies:
```bash
$ yarn install
```

Create the database tables (the library schema must exists):
```bash
$ yarn typeorm migration:run
```

Start the API in dev mode:
```bash
$ yarn dev
```

Enjoy it! The server will start in the localhost:3000

---

## How To Use

The following routes are available:


* Create an user:

post: http://localhost:3000/user

```json
{
	"name" : "",
	"password" : "",
	"group" : "", 
	"phone" : "",
	"email" : "", 
	"status" : ""
}
```

* Create a book:

post: http://localhost:3000/book

```json
{
	"name" : "",
	"author" : "",
	"publisher" : "",
	"publication" : "",
	"status" : ""
}
```

---

## Technologies
The project was developed using:
* Nodejs
* Express
* Typescrypt
* Typeorm
---

## Contact

This api will be updated as needed by the apps I'm practicing.
If you have any questions about use, improvement tip, feel free to contact me by e-mail: joaoppatricio-vnlc@outlook.com
