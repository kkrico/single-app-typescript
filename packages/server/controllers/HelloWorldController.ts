import * as express from 'express';

class HelloWorldController {
    async index(_req: express.Request, res: express.Response): Promise<void> {
        res.json({
            message: 'Mensagem de Exemplo ' + process.env.FOO,
        });
    }
}

export default new HelloWorldController();
