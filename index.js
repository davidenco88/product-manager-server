const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();


const {
    handleGetAllData,
    handleGetDataById,
    handleDeleteById,
    handleAddData,
    handleUpdateData
  } = require('./controller');

require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Dirección que despliega en el navegador el nombre de la API.
app.get('/', (req, res) => res.send('API PRODUCT MANAGER'));

//Dirección para obtener todo los registros de la DB.
app.get('/api/products', handleGetAllData);

//Dirección para obtener un resgistro especifico de la DB.
app.get("/api/products/:id", handleGetDataById);

//Dirección para eliminar un resgistro especifico de la DB.
app.delete("/api/products/:id", handleDeleteById);

//Dirección para agregar un resgistro a la DB.
app.post("/api/products", handleAddData);

//Dirección para agregar un resgistro a la DB.
app.patch("/api/products/:id", handleUpdateData);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`La API esta esuchando el puerto ${port}!`));