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
import { useInventory } from '@/frameworks/hooks/Inventory/useInventory';
import { Plus, Trash } from 'lucide-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Inventory: FC = () => {
  const navigate = useNavigate();
  const { handleRemove, inventories } = useInventory();

  const redirectToForm = () => {
    navigate('/inventories/create');
  };

  return (
    <>
      <BreadcrumbContent
        items={[{ name: 'Inventories' }]}
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
        <TableCaption>A list of your inventories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Batch</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="flex items-center justify-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventories.map((inventory) => (
            <TableRow key={inventory.id}>
              <TableCell>{inventory.batch}</TableCell>
              <TableCell>
                {new Date(inventory.createdAt).toDateString()}
              </TableCell>
              <TableCell>{inventory.productName}</TableCell>
              <TableCell>{inventory.quantity}</TableCell>
              <TableCell className="flex items-center justify-center gap-4">
                <Popover>
                  <PopoverTrigger>
                    <Trash className="w-4 cursor-pointer hover:text-cyan-800" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <h2 className="text-lg mb-2">Are you sure?</h2>
                    <p className="text-sm">
                      This action cannot be undone. This will permanently delete{' '}
                      <strong className="text-red-400">
                        {inventory.batch}
                      </strong>{' '}
                      inventory.
                    </p>

                    <div className="flex justify-end">
                      <Button
                        variant="secondary"
                        onClick={() => handleRemove(inventory.id ?? '')}
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
