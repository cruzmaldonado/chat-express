const db = require('../database/database')

const { DataTypes } = require('sequelize')
const Users = require('./user.models')

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false,
        field: 'first_name'
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'image_url'
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_Id',
        references: {
            key: 'id',
            model: Users
        }
        
    },
})

module.exports = Conversations
