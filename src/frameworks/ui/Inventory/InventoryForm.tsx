import { Product } from '@/entities/Product';
import {
  BreadcrumbContent,
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  useToast,
} from '@/frameworks/components';
import { useInventoryForm } from '@/frameworks/hooks/Inventory/useInventoryForm';
import { useProductUseCaseContext } from '@/main/ProductUseCaseContext';
import { RequiredFieldValidator } from '@/validators/required-field/required-field-validator';
import { Save } from 'lucide-react';
import { FC, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const batchValidator = new RequiredFieldValidator('batch');
const quantityValidator = new RequiredFieldValidator('quantity');
const productValidator = new RequiredFieldValidator('product');

export const InventoryForm: FC = () => {
  const batchRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const productRef = useRef<string | undefined>();

  const [products, setProducts] = useState<Product[]>([]);

  const { handleCreateInventory } = useInventoryForm();
  const { listProductUseCase } = useContext(useProductUseCaseContext);

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const fields = [
      batchValidator.validate(batchRef?.current?.value),
      quantityValidator.validate(quantityRef?.current?.value),
      productValidator.validate(productRef?.current),
    ].filter(Boolean);

    console.log(fields);

    if (fields.length !== 0) {
      return toast({
        title: 'Inventory',
        description: 'All fields are required',
        variant: 'destructive',
      });
    }

    const params = {
      batch: batchRef?.current?.value as string,
      createdAt: new Date(),
      productId: productRef?.current as string,
      quantity: Number(quantityRef?.current?.value as string),
    };

    await handleCreateInventory(params);

    navigate('/Inventories');
  };

  useEffect(() => {
    (async () => {
      const productsList = await listProductUseCase.execute({});
      setProducts(productsList);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BreadcrumbContent
        items={[{ name: 'Form' }]}
        links={[
          { name: 'Home', link: '/' },
          { name: 'Inventories', link: '/Inventories' },
        ]}
      />

      <div className="mt-8">
        <h2 className="text-2xl font-bold tracking-tight">Inventory Form</h2>
        <p className="text-muted-foreground">Create or Update Inventories</p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-between items-center">
            <Label className="w-full xl:w-[32%] mt-4">
              Batch
              <Input className="mt-2" type="text" ref={batchRef} />
            </Label>
            <Label className="w-full xl:w-[32%] mt-4">
              Quantity
              <Input className="mt-2" type="number" min={0} ref={quantityRef} />
            </Label>
            <Label className="w-full xl:w-[32%] mt-4">
              Product
              <Select onValueChange={(value) => (productRef.current = value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Choose the product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id ?? ''} value={product.id ?? ''}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Label>
          </div>

          <div className="flex items-center justify-end mt-4">
            <Button
              type="submit"
              className="rounded bg-green-900 text-white hover:bg-green-800 text-md"
            >
              <Save className="mr-2" width={16} />
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
