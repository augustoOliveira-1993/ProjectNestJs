import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { ProductInput } from './inputs/product.input';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async create(createProductDto: ProductInput): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findBySku(sku: string): Promise<Product[]> {
    return this.productModel.find({ sku: sku });
  }

  async update(
    sku: string,
    updateProductForDto: ProductInput,
  ): Promise<Product> {
    const updateProduct = await this.productModel.findOneAndUpdate(
      { sku },
      updateProductForDto,
      { new: true },
    );
    return updateProduct;
  }
  async delete(sku: string): Promise<Product> {
    return this.productModel.findOneAndDelete({ sku });
  }
}
