import { ProductModel } from "../../models/product.model";
import Button from "../../shared/button";
import { TProduct } from "../../types/product.type";
type Props = {
  product: ProductModel;
  cart: TProduct[];
  setCart: (params: TProduct[]) => void;
};

export default function Product(props: Props) {
  const handleAddToCart = (): void => {
    const updatedCart = [
      ...props.cart,
      {
        productId: props.product.id,
        category: props.product.category,
        title: props.product.title,
        description: props.product.description,
        price: props.product.price,
      },
    ];

    props.setCart(updatedCart);
  };
  return (
    <div className="border border-gray-300 w-56 rounded-md bg-white">
      <img
        className="h-64 w-60 rounded-md"
        src={`${props.product.image}`}
        alt=""
      />
      <p className="text-center my-3 ">
        {props.product.title.length > 20
          ? `${props.product.title.slice(0, 20)}...`
          : props.product.title}
      </p>
      <div className="flex justify-center mb-3 mt-8">
        <Button hover="primaryHover" onClick={handleAddToCart}>
          Thêm vào giỏ hàng
        </Button>
      </div>
    </div>
  );
}
