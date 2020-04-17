import { Document } from 'mongoose';

export interface Product extends Document {
  readonly sku: string;
  readonly name: string;
  readonly description: string;
  readonly isactive: boolean;
  readonly price: number;
  readonly weigth: number;
  readonly status: number;
}
