import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

class App {
    constructor() {
        this.server = express();

        this.bodyParser();
        this.routes();
    }

    bodyParser() {
        this.server.use(bodyParser.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
