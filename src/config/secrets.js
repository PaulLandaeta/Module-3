const dotenv = require('dotenv');
const fs = require('fs');

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
}

// env is default to "development" unless env is specified
let node_env;
if (process.env.NODE_ENV) {
  node_env = process.env.NODE_ENV;
  console.log(node_env);
} else {
  node_env = 'development';
}
export const NODE_ENV = node_env;

// port is default to 5000 unless env is specified
let server_port;
if (process.env.NODE_PORT) {
  server_port = process.env.NODE_PORT;
} else {
  server_port = 5000;
}
export const SERVER_PORT = server_port;
