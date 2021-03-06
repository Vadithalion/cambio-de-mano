const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());






//La ruta que pongamos aqui, sera la raiz en el archivo que requiramos
app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));


app.listen(PORT, () => console.log('si me lees, eres bueno, muy bueno! y tu puerto esta en el ' +PORT));

module.exports = app;
