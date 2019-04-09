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

app.get('/messages', (req, res) => {
  console.log('Responding to messages route');
  res.status(200).send('JSON file for messages go here');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
