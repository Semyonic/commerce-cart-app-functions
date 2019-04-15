const functions = require('firebase-functions');
const cors = require('cors');
const app = require('express')();

const mockProducts = [
  {
    id: '1',
    createdAt: '2019-04-03T21:27:44.506Z',
    name: 'Handcrafted Plastic Mouse',
    image: 'http://lorempixel.com/640/480/transport',
    type: 'Pizza',
    price: '222.00',
    quantity: 1,
  },
  {
    id: '2',
    createdAt: '2019-04-03T22:06:06.495Z',
    name: 'Tasty Plastic Mouse',
    image: 'http://lorempixel.com/640/480/people',
    type: 'Towels',
    price: '64.00',
    quantity: 1,
  },
  {
    id: '3',
    createdAt: '2019-04-04T17:03:13.950Z',
    name: 'Small Rubber Soap',
    image: 'http://lorempixel.com/640/480/sports',
    type: 'Fish',
    price: '430.00',
    quantity: 1,
  },
  {
    id: '4',
    createdAt: '2019-04-04T05:01:15.119Z',
    name: 'Ergonomic Metal Tuna',
    image: 'http://lorempixel.com/640/480/animals',
    type: 'Salad',
    price: '603.00',
    quantity: 1,
  },
  {
    id: '5',
    createdAt: '2019-04-04T05:00:54.641Z',
    name: 'Tasty Rubber Hat',
    image: 'http://lorempixel.com/640/480/abstract',
    type: 'Bike',
    price: '918.00',
    quantity: 1,
  },
  {
    id: '6',
    createdAt: '2019-04-04T07:10:18.054Z',
    name: 'Small Cotton Tuna',
    image: 'http://lorempixel.com/640/480/animals',
    type: 'Keyboard',
    price: '194.00',
    quantity: 1,
  },
];
const mockMenu = [{ href: '', text: 'Home' }, { href: 'products', text: 'Products' }];
const mockEnvs = [
  {
    environment: 'local',
    production: true,
    API: 'http://localhost:5000/mock-json-backend/us-central1/root/',
  },
  {
    environment: 'dev',
    production: true,
    API: 'https://us-central1-mock-json-backend.cloudfunctions.net/',
  },
  {
    environment: 'test',
    production: true,
    API: 'https://us-central1-mock-json-backend.cloudfunctions.net/',
  },
  {
    environment: 'prod',
    production: true,
    API: 'https://us-central1-mock-json-backend.cloudfunctions.net/',
  }
];

app.use(cors());

app.get('/', (req, res) => {
  res.send(`Root page`);
});

app.get('/menu', (req, res) => {
  res.send(mockMenu);
});

app.get('/products', (req, res) => {
  res.send(mockProducts);
});

app.get('/config', (req, res) => {
  res.send(mockEnvs[0]);
});

app.get('/config/:name', (req, res) => {
  res.send(mockEnvs.filter(x => x.environment === req.params.name))
});


exports.root = functions.https.onRequest(app);