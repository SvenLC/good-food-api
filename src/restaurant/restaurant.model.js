import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const restaurantSchema = new Schema(
  {
    id: {
      type: String,
      required: [true],
    },
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'phone number is required'],
    },
  },
  { timestamps: true }
);

export const Restaurant = Mongoose.model('Restaurant', restaurantSchema);
