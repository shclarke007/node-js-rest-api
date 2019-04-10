import store from '../db/messagesStore';

class MessagesController {
  getAllMessages(req, res) {
    res.status(200).send({
      success: 'true',
      message: 'messages retrieved succesfully',
      messages: store
    });
  }

  getMessage(req, res) {
    const id = parseInt(req.params.id, 10);
    store.map(msg => {
      if (msg.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'message retrieved successfully',
          msg
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'message does not exist'
    });
  }

  deleteMessage(req, res) {
    const id = parseInt(req.params.id, 10);
    store.map((msg, index) => {
      if (msg.id === id) {
        store.splice(index, 1);
        return res.status(200).send({
          success: 'true',
          message: 'message deleted successfuly'
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'message not found'
    });
  }

  createMessage(req, res) {
    if (!req.body.text) {
      return res.status(400).send({
        success: 'false',
        message: 'text body is required'
      });
    }
    const newMessage = {
      id: store.length + 1,
      text: req.body.text,
      attachment: req.body.attachment,
      conversationId: req.body.conversationId
    };
    store.push(newMessage);
    return res.status(201).send({
      success: 'true',
      message: 'message added successfully',
      store
    });
  }

  updateMessage(req, res) {
    const id = parseInt(req.params.id, 10);
    let messageFound;
    let itemIndex;
    store.map((msg, index) => {
      if (msg.id === id) {
        messageFound = msg;
        itemIndex = index;
      }
    });

    if (!messageFound) {
      return res.status(404).send({
        success: 'false',
        message: 'message not found'
      });
    }
    if (!req.body.text || !req.body.conversationId) {
      return res.status(400).send({
        success: 'false',
        message: 'text body is required'
      });
    }

    const updatedMessage = {
      id: messageFound.id,
      text: req.body.text || messageFound.text
    };

    store.splice(itemIndex, 1, updatedMessage);

    return res.status(201).send({
      success: 'true',
      message: 'message added successfully',
      updatedMessage
    });
  }
}

const messageController = new MessagesController();
export default messageController;
