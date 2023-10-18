import { useEffect, useState } from "react";

import CardProduct from "../components/Fragments/CardProducts";
import { getProduct } from "../service/product";

import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/layouts/Navbar";

// Rendering List

const ProductPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [Products, setProducts] = useState([]);
  const username = useLogin();

  // SET Cart
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("Cart") || "[]"));
  // }, []);

  // SET Total Price
  // useEffect(() => {
  //   const sum =
  //     Products.length > 0 &&
  //     cart.reduce((acc, item) => {
  //       const product = Products.find((product) => product.id === item.id);
  //       return acc + product.price * item.qty;
  //     }, 0);
  //   setTotalPrice(sum);
  // }, [cart, Products]);

  // Handle Button Cart
  // Event Handler Kondisi
  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }

  //   // Simpan keranjang belanja ke localStorage
  //   localStorage.setItem("Cart", JSON.stringify(cart));
  // };

  // GET Product API
  useEffect(() => {
    getProduct((data) => {
      console.log(data);
      setProducts(data);
    });
  });

  // useRef

  // const cartRef = useRef(JSON.parse(localStorage.getItem("Cart") || "[]"));

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("Cart", JSON.stringify(cartRef.current));
  // };

  // refTotalPrice
  // const totalPriceRef = useRef(null);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = "block";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [cart]);

  return (
    <>
      <Navbar />
      {/* Rendering Produk */}
      {Products.length > 0 &&
        Products.map((product) => {
          return (
            <CardProduct key={product.id}>
              <CardProduct.Header
                image={product.image}
                id={product.id}
              ></CardProduct.Header>
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
              ></CardProduct.Footer>
            </CardProduct>
          );
        })}
      <div className=" d-flex w-100 justify-content-center pb-5">
        <h1 className="mx-5">Cart</h1>
        <TableCart Products={Products} />
      </div>
      {/* <div className="d-flex justify-content-center pb-5">
        <Counter></Counter>
      </div> */}
    </>
  );
};
export default ProductPage;
