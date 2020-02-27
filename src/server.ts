import * as express from 'express';
import path = require('path');
import { router } from './middlewares/routesMiddleware';
import { Express as ExpressApp } from 'express-serve-static-core';

const apiVersion = '/api/v1';
const wildCard = '*';

export default (): ExpressApp => {
    const app = express();

    app.use(apiVersion, router);
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get(wildCard, (_req, res) => {
        res.sendFile(path.join(__dirname + '/client/dist/index.html'));
    });

    return app;
};
