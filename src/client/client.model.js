import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const clientSchema = new Schema(
  {
    id: {
      type: String,
      required: [true],
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    adresse: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'phone number is required'],
    },
  },
  { timestamps: true }
);

export const Client = Mongoose.model('Client', clientSchema);
