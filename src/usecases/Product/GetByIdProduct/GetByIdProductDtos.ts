export interface GetByIdProductRequestDto {
  id: string;
}

export interface GetByIdProductResponseDto {
  id: string;
  name: string;
  material: string;
  price: number;
}
