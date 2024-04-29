import HomeSvg from '@/frameworks/assets/home.svg';
import { FC } from 'react';

export const Home: FC = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <img src={HomeSvg} alt="" className="w-72" />
      <h1 className="text-2xl mt-4">Welcome to Inventory System</h1>
    </div>
  );
};
