import { Inventory } from '@/entities/Inventory';
import { useToast } from '@/frameworks/components';
import { useInventoryUseCaseContext } from '@/main/InventoryUseCaseContext';
import { useCallback, useContext, useEffect, useState } from 'react';

export function useInventory() {
  const { toast } = useToast();
  const [inventories, setInventories] = useState<Inventory[]>([]);
  const { listInventoryUseCase, deleteInventoryUseCase } = useContext(
    useInventoryUseCaseContext,
  );

  const handleRemove = async (id: string) => {
    await deleteInventoryUseCase.execute({ id });
    toast({
      title: 'Delete Inventory',
      description: 'Inventory was deleted with success',
      variant: 'success',
    });
    getInventories();
  };

  const getInventories = useCallback(async () => {
    const inventoriesList = await listInventoryUseCase.execute({});
    setInventories(inventoriesList);
  }, [listInventoryUseCase]);

  useEffect(() => {
    getInventories();
  }, [getInventories]);

  return {
    handleRemove,
    inventories,
  };
}
