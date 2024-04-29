import { Product } from '@/entities/Product';

export interface ListParams {
  order?: 'ASC' | 'DESC';
  search?: string;
}

export interface ProductRepository {
  create(product: Product): Promise<Product>;
  list(params: ListParams): Promise<Product[]>;
  getById(productId: string): Promise<Product>;
  update(product: Product): Promise<void>;
  remove(productId: string): Promise<void>;
}
