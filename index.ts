import express from 'express';
import bodyParser from 'body-parser';
import router from './src/router'

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});