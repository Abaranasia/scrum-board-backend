const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Database connection

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
  };


  routes() {
  };


  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: `, this.port)
    });
  };
}

module.exports = Server;