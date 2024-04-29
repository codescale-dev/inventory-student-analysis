export interface CreateInventoryRequestDto {
  batch: string;
  createdAt: Date;
  productId: string;
  quantity: number;
}

export interface CreateInventoryResponseDto {
  id: string;
  batch: string;
  createdAt: Date;
  productId: string;
  productName: string;
  quantity: number;
}
