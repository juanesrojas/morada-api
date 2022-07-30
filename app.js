const express = require('express');
const app = express();
const cors = require('cors');
const mongo = require('./connection/mongoconn');

const fileUpload = require('express-fileupload');
require('dotenv').config();

app.use(express.json());//que utilice json para que lo sepa interpretar
app.use(express.urlencoded({extended: false})); //para resolver url que llegan con caracteres extraños

app.use('/static',express.static('public')); //volver publico una carpeta estática

app.use(cors());
app.use(fileUpload());

const port = 3001; //no escoger el 3000 para que no nos genere conflicto con el de react que estamos usando el 3000

const usersRoutes = require('./routes/users');
const propertiesRoutes = require('./routes/properties');
const favoritesRoutes = require('./routes/favorites');

app.use('/users',usersRoutes);
app.use('/properties',propertiesRoutes);
app.use('/favorites',favoritesRoutes);



// ya con esto iniciamos el servidor
app.listen(port, ()=>{
    console.log('server running ...');
});