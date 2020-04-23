import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface'
import { ProductModel } from './product.module'


describe('ProductService', () => {
  let productService: ProductService;
  let productServiceMock: {
      products: Product[] = [],
      findAll(){
        return Promise.resolve(this.products)
      }
  }
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ProductModel],
    })
    .overrideProvider(ProductService)
    .useValue(productServiceMock)
    .compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();
  });
});
