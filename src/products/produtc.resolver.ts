import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductType } from './dto/create-product.dto';
import { ProductInput } from './inputs/product.input';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}
  @Query(() => String)
  async hello() {
    return 'hello';
  }
  @Query(() => [ProductType])
  async Product() {
    return this.productService.findAll();
  }

  @Query(() => [ProductType])
  async ProductBySku(@Args('sku') sku: string) {
    return this.productService.findBySku(sku);
  }

  @Mutation(() => ProductType)
  async createProduct(@Args('input') input: ProductInput) {
    return this.productService.create(input);
  }

  @Mutation(() => ProductType)
  async updateProduct(
    @Args('sku') sku: string,
    @Args('input') input: ProductInput,
  ) {
    return this.productService.update(sku, input);
  }
  @Mutation(() => ProductType)
  async deleteProduct(@Args('sku') sku: string) {
    return this.productService.delete(sku);
  }
}
