import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  sku: String,
  name: String,
  description: String,
  isactive: Boolean,
  price: Number,
  weigth: Number,
  status: Number,
});
