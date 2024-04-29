export interface CreateProductRequestDto {
  name: string;
  material: string;
  price: number;
}

export interface CreateProductResponseDto {
  id: string;
  name: string;
  material: string;
  price: number;
}
