import * as express from 'express';

class FooController {
    async index(_req: express.Request, res: express.Response): Promise<void> {
        res.json({
            message: 'bar',
        });
    }
}

export default new FooController();
