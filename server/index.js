// TODO: Create an express server
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const controller = require('./controller');

const server = express();
const port = 3000;
const router = express.Router();

server.use(express.json());
server.use(express.static(path.join(__dirname, '../client/dist')));
server.use(morgan('dev'));
server.use(cors());
server.use('/api', router);

router
  .route('/')
  .get(controller.get)
  .patch(controller.update)

router
  .route('/type')
  .get(controller.getType)


server.listen(port, () => {
  console.log(`Listening on port ${port}`);
})