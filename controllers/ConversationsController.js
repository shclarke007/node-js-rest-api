import store from '../db/conversationsStore';

class ConversationsController {
  getAllConversations(req, res) {
    console.log('Responding to conversations route');
    res.status(200).send({
      success: 'true',
      message: 'conversations retrieved succesfully',
      conversations: store
    });
  }

  getConversation(req, res) {
    const id = parseInt(req.params.id, 10);
    store.map(conversation => {
      if (conversation.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'conversation retrieved successfully',
          conversation
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'conversation does not exist'
    });
  }

  deleteConversation(req, res) {
    const id = parseInt(req.params.id, 10);
    store.map((conversation, index) => {
      if (conversation.id === id) {
        store.splice(index, 1);
        return res.status(200).send({
          success: 'true',
          message: 'conversation deleted successfuly'
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'conversation not found'
    });
  }

  createConversation(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    }
    const conversation = {
      id: store.length + 1,
      title: req.body.title
    };
    store.push(conversation);
    return res.status(201).send({
      success: 'true',
      message: 'conversation added successfully',
      store
    });
  }

  updateConversation(req, res) {
    const id = parseInt(req.params.id, 10);
    let conversationFound;
    let itemIndex;
    store.map((conversation, index) => {
      if (conversation.id === id) {
        conversationFound = conversation;
        itemIndex = index;
      }
    });

    if (!conversationFound) {
      return res.status(404).send({
        success: 'false',
        message: 'conversation not found'
      });
    }
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    }

    const updatedConversation = {
      id: conversationFound.id,
      title: req.body.title || conversationFound.title
    };

    store.splice(itemIndex, 1, updatedConversation);

    return res.status(201).send({
      success: 'true',
      message: 'conversation added successfully',
      updatedConversation
    });
  }
}

const conversationController = new ConversationsController();
export default conversationController;
