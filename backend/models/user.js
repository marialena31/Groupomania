/* MODEL DE DONNEES UTILISATEUR */

const Sequelize = require('sequelize');
const db = require('../db');

/*class User extends Model {
    static associate(models) {
        User.hasMany(models.Post, {
            onDelete: 'cascade'
        })
        User.hasMany(models.Comment, {
            onDelete: 'cascade'
        })
        User.hasMany(models.Like, {
            onDelete: 'cascade'
        })
    }
};*/

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
