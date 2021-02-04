import express from 'express';
import {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClients,
  deleteClient,
} from './client.controler';

const clientRouter = express.Router();

clientRouter.get('/', getClients);
clientRouter.get('/:id', getClient);
clientRouter.post('/', createClient);
clientRouter.post('/:id', updateClient);
clientRouter.delete('/', deleteClients);
clientRouter.delete('/:id', deleteClient);

export { clientRouter };
