/* eslint-disable react/jsx-key */
import { Fragment, useEffect, useState } from "react";
import CardProducts from "../components/fragments/card-products";
import { getProducts } from "../components/services/product-services";
import TableCarts from "../components/fragments/table-carts";
import Navbar from "../components/layout/navbar";
// import { getUsername } from "../components/services/login-services";

// const products = [
//   {
//     id: 1,
//     name: "Spiderman Sticker",
//     price: 7500,
//     image: "image-1",
//     description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem iste inventore atque fugit dignissimos.`
//   },
//   {
//     id: 2,
//     name: "Superman Sticker",
//     price: 1000,
//     image: "image-1",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel placeat alias. Officia, reprehenderit nam inventore adipisci tempore fuga esse ab, sint consequuntur ea quo sequi eveniet similique neque suscipit.`
//   },
//   {
//     id: 3,
//     name: "Batman Sticker",
//     price: 1500,
//     image: "image-1",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel placeat alias. Officia, reprehenderit nam inventore adipisci tempore fuga esse ab, sint consequuntur ea quo sequi eveniet similique neque suscipit.`
//   }
// ]

const ProductsPage = () => {
  // const [cart, setCart] = useState([]);
  // const [username, setUsername] = useState("")
  const [products, setProducts] = useState([])
  
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || [])
  // }, []);
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    })
  })

  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + product.price * item.qty;
  //     }, 0);
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [products, cart]);

  // const handlerAddToCart = (id) => {
  //   if(cart.find(item => item.id === id)) {
  //     setCart(
  //       cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
  //     )
  //   } else (
  //     setCart([...cart, { id, qty: 1 }])
  //     )
  // }

  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handlerAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: + 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current))
  // }
  
  // const totalRef = useRef(null)
  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalRef.current.style.display = 'table-row';
  //   } else {
  //     totalRef.current.style.display = 'none'
  //   }
  // }, [cart])
  
  return (
    <Fragment>
      <Navbar />
      <div className="flex px-5 w-full">
        <div className="flex justify-center gap-3 w-[70%] flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header image={product.image} id={product.id}/>
              <CardProducts.Body title={product.title}> {product.description.substring(0, 150)} ... </CardProducts.Body>
              <CardProducts.Footer id={product.id} price={product.price}/>
            </CardProducts>
          ))}
        </div>
        <div className="w-[30%] h-fit bg-white mt-4 sticky top-4">
          <h1 className="text-3xl font-bold m-5">Cart</h1>
          <TableCarts products={products}/>
          {/* <table className="table-auto border-separate border-spacing-x-5 mb-4">
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
          </table> */}
        </div>
      </div>  
    </Fragment>
  )
}

export default ProductsPage;