import { Module } from '@nestjs/common';
import { ProductResolver } from './produtc.resolver';
import { ProductSchema } from './produtc.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],

  providers: [ProductResolver, ProductService],
})
export class ProductsModel {}
