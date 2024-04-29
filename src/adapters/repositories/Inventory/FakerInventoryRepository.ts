import { Inventory } from '@/entities/Inventory';
import { faker } from '@faker-js/faker';
import { InventoryRepository, ListParams } from './InventoryRepository';

export class FakerInventoryRepository implements InventoryRepository {
  async create(inventory: Inventory): Promise<Inventory> {
    return await Promise.resolve(inventory);
  }

  async getById(inventoryId: string): Promise<Inventory> {
    console.log(inventoryId);

    return await Promise.resolve({
      id: faker.string.nanoid(),
      batch: String(faker.number.int({ max: 100000, min: 500 })),
      createdAt: faker.date.past(),
      productId: faker.string.nanoid(),
      productName: faker.commerce.productName(),
      quantity: faker.number.int({ max: 5000 }),
    });
  }

  async list(params: ListParams): Promise<Inventory[]> {
    console.log(params);

    const inventories: Inventory[] = Array.from({ length: 10 }, () => {
      return {
        id: faker.string.nanoid(),
        batch: String(faker.number.int({ max: 100000, min: 500 })),
        createdAt: faker.date.past(),
        productId: faker.string.nanoid(),
        productName: faker.commerce.productName(),
        quantity: faker.number.int({ max: 5000 }),
      };
    });
    return Promise.resolve(inventories);
  }

  async update(inventory: Inventory): Promise<void> {
    await Promise.resolve(inventory);
  }

  async remove(inventoryId: string): Promise<void> {
    Promise.resolve(inventoryId);
  }
}
