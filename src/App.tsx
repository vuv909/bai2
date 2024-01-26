import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { ProductModel } from "./models/product.model";
import { getProducts } from "./services/product.api";
import Button from "./shared/button";
import { TProduct } from "./types/product.type";

function App() {
  const [products, setProducts] = useState<ProductModel[] | undefined>();
  const [value, setValue] = useState<string>("");
  const [totalPage, setTotalPage] = useState<number[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [cart, setCart] = useState<TProduct[]>([]);

  useEffect(() => {
    setTotalPage([]);
    getProducts({
      title_like: value,
      _page: activePage,
      _limit: 10,
    }).then((res) => {
      const array: number[] = [];
      setProducts(res?.data);
      setActivePage(res?.pagination?._page);
      for (
        let i = 1;
        i <= res?.pagination?._totalRows / res?.pagination?._limit;
        i++
      ) {
        array.push(i);
      }
      setTotalPage(array);
    });
  }, [activePage,value]);

  return (
    <div className="bg-gray-100">
      <Navbar totalNumber={products?.length} cart={cart} setValue={setValue} />
      <div className="flex items-center justify-center flex-wrap gap-10 my-5">
        {products?.map((product: ProductModel) => {
          return (
            <Product
              cart={cart}
              setCart={setCart}
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        {totalPage.length > 0 &&
          totalPage?.map((item, index) => {
            return (
              <Button
                type={activePage !== item ? "notActive" : "primary"}
                onClick={() => {
                  setActivePage(item);
                }}
                key={index}
              >
                {item}
              </Button>
            );
          })}
      </div>
    </div>
  );
}

export default App;
