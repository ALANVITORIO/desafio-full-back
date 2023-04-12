const { insertAddress } = require('./dataBase');

const addresses = [
  {
    street: 'Rua do JavaScript',
    postal_code: '00000-000',
    city: 'São Paulo',
    state: 'São Paulo',
    country: 'Brasil',
    latitude: -23.55052,
    longitude: -46.633308,
  },
  {
    street: 'Avenida Python',
    postal_code: '11111-111',
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    country: 'Brasil',
    latitude: -22.908333,
    longitude: -43.196388,
  },
];

addresses.forEach(async (address) => {
  try {
    await insertAddress(address);
    console.log('Endereço inserido com sucesso');
  } catch (error) {
    console.error('Erro ao inserir endereço:', error);
  }
});
