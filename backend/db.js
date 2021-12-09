const Sequelize = require('sequelize');

// variables d'environnement pour se connecter à la BDD
require('dotenv').config();

const db = new Sequelize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  define: {
    timestamps: true,
    underscored: true
},
logging: false,
pool: {
    max: 1500,
    min: 0,
    acquire: 30000,
    idle: 10000
}
});

db.authenticate()
.then(() => console.log('connected to mysql database...'))
.catch(err => console.log('failed to connect database', err.message));
/*
db.sync()  //Sync all models that are not
*/
module.exports = db;