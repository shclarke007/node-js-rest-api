import express from 'express';
import conversationController from '../controllers/ConversationsController';

const router = express.Router();

router.get('/conversations', conversationController.getAllConversations);
router.get('/conversations/:id', conversationController.getConversation);
router.post('/converstations', conversationController.createConversation);
router.put('/conversations:id', conversationController.updateConversation);
router.delete('/conversations/:id', conversationController.deleteConversation);

export default router;
