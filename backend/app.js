// imports packages Express et Sequelize
const express = require('express');
const sequelize = require('sequelize');

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

const mysql = require('mysql');

const db = mysql.createConnection({

    host: "localhost",
 
    user: "nom_utilisateur",
 
    password: "mot_de_passe_utilisateur"
 
  });

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});







// exportation de la const app pour y accéder depuis les autres fichiers du projet
module.exports = app;