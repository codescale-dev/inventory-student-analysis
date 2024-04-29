import { InventoryRepository } from '@/adapters/repositories/Inventory/InventoryRepository';
import { UpdateInventoryRequestDto } from './UpdateInventoryDtos';

export class UpdateInventoryUseCase {
  private _inventoryRepository: InventoryRepository;

  constructor(inventoryRepository: InventoryRepository) {
    this._inventoryRepository = inventoryRepository;
  }

  async execute(updateInventoryDto: UpdateInventoryRequestDto): Promise<void> {
    return await this._inventoryRepository.update(updateInventoryDto);
  }
}
