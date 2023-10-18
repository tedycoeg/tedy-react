import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPrice";

const TableCart = (props) => {
  const { Products } = props;
  const cart = useSelector((state) => state.cart.data);

  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  //   SET TOTAL PRICE
  useEffect(() => {
    const sum =
      Products.length > 0 &&
      cart.reduce((acc, item) => {
        const product = Products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
    dispatch({
      type: "UPDATE",
      payload: {
        total: sum,
      },
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, Products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "block";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table>
      <thead>
        <tr>
          <th className="fw-bold px-2">Product</th>
          <th className="fw-bold px-2">Price</th>
          <th className="fw-bold px-2">Quantity</th>
          <th className="fw-bold px-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {/* Rendering keranjang */}
        {Products.length > 0 &&
          cart.map((item) => {
            const product = Products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td className=" px-2 mx-2">{product.title}</td>
                <td className=" px-2 mx-2">
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className=" px-2 mx-2">{item.qty}</td>
                <td className=" px-2 mx-2">
                  {(item.qty * product.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3} className="px-2 mx-2 fw-bold">
            Total Price
          </td>
          <td className="px-2 mx-2 fw-bold">
            {total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
