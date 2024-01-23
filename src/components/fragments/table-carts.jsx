/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const TableCarts = (props) => {
  const { products } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [products, cart]);

  const totalRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalRef.current.style.display = 'table-row';
    } else {
      totalRef.current.style.display = 'none'
    }
  }, [cart])

  return (
    <table className="table-auto border-separate border-spacing-x-5 mb-4">
      <thead className="font-bold text-lg">
        <tr>
          <td>Product</td>
          <td>Price</td>
          <td>Qty</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 && cart.map((item) => {
          const product = products.find((product) => product.id === item.id)
          return(
            <tr key={item.id}>
              <td>{product.title.substring(0, 20)}</td>
              <td>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
              <td>{item.qty}</td>
              <td>{(item.qty * product.price).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
            </tr>
          )
        })}
            <tr ref={totalRef}>
              <td colSpan={3}><b>Total Price</b></td>
              <td><b>{totalPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</b></td>
            </tr>
      </tbody>
    </table>
  )
}

export default TableCarts;