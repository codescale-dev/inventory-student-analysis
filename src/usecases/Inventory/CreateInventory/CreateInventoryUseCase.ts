import { InventoryRepository } from '@/adapters/repositories/Inventory/InventoryRepository';
import { Inventory } from '@/entities/Inventory';
import {
  CreateInventoryRequestDto,
  CreateInventoryResponseDto,
} from './CreateInventoryDtos';

export class CreateInventoryUseCase {
  private _inventoryRepository: InventoryRepository;

  constructor(inventoryRepository: InventoryRepository) {
    this._inventoryRepository = inventoryRepository;
  }

  async execute(
    createInventoryDto: CreateInventoryRequestDto,
  ): Promise<CreateInventoryResponseDto> {
    const { batch, createdAt, productId, quantity } = createInventoryDto;

    const inventory: Inventory = { batch, createdAt, productId, quantity };

    const createdInventory = await this._inventoryRepository.create(inventory);

    return {
      id: createdInventory.id ?? '',
      productName: createdInventory.productName ?? '',
      batch,
      createdAt,
      productId,
      quantity,
    };
  }
}
