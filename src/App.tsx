import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { getAllProducts } from "./services/product.service";
import { ProductModel } from "./models/product.model";

function App() {

  const [products, setProducts] = useState<ProductModel[] | undefined>();

  useEffect(() => {
    const getData = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    getData();
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar totalNumber={products?.length}/>
      <div className="flex items-center justify-center flex-wrap gap-10 my-5">
        {products?.map((product: ProductModel) => {
          return <Product key={product.id} product={product} />
        })}
      </div>
    </div>
  );
}

export default App;
