const app = require('./app');
const { SERVER_PORT, NODE_ENV } = require('./config/secrets.js');

app.listen(SERVER_PORT, () => {
  console.log(`Listening at http://localhost:${SERVER_PORT} in ${NODE_ENV} mode`);
});
