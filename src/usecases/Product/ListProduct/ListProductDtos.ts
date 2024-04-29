export interface ListProductRequestDto {
  order?: 'ASC' | 'DESC';
  search?: string;
}

export interface ListProductResponseDto {
  id: string;
  name: string;
  material: string;
  price: number;
}
