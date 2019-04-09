const express = require('express');
const app = express();

app.get('/conversations', (req, res) => {
  console.log('Responding to conversations route');
  res.status(200).send('JSON file should go here');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
