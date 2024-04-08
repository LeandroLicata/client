import ProductForm from "@/components/ProductForm";

export default function AddProduct() {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Agregar producto</h1>
        <ProductForm isEditing={false} />
      </div>
    </div>
  );
}
