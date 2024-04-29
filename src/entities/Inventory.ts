export interface Inventory {
  id?: string;
  batch: string;
  createdAt: Date;
  updatedAt?: Date;
  productId: string;
  productName?: string;
  quantity: number;
}
