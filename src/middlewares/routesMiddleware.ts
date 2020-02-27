import * as express from 'express';

enum RoutesEnum {
    HelloWorld = '/hello-world',
    Foo = '/foo',
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

export const router = express
    .Router()
    .get(RoutesEnum.HelloWorld, helloWorld)
    .get(RoutesEnum.Foo, foo);
