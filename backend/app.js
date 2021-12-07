// imports Express (framework NodeJS) et Sequelize
const express = require('express');
const { Sequelize } = require('sequelize');

// import Routes
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');


// import méthodes path et express
const path = require('path'); 
const app = express();


// transformer le corps de la requête en JSON
app.use(express.json());

// charge les variables d'environnement pour se connecter à la BDD
require('dotenv').config();

const db = new Sequelize(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
});

// test de connection
const testConnection = async () => {
  try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
};
testConnection();






// exportation de la const app pour y accéder depuis les autres fichiers du projet
module.exports = app;