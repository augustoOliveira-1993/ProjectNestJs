import { Test } from '@nestjs/testing';
import { ProductService } from './product.service';
import { ProductModel } from './product.module';
import { Product } from './interfaces/product.interface';

describe('ProductService', () => {
  let productService: ProductService;
  const productsMock = [
    {
      name: 'mock1',
      sku: 'sku-mock1',
    },
    {
      name: 'mock2',
      sku: 'sku-mock2',
    },
  ];
  const productServiceMock = {
    mock: [] = [...productsMock],
    findAll(): Promise<Product[]> {
      return Promise.resolve([...this.mock]);
    },
  };
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [ProductService],
    })
      .overrideProvider(ProductService)
      .useValue(productServiceMock)
      .compile();

    productService = moduleRef.get(ProductService);
  });

  it('should find all products', async () => {
    const retorno = await productService.findAll();
    expect(retorno).toStrictEqual(productsMock);
  });
});
