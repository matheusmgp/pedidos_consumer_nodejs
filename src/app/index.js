const express = require('express');
require('dotenv').config();
require('./infra/database/index');
const cors = require('cors');
const { errors } = require('celebrate');

//instancio a classe messageBroker e chamo a funcao connect()
require('./services/rabbitMQ/messageBroker').connect();
require('./services/rabbitMQ/consumer');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importando as rotas
require('./routes/routes')(app);
//require('./controllers/index')(app)
app.use(errors());
const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => console.log(`RUNNING on port: ${PORT}`));
