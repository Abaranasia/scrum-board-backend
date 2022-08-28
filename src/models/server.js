const express = require('express');
const cors = require('cors');
const router = require('../routes/users');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/users';
    // Database connection

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    // For using cors to protect our routes
    this.app.use(cors());

    // Read and parse of the body to json format
    this.app.use(express.json())

    // Exposing the public directory
    this.app.use(express.static('public'));
  };


  routes() {
    this.app.use(this.usersPath, require('../routes/users'));
  };


  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: `, this.port)
    });
  };
}

module.exports = Server;