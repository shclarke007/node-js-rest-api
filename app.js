import express from 'express';
import router from './routes/index.js';
import bodyParser from 'body-parser';
const app = express();

// Parse incoming requests data and use router middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
