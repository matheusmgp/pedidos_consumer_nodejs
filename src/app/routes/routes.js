const express = require('express');
const router = express.Router();

//routes
const pedidoRoutes = require('./pedidos/pedidoRoutes');

module.exports = function (app) {
  app.use('', pedidoRoutes);
};
