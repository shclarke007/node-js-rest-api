import express from 'express';
import store from './db/store';
const app = express();

app.get('/conversations', (req, res) => {
  console.log('Responding to conversations route');
  res.status(200).send({
    success: 'true',
    message: 'conversations retrieved succesfully',
    conversations: store
  });
});

app.get('/conversations/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  store.map((conversation) => {
    if (conversation.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'conversation retrieved successfully',
        conversation,
      });
    } 
  });
 return res.status(404).send({
   success: 'false',
   message: 'conversation does not exist',
  });
});

app.delete('/conversations/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  store.map((conversation, index) => {
    if (conversation.id === id) {
       store.splice(index, 1);
       return res.status(200).send({
         success: 'true',
         message: 'conversation deleted successfuly',
       });
    }
  });
    return res.status(404).send({
      success: 'false',
      message: 'conversation not found',
    });
});

app.get('/messages', (req, res) => {
  console.log('Responding to messages route');
  res.status(200).send({
    success: 'true',
    message: 'messages retrieved succesfully'
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
