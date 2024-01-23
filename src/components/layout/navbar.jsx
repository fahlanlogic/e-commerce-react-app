import { useEffect, useState } from "react";
import Button from "../elements/button";
import { useLogin } from "../hooks/useLogin";
import { useSelector } from "react-redux";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0)
  const cart = useSelector((state) => state.cart.data)
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty
    }, 0)
    setTotalCart(sum)
  }, [cart])
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return (
    <div className="flex h-20 bg-rose-800 text-white justify-between items-center px-5">
      <div>
        <h1 className="font-bold text-white"><a href="/profile">Profile</a></h1>
      </div>
      <div className="flex items-center ">
        {username}
        <Button className="bg-white text-rose-800 ml-5" onClick={handleLogout}>Logout</Button>
        <div className="ml-5 bg-white text-rose-800 py-2 px-4 font-semibold rounded-md">{totalCart}</div>
      </div>
    </div>
  )
}

export default Navbar;