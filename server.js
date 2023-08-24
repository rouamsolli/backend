const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
require('./config/connect');
const app = express();
const User = require('./models/user');
const PORT = 3000; 


app.use(bodyParser.json());

// Utilisation des routes
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/challenges'));

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});