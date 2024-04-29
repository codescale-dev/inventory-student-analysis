import { Product, ProductForm } from '@/frameworks/ui';

export const productRoute = [
  {
    path: '/products',
    element: Product,
  },
  {
    path: '/products/create',
    element: ProductForm,
  },
  {
    path: '/products/update/:productId',
    element: ProductForm,
  },
];
