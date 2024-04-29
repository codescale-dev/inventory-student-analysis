import { Product } from '@/entities/Product';
import { faker } from '@faker-js/faker';
import { ListParams, ProductRepository } from './ProductRepository';

export class FakerProductRepository implements ProductRepository {
  async create(product: Product): Promise<Product> {
    return await Promise.resolve(product);
  }

  async getById(productId: string): Promise<Product> {
    console.log(productId);

    return await Promise.resolve({
      id: faker.string.nanoid(),
      name: faker.commerce.productName(),
      material: faker.commerce.productMaterial(),
      price: Number(faker.commerce.price()),
    });
  }

  async list(params: ListParams): Promise<Product[]> {
    console.log(params);

    const productsList: Product[] = Array.from({ length: 10 }, () => {
      return {
        id: faker.string.nanoid(),
        name: faker.commerce.productName(),
        material: faker.commerce.productMaterial(),
        price: Number(faker.commerce.price()),
      };
    });
    return Promise.resolve(productsList);
  }

  async update(product: Product): Promise<void> {
    await Promise.resolve(product);
  }

  async remove(productId: string): Promise<void> {
    Promise.resolve(productId);
  }
}
