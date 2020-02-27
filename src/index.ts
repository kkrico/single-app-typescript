/* eslint-env node, mocha */
import * as express from 'express';
import path = require('path');
require('dotenv').config();

const PORT = process.env.PORT ?? 8080;
const app = express();

export const helloWorld = (req: express.Request, res: express.Response) => {
    console.log(process.env.Path);
    res.json({
        message: 'Mensagem de Exemplo ' + process.env.FOO,
    });
};

app.use('/api/v1', express.Router().get('/hello-world', helloWorld));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
    console.log(`Aplicação escutando na porta ${PORT}`);
});
