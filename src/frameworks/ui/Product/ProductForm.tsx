import {
  BreadcrumbContent,
  Button,
  Input,
  Label,
  useToast,
} from '@/frameworks/components';
import { useProductForm } from '@/frameworks/hooks/Product/useProductForm';
import { RequiredFieldValidator } from '@/validators/required-field/required-field-validator';
import { Save } from 'lucide-react';
import { FC, FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const nameValidator = new RequiredFieldValidator('name');
const priceValidator = new RequiredFieldValidator('price');
const materialValidator = new RequiredFieldValidator('material');

export const ProductForm: FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const materialRef = useRef<HTMLInputElement>(null);

  const { defaultValues, handleCreateProduct, handleUpdateProduct, productId } =
    useProductForm();

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const fields = [
      nameValidator.validate(nameRef?.current?.value),
      priceValidator.validate(priceRef?.current?.value),
      materialValidator.validate(materialRef?.current?.value),
    ].filter(Boolean);

    if (fields.length !== 0) {
      return toast({
        title: 'Product',
        description: 'All fields are required',
        variant: 'destructive',
      });
    }

    const params = {
      material: materialRef?.current?.value as string,
      name: nameRef?.current?.value as string,
      price: Number(priceRef?.current?.value as string),
    };

    productId
      ? await handleUpdateProduct({ id: productId, ...params })
      : await handleCreateProduct(params);

    navigate('/products');
  };

  return (
    <>
      <BreadcrumbContent
        items={[{ name: 'Form' }]}
        links={[
          { name: 'Home', link: '/' },
          { name: 'Products', link: '/products' },
        ]}
      />

      <div className="mt-8">
        <h2 className="text-2xl font-bold tracking-tight">Product Form</h2>
        <p className="text-muted-foreground">Create or Update products</p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-between items-center">
            <Label className="w-full xl:w-[32%] mt-4">
              Name
              <Input
                defaultValue={defaultValues?.name}
                className="mt-2"
                type="text"
                ref={nameRef}
              />
            </Label>
            <Label className="w-full xl:w-[32%] mt-4">
              Price (USD)
              <Input
                defaultValue={defaultValues?.price}
                className="mt-2"
                type="text"
                ref={priceRef}
              />
            </Label>
            <Label className="w-full xl:w-[32%] mt-4">
              Material
              <Input
                defaultValue={defaultValues?.material}
                className="mt-2"
                type="text"
                ref={materialRef}
              />
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
