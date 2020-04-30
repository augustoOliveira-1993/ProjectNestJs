import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';
import { resolve, promises } from 'dns';
import { async } from 'rxjs/internal/scheduler/async';
//import { ProductModel } from './product.module';

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
    findAll(): Promise<Product[]> {
      return Promise.resolve([...this.mock]);
    },
    findBySku(sku: string): Promise<Product> {
      return new Promise(resolve => {
        const product = this.mock.find(t => t.sku === sku);
        return resolve(product);
      });
    },
    create(productsMock): Promise<Product> {
      return new Promise(resolve => {
        this.mock.push(productsMock);
        return resolve({ ...productsMock });
      });
    },
    delete(sku: string): Promise<boolean> {
      return new Promise(resolve => {
        const oldLength = this.mock.length;
        this.mock = this.mock.filter(t => t.sku !== sku);
        const newLength = this.mock.length;
        const removed = newLength < oldLength;
        return resolve(removed);
      });
    },
    update(sku: string, productsMock) {
      const index = this.mock.findIndex(p => p.sku === sku);
      this.mock[index] = productsMock;
      return { ...this.mock[index] };
    },
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ProductService],
    })
      .overrideProvider(ProductService)
      .useValue(productServiceMock)
      .compile();

    productService = moduleRef.get(ProductService);
  });
  it('should be defined ', () => {
    expect(productService).toBeDefined();
  });

  it('should find by sku ', async () => {
    const sku = 'sku-mock1';
    const product = await productService.findBySku(sku);
    expect(product).toBeDefined();
    expect(product.sku).toBe(sku);
  });

  it('should find all products', async () => {
    const retorno = await productService.findAll();
    expect(retorno).toStrictEqual(productsMock);
  });

  it('should remove by sku', async () => {
    const sku = 'sku-mock1';
    const removed = await productService.delete(sku);
    expect(removed).toBeTruthy();
  });
  it('should find all products', async () => {
    const newName = 'novo-mock1';
    const product = {
      sku: 'sku-mock1',
      name: newName,
    };
    const updatedProduct = await productService.update('sku-mock1', product);
    expect(updatedProduct.name).toBe(newName);
  });
  it('should create Product', async () => {
    const newProduct = {
      sku: 'sku-mock3',
      name: 'mock3',
    };
    const productAdded = await productService.create(newProduct);
    expect(productAdded).toBeDefined();
    expect(productAdded.sku).toBe(newProduct.sku);
    expect(productAdded.name).toBe(newProduct.name);
  });
});
