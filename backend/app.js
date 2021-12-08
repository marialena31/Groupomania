// imports
const express = require('express');
const { Sequelize } = require('sequelize');
const path = require('path'); 
const app = express();
const helmet = require("helmet");


// import routers
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');


// middleware pour contourner les erreurs de CORS
app.use((req, res, next) => {
  // permet d'accéder à l'API depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Origin', '*');
  // permet d'ajouter les headers mentionnés aux requêtes envoyées vers l'API
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // permet d'envoyer des requêtes avec les méthodes mentionnées (GET, ...)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  // appeler next pour passer au middleware suivant
  next(); 
});


// transformer le corps de la requête en JSON
app.use(express.json());
// middleware pour sécuriser l'app Express en définissant divers headers
app.use(helmet());
// middleware pour dire à l'application de se servir du dossier images
app.use('/images', express.static(path.join(__dirname, 'images')));


// variables d'environnement pour se connecter à la BDD
require('dotenv').config();

const db = new Sequelize(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
});

// test de connection
const testConnection = async () => {
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
};
testConnection();





// routes
app.use('/api/user', userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);



// exportation de la const app pour y accéder depuis les autres fichiers du projet
module.exports = app;