const express = require('express');
const morgan = require('morgan');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

//Habilitar bloqueo de CORS
const cors = require('cors');
const lista= ['http://localhost:3000','https://izipay-ejemplo-php.000webhostapp.com','https://prueba55.herokuapp.com'];
app.use(cors({origin: lista}));

//Confiuguracion del puerto
const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas de conexion
app.use('/respuesta',require('./routes/RespuestaIPN.js'));


