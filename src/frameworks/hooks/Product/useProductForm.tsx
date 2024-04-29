import { Product } from '@/entities/Product';
import { useToast } from '@/frameworks/components';
import { useProductUseCaseContext } from '@/main/ProductUseCaseContext';
import { CreateProductRequestDto } from '@/usecases/Product/CreateProduct/CreateProductDtos';
import { UpdateProductRequestDto } from '@/usecases/Product/UpdateProduct/UpdateProductDtos';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function useProductForm() {
  const { productId } = useParams();
  const { toast } = useToast();
  const { getByIdProductUseCase, updateProductUseCase, createProductUseCase } =
    useContext(useProductUseCaseContext);
  const [defaultValues, setDefaultValues] = useState<Product>();

  const handleUpdateProduct = async (params: UpdateProductRequestDto) => {
    await updateProductUseCase.execute(params);

    toast({
      title: 'Update Product',
      description: 'Product was updated with success',
      variant: 'success',
    });
  };
  const handleCreateProduct = async (params: CreateProductRequestDto) => {
    await createProductUseCase.execute(params);

    toast({
      title: 'Create Product',
      description: 'Product was created with success',
      variant: 'success',
    });
  };

  const getProduct = async (id: string) => {
    const response = await getByIdProductUseCase.execute({ id });

    setDefaultValues(response);
  };

  useEffect(() => {
    if (productId) {
      getProduct(productId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return {
    productId,
    defaultValues,
    handleCreateProduct,
    handleUpdateProduct,
  };
}
