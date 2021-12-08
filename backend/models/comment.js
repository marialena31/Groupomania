/* MODEL DE DONNEES COMMENTAIRE */
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false,
                    onDelete: 'cascade'
                }
            });

            Comment.belongsTo(models.Post, {
                foreignKey: {
                    allowNull: false,
                    onDelete: 'cascade'
                }
            });
        }
    };

    Comment.init({
        content: {
            type : DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER
        },
        postId: {
            type: DataTypes.INTEGER
        }          
    },
        {
        sequelize,
        modelName: 'Comment',
        }
    );

    return Comment;
};