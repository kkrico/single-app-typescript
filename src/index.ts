import expressApp from './server';
require('dotenv').config();

const PORT = process.env.PORT ?? 8080;
const app = expressApp();

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
    console.log(`Aplicação escutando na porta ${PORT}`);
});
