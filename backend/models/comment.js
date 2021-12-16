/* MODEL DE DONNEES COMMENTAIRE */

const Sequelize = require('sequelize');
const db = require('../db');


    /*class Comment extends Model {
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
        };*/

const Comment = db.define('comment',{
        content: {
            type : Sequelize.TEXT,
            allowNull: false
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER
        },
        postId: {
            type: Sequelize.INTEGER
        }          
});

module.exports = Comment;