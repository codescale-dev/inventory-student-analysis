import { Product } from '@/entities/Product';
import { useToast } from '@/frameworks/components';
import { useProductUseCaseContext } from '@/main/ProductUseCaseContext';
import { useCallback, useContext, useEffect, useState } from 'react';

export function useProduct() {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const { listProductUseCase, deleteProductUseCase } = useContext(
    useProductUseCaseContext,
  );

  const handleRemove = async (id: string) => {
    await deleteProductUseCase.execute({ id });
    toast({
      title: 'Delete Product',
      description: 'Product was deleted with success',
      variant: 'success',
    });
    getProducts();
  };

  const getProducts = useCallback(async () => {
    const productsList = await listProductUseCase.execute({});
    setProducts(productsList);
  }, [listProductUseCase]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return {
    handleRemove,
    products,
  };
}
