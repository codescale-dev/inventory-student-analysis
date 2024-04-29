export interface GetByIdInventoryRequestDto {
  id: string;
}

export interface GetByIdInventoryResponseDto {
  id: string;
  batch: string;
  createdAt: Date;
  productId: string;
  productName: string;
  quantity: number;
}
