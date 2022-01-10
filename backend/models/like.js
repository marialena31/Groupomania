/* MODEL DE DONNEES LIKE */

const Sequelize = require('sequelize');
const db = require('../db');

const Like = db.define('like',{
        userId: {
            type: Sequelize.INTEGER
        },
        postId: {
            type: Sequelize.INTEGER
        } 
});


module.exports = Like;