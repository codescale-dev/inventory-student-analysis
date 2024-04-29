import { Inventory } from '@/entities/Inventory';

export interface ListParams {
  order?: 'ASC' | 'DESC';
  search?: string;
}

type UpdateInventory = Omit<Inventory, 'createdAt'>;

export interface InventoryRepository {
  create(inventory: Inventory): Promise<Inventory>;
  list(params: ListParams): Promise<Inventory[]>;
  getById(inventoryId: string): Promise<Inventory>;
  update(inventory: UpdateInventory): Promise<void>;
  remove(inventoryId: string): Promise<void>;
}
