export interface UpdateInventoryRequestDto {
  id: string;
  batch: string;
  updatedAt: Date;
  productId: string;
  quantity: number;
}
