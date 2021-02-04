import express from 'express';
import {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  deleteRestaurants,
} from './restaurant.controler';

const restaurantRouter = express.Router();

restaurantRouter.get('/', getRestaurants);
restaurantRouter.get('/:id', getRestaurant);
restaurantRouter.post('/', createRestaurant);
restaurantRouter.post('/:id', updateRestaurant);
restaurantRouter.delete('/', deleteRestaurants);
restaurantRouter.delete('/:id', deleteRestaurant);

export { restaurantRouter };
