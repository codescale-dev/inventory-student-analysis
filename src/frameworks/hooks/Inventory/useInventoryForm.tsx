import { useToast } from '@/frameworks/components';
import { useInventoryUseCaseContext } from '@/main/InventoryUseCaseContext';
import { CreateInventoryRequestDto } from '@/usecases/Inventory/CreateInventory/CreateInventoryDtos';
import { useContext } from 'react';

export function useInventoryForm() {
  const { toast } = useToast();
  const { createInventoryUseCase } = useContext(useInventoryUseCaseContext);

  const handleCreateInventory = async (params: CreateInventoryRequestDto) => {
    await createInventoryUseCase.execute(params);

    toast({
      title: 'Create Inventory',
      description: 'Inventory was created with success',
      variant: 'success',
    });
  };

  return {
    handleCreateInventory,
  };
}
