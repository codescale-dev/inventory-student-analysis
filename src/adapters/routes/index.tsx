import { Home } from '@/frameworks/ui';
import { Route, Routes } from 'react-router-dom';
import { inventoryRoute } from './inventory';
import { productRoute } from './product';

export const Router = () => {
  const route = [
    {
      path: '/',
      element: Home,
    },
    ...productRoute,
    ...inventoryRoute,
  ];

  return (
    <Routes>
      {route.map((item, index) => (
        <Route
          key={`route__${index}`}
          path={item.path}
          element={<item.element />}
        />
      ))}
    </Routes>
  );
};
