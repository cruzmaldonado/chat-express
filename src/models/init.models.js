const Conversations = require('./conversations.models');
const Message = require('./message.models');
const Participants = require('./participants.models');
const Users = require('./user.models')

const initModels =  () => {
    Users.hasMany(Conversations) //----> Un usuario es tiene muchas conversaciones
    Conversations.belongsTo(Users) //----> Muchas conversaciones pertenecen a un usuario

    Users.hasMany(Participants)
    Participants.belongsTo(Users)
    
    
    Users.hasMany(Message) //-----> Un usuario envia muchos mensajes
    Message.belongsTo(Users) ///----> Muchos mensajes puden ser enviados por un usuario
    
    Conversations.hasMany(Participants) //----> Una conversacion tiene muchos participantes
    Participants.belongsTo(Conversations) //---> Muchos participantes tienen una conversacion
    
    Conversations.hasMany(Message) //---> Una conversacion tiene muchos mensajes
    Message.belongsTo(Conversations) //--> Muchos mensajes pertenecen a una conversacion
};

module.exports = initModels

