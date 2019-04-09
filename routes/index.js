import express from 'express';
import conversationController from '../controllers/ConversationsController';
import messageController from '../controllers/MessagesController';

const router = express.Router();

router.get('/conversations', conversationController.getAllConversations);
router.get('/conversations/:id', conversationController.getConversation);
router.post('/converstations', conversationController.createConversation);
router.put('/conversations:id', conversationController.updateConversation);
router.delete('/conversations/:id', conversationController.deleteConversation);

router.get('/messages', messageController.getAllMessages);
router.get('/messages/:id', messageController.getMessage);
router.post('/messages', messageController.createMessage);
router.put('/messages:id', messageController.updateMessage);
router.delete('/messages/:id', messageController.deleteMessage);

export default router;
