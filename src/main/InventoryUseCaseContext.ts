import { FakerInventoryRepository } from '@/adapters/repositories/Inventory/FakerInventoryRepository';
import { InventoryRepository } from '@/adapters/repositories/Inventory/InventoryRepository';
import {
  CreateInventoryUseCase,
  DeleteInventoryUseCase,
  GetByIdInventoryUseCase,
  ListInventoryUseCase,
  UpdateInventoryUseCase,
} from '@/usecases/Inventory';
import React from 'react';

const productRepository: InventoryRepository = new FakerInventoryRepository();

const createInventoryUseCase = new CreateInventoryUseCase(productRepository);
const deleteInventoryUseCase = new DeleteInventoryUseCase(productRepository);
const getByIdInventoryUseCase = new GetByIdInventoryUseCase(productRepository);
const listInventoryUseCase = new ListInventoryUseCase(productRepository);
const updateInventoryUseCase = new UpdateInventoryUseCase(productRepository);

export interface InventoryUseCaseContext {
  createInventoryUseCase: CreateInventoryUseCase;
  deleteInventoryUseCase: DeleteInventoryUseCase;
  getByIdInventoryUseCase: GetByIdInventoryUseCase;
  listInventoryUseCase: ListInventoryUseCase;
  updateInventoryUseCase: UpdateInventoryUseCase;
}

export const defaultValueInventory = {
  createInventoryUseCase,
  deleteInventoryUseCase,
  getByIdInventoryUseCase,
  listInventoryUseCase,
  updateInventoryUseCase,
};

export const useInventoryUseCaseContext =
  React.createContext<InventoryUseCaseContext>(defaultValueInventory);
