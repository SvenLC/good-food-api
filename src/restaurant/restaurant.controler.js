import { Restaurant } from './restaurant.model';
import { ErrorHandler } from '../shared/error';
import { v4 as uuidv4 } from 'uuid';

export const getRestaurants = async (req, res, next) => {
  try {
    const result = await Restaurant.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getRestaurant = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Restaurant.find({ id: id });
    if (Array.isArray(result) && result.length === 0) {
      throw new ErrorHandler(404, `Restaurant with id: ${id} not found`);
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const createRestaurant = async (req, res, next) => {
  const { body } = req;
  const restaurant = new Restaurant({ id: uuidv4(), ...body });
  try {
    const result = await restaurant.save();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateRestaurant = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  console.log(body);
  try {
    const result = await Restaurant.updateOne({ id: id }, { ...body });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteRestaurants = async (req, res, next) => {
  try {
    await Restaurant.deleteMany();
    res.status(200).json('All restaurants have been deleted');
  } catch (error) {
    next(error);
  }
};

export const deleteRestaurant = async (req, res, next) => {
  const { id } = req?.params;
  try {
    await Restaurant.deleteOne({ id: id });
    res.status(200).json(`Restaurants with ${id} has been deleted`);
  } catch (error) {
    next(error);
  }
};
