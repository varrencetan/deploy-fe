# MERN Stack CRUD
Simple CRUD app built with MySQL, ExpressJS, React, & Node.

Database    : MySQL
Backend     : localhost:5000
Frontend    : localhost:3000

# Setup

## Database
First you need to create database & user in MySQL in order to connect `Backend` to `Database`.

```
sudo mysql -u root -p
```

```
create database people;
```
```
create user people identified by 'people';
```
```
grant all privileges on people.* to people;
```
Then all you have to do now is restore database using this command
```
mysql -u people -p people < database/crud_db.sql
```

## Backend

Simply install all dependencies then start the app.
```
npm install
```
And you can start with this command. You'll see the server is running on port `5000`
```
npm start
```

## Frontend

Because this is a React app, you can install all dependencies.
```
npm install
```
Then start the app. You'll see the app is running on port `3000`
```
npm start
```