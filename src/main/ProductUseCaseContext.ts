import { FakerProductRepository } from '@/adapters/repositories/Product/FakerProductRepository';
import { ProductRepository } from '@/adapters/repositories/Product/ProductRepository';
import {
  CreateProductUseCase,
  DeleteProductUseCase,
  GetByIdProductUseCase,
  ListProductUseCase,
  UpdateProductUseCase,
} from '@/usecases/Product';
import React from 'react';

const productRepository: ProductRepository = new FakerProductRepository();

const createProductUseCase = new CreateProductUseCase(productRepository);
const deleteProductUseCase = new DeleteProductUseCase(productRepository);
const getByIdProductUseCase = new GetByIdProductUseCase(productRepository);
const listProductUseCase = new ListProductUseCase(productRepository);
const updateProductUseCase = new UpdateProductUseCase(productRepository);

export interface ProductUseCaseContext {
  createProductUseCase: CreateProductUseCase;
  deleteProductUseCase: DeleteProductUseCase;
  getByIdProductUseCase: GetByIdProductUseCase;
  listProductUseCase: ListProductUseCase;
  updateProductUseCase: UpdateProductUseCase;
}

export const defaultValueProduct = {
  createProductUseCase,
  deleteProductUseCase,
  getByIdProductUseCase,
  listProductUseCase,
  updateProductUseCase,
};

export const useProductUseCaseContext =
  React.createContext<ProductUseCaseContext>(defaultValueProduct);
