export interface ListInventoryRequestDto {
  order?: 'ASC' | 'DESC';
  search?: string;
}

export interface ListInventoryResponseDto {
  id: string;
  batch: string;
  createdAt: Date;
  productId: string;
  productName: string;
  quantity: number;
}
