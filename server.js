const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Importa o módulo routes

const app = express();
app.use(cors());

app.use(express.json());

app.use('/', routes); // Usa o módulo routes para lidar com as rotas

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
