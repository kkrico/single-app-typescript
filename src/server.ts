import * as express from 'express';
import path = require('path');
import { router } from './middlewares/routesMiddleware';
import { Express as ExpressApp } from 'express-serve-static-core';

enum AppConstants {
    apiVersion = '/api/v1',
    wildCard = '*',
}

export default (): ExpressApp => {
    const app = express();

    app.use(AppConstants.apiVersion, router);
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get(AppConstants.apiVersion, (_req, res) => {
        res.sendFile(path.join(__dirname + '/client/dist/index.html'));
    });

    return app;
};
