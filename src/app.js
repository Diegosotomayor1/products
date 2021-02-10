const express = require('express');
const mysql = require('mysql');
const path = require('path');
const morgan = require('morgan');
const myConncection = require ('express-myconnection');
const app = express();

//importando rutas

const customerRoutes = require('./routes/product');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConncection(mysql, {
    host :'bhigeh01va3q9tpjv4rx-mysql.services.clever-cloud.com',
    user: 'u52ddxamno4hw6lv',
    password: 'eLrPXnz7wN8f3PQzcBfT',
    port: 3306,
    database: 'bhigeh01va3q9tpjv4rx'
},'single'));
app.use(express.urlencoded({extended:false}));

//rutas o routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));

// empezando el servidor
app.listen(app.get('port'), () =>{
    console.log("Server on port 3000")

});

