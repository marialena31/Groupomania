/* MODEL DE DONNEES UTILISATEUR */
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
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
    };

    User.init({
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatarUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },  
        {
        sequelize,
        modelName: 'User'
        }
    );
    return User;
  };