import { Client } from './client.model';

import { ErrorHandler } from '../shared/error';
import { v4 as uuidv4 } from 'uuid';
import { writer } from '../shared/logger';

export const getClients = async (req, res, next) => {
  const startTimer = new Date();
  try {
    const result = await Client.find();
    res.status(200).json(result);
    console.log(new Date() - startTimer);
    writer.writePoint(
      'request',
      {
        method: 'GET',
        service: 'good-food-api',
      },
      {
        responseTime: new Date() - startTimer,
      }
    );
  } catch (error) {
    next(error);
  }
};

export const getClient = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Client.find({ id: id });
    if (Array.isArray(result) && result.length === 0) {
      throw new ErrorHandler(404, `Client with id: ${id} not found`);
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const createClient = async (req, res, next) => {
  const { body } = req;
  const restaurant = new Client({ id: uuidv4(), ...body });
  try {
    const result = await restaurant.save();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateClient = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  console.log(body);
  try {
    const result = await Client.updateOne({ id: id }, { ...body });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteClients = async (req, res, next) => {
  try {
    await Client.deleteMany();
    res.status(200).json('All clients have been deleted');
  } catch (error) {
    next(error);
  }
};

export const deleteClient = async (req, res, next) => {
  const { id } = req?.params;
  try {
    await Client.deleteOne({ id: id });
    res.status(200).json(`Client with ${id} has been deleted`);
  } catch (error) {
    next(error);
  }
};
