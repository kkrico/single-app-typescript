import '@monorepo-react-express/shared';
import expressApp from './server';

const PORT = process.env.API_PORT ?? 8080;
const app = expressApp();

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
    console.log(`Server escutando na porta ${PORT}`);
});
