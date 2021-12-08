/* MODEL DE DONNEES ARTICLE */
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            Post.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false,
                    onDelete: 'cascade'
                }
            })
            Post.hasMany(models.Comment)
            Post.hasMany(models.Like)
        }
    };

    Post.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER
        },
        likes: {
            type: DataTypes.INTEGER
        }
    },  
        {
        sequelize,
        modelName: 'Post',
        }
    );
    
    return Post;
};