import { Barcode, CircleX, Home, Layers, PackageSearch } from 'lucide-react';
import { FC, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(true);

  const Items = [
    { title: 'Home', href: '/', icon: Home },
    { title: 'Products', href: '/products', icon: Barcode },
    { title: 'Inventories', href: '/inventories', icon: Layers },
  ];

  return (
    <div>
      <div
        className={`${openMenu ? 'w-80' : 'w-20'} bg-neutral-900 fixed z-10 h-screen p-5 pt-8  origin-left duration-300`}
      >
        <CircleX
          className={`absolute cursor-pointer -right-3 top-4 w-7`}
          onClick={() => setOpenMenu((prev) => !prev)}
        />

        <PackageSearch
          width={40}
          className={`${openMenu && 'hidden'} mt-8 animate-fade-in`}
        />
        <div
          className={`${!openMenu && 'hidden'} flex gap-x-4 items-center mt-4 animate-fade-in`}
        >
          <div className={`flex items-center`}>
            <PackageSearch className="mr-2" />
            <h1 className={`font-medium text-xl`}>Inventory Manager</h1>
          </div>
        </div>
        <ul className="mt-6">
          {Items.map((item, index) => (
            <li
              key={index}
              className={`${!openMenu && 'hidden'} flex hover:brightness-75 p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 animate-fade-in`}
            >
              <item.icon width={14} />
              <Link to={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${openMenu ? 'ml-80' : 'ml-20'} origin-left duration-300 p-8 h-screen`}
      >
        {children}
      </div>
    </div>
  );
};
