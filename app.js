let app = require('./config/express')();

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
