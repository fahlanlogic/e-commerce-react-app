/* eslint-disable react/prop-types */
import Button from "../elements/button";

const CardProducts = (props) => {
  const { children } = props;

  return (
    <div className="mt-4 w-full max-w-xs bg-white border rounded-xl shadow-xl flex flex-col justify-between">
      {children}
    </div>
  )
}

const Header = (props) => {
  const { image } = props;

  return (
    <div className="px-4 pt-4">
      <img src={`${image}`} alt="Product 1" className="rounded-lg h-60 object-cover mx-auto"/>
    </div>
  )
}

const Body = (props) => {
  const { title, children } = props;

  return (
    <div className="px-4 py-4 h-full">
      <h1 className="font-bold text-xl pb-2">{title.substring(0, 20)} ...</h1>
      <p className="text-sm">{children}</p>
    </div>
  )
}

const Footer = (props) => {
  const { price, handlerAddToCart, id } = props;

  return (
    <div className="flex items-center px-4 pb-4 justify-between">
      <span className="font-bold text-xl w-full">{price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
      <Button className="bg-rose-800 w-full text-white" onClick={() => handlerAddToCart(id)}>Add to cart</Button>
    </div>
  )
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;