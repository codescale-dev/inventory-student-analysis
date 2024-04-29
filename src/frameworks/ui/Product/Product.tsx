import {
  BreadcrumbContent,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/frameworks/components';
import { useProduct } from '@/frameworks/hooks/Product/useProduct';
import { Pencil, Plus, Trash } from 'lucide-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Product: FC = () => {
  const navigate = useNavigate();
  const { handleRemove, products } = useProduct();

  const redirectToForm = () => {
    navigate('/products/create');
  };

  return (
    <>
      <BreadcrumbContent
        items={[{ name: 'Products' }]}
        links={[{ name: 'Home', link: '/' }]}
      />

      <div className="flex items-center justify-end mb-8">
        <Button
          className="rounded bg-cyan-900 text-white hover:bg-cyan-800 text-md"
          onClick={redirectToForm}
        >
          <Plus className="mr-2" />
          Create
        </Button>
      </div>

      <Table>
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Material</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.material}</TableCell>
              <TableCell className="flex items-center gap-4">
                <Pencil
                  className="w-4 cursor-pointer hover:text-cyan-800"
                  onClick={() => navigate(`/products/update/${product.id}`)}
                />
                <Popover>
                  <PopoverTrigger>
                    <Trash className="w-4 cursor-pointer hover:text-cyan-800" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <h2 className="text-lg mb-2">Are you sure?</h2>
                    <p className="text-sm">
                      This action cannot be undone. This will permanently delete{' '}
                      <strong className="text-red-400">{product.name}</strong>{' '}
                      product.
                    </p>

                    <div className="flex justify-end">
                      <Button
                        variant="secondary"
                        onClick={() => handleRemove(product.id ?? '')}
                        className="rounded mt-4"
                      >
                        Confirm
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
