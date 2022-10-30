const messagesController = require('./messages.controllers') ;

const createMessages = (req, res) => {
    const userId = req.user.id ;
    const conversationId = req.params.conversations_id ;
    const { message } = req.body ;
    

    if (message) {
        messagesController.createMessage({userId, conversationId, message})
            .then( data => {
                res.status(201).json(data)
            } )
            .catch( err => {
                res.status(400).json({message: err.message})
            } )
    }else{
        res.status(400).json({
            error: 'Mising messages',
            fields: {
                message : 'string',
            }
        })
    }
} ;

const getAllMessages = (req, res) => {
    const conversationId = req.params.conversations_id ;
    messagesController.getAllMessages(conversationId)
        .then( data => {
            res.status(200).json(data)
        } )
        .catch( err => {
            res.status(400).json({
                message: err.message
            })
        } )
    
};

const getMessageById = (req, res) => {

    // !no entiendo bien como funciona req.params 
    // !profundizar mas en el tema
    const id = req.params.messages_id ;
    
    messagesController.getMessageById(id)
        .then( data => {
            res.status(200).json(data)
        }  )
        .catch( err => {
            // res.status(404).json({message: `${err.message},  ${id}`})
            res.status(404).json({message: `${id}`})
        } )
} ;

const deleteMessageById = (req, res) => {
    const id = req.params.messages_id

    messagesController.deleteMessageById(id)
        .then( data => {
            if (data) {
                res.status(204).json()
            }else{
                res.status(404).json({err: 'invalid Id'})
            }
        } )
        .catch( err => {
            res.status(400).json({message: err.message})
        } )
    
} ;



module.exports = {
    createMessages,
    getAllMessages,
    getMessageById,
    deleteMessageById
}
