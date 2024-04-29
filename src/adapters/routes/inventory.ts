import { Inventory, InventoryForm } from '@/frameworks/ui';

export const inventoryRoute = [
  {
    path: '/inventories',
    element: Inventory,
  },
  {
    path: '/inventories/create',
    element: InventoryForm,
  },
];
