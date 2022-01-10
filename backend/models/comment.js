/* MODEL DE DONNEES COMMENTAIRE */

const Sequelize = require('sequelize');
const db = require('../db');

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