/* MODEL DE DONNEES LIKE */

const Sequelize = require('sequelize');
const db = require('../db');

    /*class Like extends Model {
        static associate(models) {
            Like.belongsTo(models.User, { 
                foreignKey: {
                    allowNull: false,
                    onDelete:'cascade'
                }
            })
            Like.belongsTo(models.Post, { 
                foreignKey: {
                    allowNull: false,
                    onDelete:'cascade'
                }
            })
        };*/

const Like = db.define('like',{
        userId: {
            type: Sequelize.INTEGER
        },
        postId: {
            type: Sequelize.INTEGER
        } 
});

module.exports = Like;