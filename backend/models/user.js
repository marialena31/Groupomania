/* MODEL DE DONNEES UTILISATEUR */

const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avatarUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bio: {
        type: Sequelize.TEXT
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});




module.exports = User;
