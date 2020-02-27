/* eslint-env node, mocha */
import * as express from 'express';
import path = require('path');
require('dotenv').config();

const PORT = process.env.PORT ?? 8080;
const app = express();

enum Route {
    helloWorld = '/helloWrold',
    foo = '/foo',
    wildCard = '*',
}

const helloWorld = (_req: express.Request, res: express.Response): void => {
    res.json({
        message: 'Mensagem de Exemplo ' + process.env.FOO,
    });
};

const foo = (_req: express.Request, res: express.Response): void => {
    res.json({
        message: 'bar',
    });
};

const router = express
    .Router()
    .get(Route.helloWorld, helloWorld)
    .get(Route.foo, foo);

app.use('/api/v1', router);
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get(Route.wildCard, (_req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
    console.log(`Aplicação escutando na porta ${PORT}`);
});
