import { InventoryRepository } from '@/adapters/repositories/Inventory/InventoryRepository';
import { DeleteInventoryRequestDto } from './DeleteInventoryDtos';

export class DeleteInventoryUseCase {
  private _inventoryRepository: InventoryRepository;

  constructor(inventoryRepository: InventoryRepository) {
    this._inventoryRepository = inventoryRepository;
  }

  async execute(
    deleteInventoryRequestDto: DeleteInventoryRequestDto,
  ): Promise<void> {
    const { id } = deleteInventoryRequestDto;

    return await this._inventoryRepository.remove(id);
  }
}
