import { Test } from '@nestjs/testing';
import { ProductService } from './product.service';
//import { ProductModel } from './product.module';
import { Product } from './interfaces/product.interface';

describe('ProductService', () => {
  let productService: ProductService;
  const productsMock = [
    {
      sku: 'sku-mock1',
      name: 'mock1',
    },
    {
      sku: 'sku-mock2',
      name: 'mock2',
    },
  ];
  const productServiceMock = {
    mock: [] = [...productsMock],
    findBySku(sku: string) {
      return productsMock.find(product => {
        return product.sku === sku;
      });
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
    const retorno = await productService.findBySku('sku-mock1');
    expect(retorno.sku).toStrictEqual('sku-mock1');
  });
});
