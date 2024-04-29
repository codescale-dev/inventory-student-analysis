import { InventoryRepository } from '@/adapters/repositories/Inventory/InventoryRepository';
import {
  ListInventoryRequestDto,
  ListInventoryResponseDto,
} from './ListInventoryDtos';

export class ListInventoryUseCase {
  private _inventoryRepository: InventoryRepository;

  constructor(inventoryRepository: InventoryRepository) {
    this._inventoryRepository = inventoryRepository;
  }

  async execute(
    listInventoryDto: ListInventoryRequestDto,
  ): Promise<ListInventoryResponseDto[]> {
    const inventories = await this._inventoryRepository.list(listInventoryDto);

    const response: Array<ListInventoryResponseDto> = [];

    inventories.forEach((inventory) => {
      response.push({
        id: inventory.id ?? '',
        batch: inventory.batch,
        createdAt: inventory.createdAt,
        productId: inventory.productId,
        productName: inventory.productName ?? '',
        quantity: inventory.quantity,
      });
    });

    return response;
  }
}
