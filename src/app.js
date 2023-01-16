require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { NODE_ENV } = require('./config/secrets.js');
const routes = require('./routes');
const { dbConnection } = require('./database/config');
const app = express();

// allow cors for development environment
if (NODE_ENV === 'development') {
  app.use(cors());
} 
// Conexion a Base de datos 
const connectDB = async () => {
    await dbConnection();
}
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.toString() });
  return next;
});

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.json({
    errCode: '404',
    errMsg: 'Ruta no encontrada',
    data: {},
  });
});


module.exports = app;
