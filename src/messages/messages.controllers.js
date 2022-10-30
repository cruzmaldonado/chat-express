const Message = require('../models/message.models') ;
const uuid = require('uuid');



const createMessage = async (data) => {
    const messages = await Message.create({
        id: uuid.v4(),
        userId: data.userId,
        conversationId: data.conversationId,
        message: data.message
    }) ;
    return messages
} ;

const getAllMessages= async (conversationId) => {
    const data =  await Message.findAll({
        where: {
            conversationId
        }
    });
    return data
} ;

const getMessageById = async (id) => {
    const message = await Message.findOne({
        where: {
            id
        }
    }) ;
    return message
};

const deleteMessageById = async (id) => {
    const message = await Message.destroy({
        where: {
            id
        }
    }) ;
    return message
} ;



module.exports = {
    createMessage,
    getAllMessages,
    getMessageById,
    deleteMessageById
}
