import { ProductModel } from "../../models/product.model";

type Props = {
  product: ProductModel;
};

export default function Product(props: Props) {
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
        <button className="p-2 bg-green-500 hover:bg-green-300 rounded-lg text-center text-white">
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}
