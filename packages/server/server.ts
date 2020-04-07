import React from 'react';
import express from 'express';
import cors from 'cors';
import path = require('path');
import { router } from './middlewares/routesMiddleware';
import { HelloWorld } from '@monorepo-react-express/client/components/Hello';
import { Express as ExpressApp } from 'express-serve-static-core';
import { renderToString } from 'react-dom/server';

const html = ({ body }: { body: string }): string => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
    <script src="js/client.js" defer></script>
  </html>
`;

export default (): ExpressApp => {
    const app = express();
    const apiVersion = process.env.API_VERSION ?? '/api/v1';
    app.use(cors());

    app.use(apiVersion, router);

    app.get('/', (_req, res) => {
        const body = renderToString(
            React.createElement(HelloWorld, { framework: 'Foo', compiler: 'Demo' }),
        );

        res.send(
            html({
                body,
            }),
        );
    });

    return app;
};
