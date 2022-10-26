const Conversations = require('../models/conversations.models');
const uuid = require('uuid');

const getAllConversations = async (userId) => {
    const conversations = await Conversations.findAll({
        where: { userId}
    })
    return conversations
};

const createConversations = async (data) => {
    const response = await Conversations.create({
        id: uuid.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        userId: data.userId
    })
    return response
};

// /////3.b
const getConversationsById = async (id) => {
    const conversation = await Conversations.findOne({
        where: {
            id
        }
    }) ;
    return conversation
};

const deleteConversationsById = async (id) => {
    const conversation = await Conversations.destroy({
        where: {
            id
        }
    }) ;
    return conversation
} ;

const patchConversationsById = async (data, id) => {
    const conversation = await Conversations.update(data, {
        where: {
            id
        }
    }) ;
    return conversation
}


module.exports = {
    getAllConversations,
    createConversations,
    getConversationsById,
    deleteConversationsById,
    patchConversationsById
}
