const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config()

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`La API esta esuchando el puerto ${port}!`));