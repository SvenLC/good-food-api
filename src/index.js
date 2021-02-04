import 'regenerator-runtime/runtime.js';
import express from 'express';
import mongoose from 'mongoose';

import { handleError, handleNotFound } from './shared/error';
import { restaurantRouter } from './restaurant/restaurant.route';
import { clientRouter } from './client/client.route';

const mongoDB = process.env.DB_URI || 'mongodb://127.0.0.1/good-food';

const app = express();
app.use(express.json());

console.log(mongoDB);

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('mongoose is connected');
});

app.use('/restaurants', restaurantRouter);
app.use('/clients', clientRouter);

app.get('/check', (req, res) => {
  res.status(200).json('Alive !');
});

app.use(handleNotFound);
app.use(handleError);

app.listen(8080, () => {
  console.log('toto');
  console.log(`Server running : ${new Date()} at port 8080`);
});
