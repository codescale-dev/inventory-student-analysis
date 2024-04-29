import { InventoryRepository } from '@/adapters/repositories/Inventory/InventoryRepository';
import { Inventory } from '@/entities/Inventory';
import {
  GetByIdInventoryRequestDto,
  GetByIdInventoryResponseDto,
} from './GetByIdInventoryDtos';

export class GetByIdInventoryUseCase {
  private _inventoryRepository: InventoryRepository;

  constructor(inventoryRepository: InventoryRepository) {
    this._inventoryRepository = inventoryRepository;
  }

  async execute(
    getByIdInventoryDto: GetByIdInventoryRequestDto,
  ): Promise<GetByIdInventoryResponseDto> {
    const { id } = getByIdInventoryDto;

    const inventory: Inventory = await this._inventoryRepository.getById(id);

    return {
      id: id,
      batch: inventory.batch,
      createdAt: inventory.createdAt,
      productId: inventory.productId,
      productName: inventory.productName ?? '',
      quantity: inventory.quantity,
    };
  }
}
