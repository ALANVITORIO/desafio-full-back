const express = require('express');
const router = express.Router();
const { getAllAddresses, insertAddress, db } = require('./dataBase');

// Rota para obter todos os endereços
router.get('/addresses', async (req, res) => {
  try {
    const addresses = await getAllAddresses();
    res.json({
      message: 'Sucesso',
      data: addresses,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para adicionar um novo endereço
router.post('/addresses', async (req, res) => {
  const { rua, cidade, estado, pais, cep } = req.body;

  try {
    const newAddress = await insertAddress({
      street: rua,
      city: cidade,
      state: estado,
      country: pais,
      postal_code: cep,
    });
    res.json({
      message: 'Endereço adicionado com sucesso',
      data: newAddress,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
