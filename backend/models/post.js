/* MODEL DE DONNEES ARTICLE */

const Sequelize = require('sequelize');
const db = require('../db');


    /*class Post extends Model {
        static associate(models) {
            Post.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false,
                    onDelete: 'cascade'
                }
            })
            Post.hasMany(models.Comment)
            Post.hasMany(models.Like)
        };*/
 

const Post = db.define('post',{
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        imageUrl: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER
        },
        likes: {
            type: Sequelize.INTEGER
        }
});
    
module.exports = Post;

