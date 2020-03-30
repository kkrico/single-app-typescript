import express from 'express';
import cors from 'cors';
import path = require('path');
import { router } from './middlewares/routesMiddleware';
import { Express as ExpressApp } from 'express-serve-static-core';

export default (): ExpressApp => {
    const app = express();
    const apiVersion = process.env.API_VERSION ?? '/api/v1';
    app.use(cors());

    app.use(apiVersion, router);
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get(apiVersion, (_req, res) => {
        res.sendFile(path.join(__dirname + '/client/dist/index.html'));
    });

    return app;
};
