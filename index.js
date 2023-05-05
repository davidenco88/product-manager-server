const express = require('express');
const app = express();
const cors = require('cors');

const {
    handleGetAllData,
    handleGetInfo,
    handleGetDataById,
    handleDeleteById,
    handleAddData
  } = require('./controller');

require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Dirección que despliega en el navegador el nombre de la API.
app.get('/', (req, res) => res.send('API PRODUCT MANAGER'));

//Dirección para obtener todo los registros de la DB.
app.get('/api/persons', handleGetAllData);

//Dirección para obtener la cantidad de registros en la DB y la fecha de la solicitud
app.get('/info', handleGetInfo);

//Dirección para obtener un resgistro especifico de la DB.
app.get("/api/persons/:id", handleGetDataById);

//Dirección para eliminar un resgistro especifico de la DB.
app.delete("/api/persons/:id", handleDeleteById);

//Dirección para agregar un resgistro a la DB.
app.post("/api/persons", handleAddData);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`La API esta esuchando el puerto ${port}!`));