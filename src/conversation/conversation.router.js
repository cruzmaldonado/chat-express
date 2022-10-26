const router = require('express').Router() ;
const passport = require('passport') ;

const conversationServices = require('./conversation.services') ;
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(passport.authenticate('jwt', {session: false}),
        conversationServices.getAllConversations)

    .post(passport.authenticate('jwt', {session: false}),
        conversationServices.createConversations)

router.route('/:conversation_id')
        .get(conversationServices.getConversationById)

        .delete(conversationServices.deleteConversation)

module.exports = router

