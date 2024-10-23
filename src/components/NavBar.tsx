import { useState } from "react"
import { useCartSelector } from "../store/hooks";
import Cart from "./Cart"
import './NavBar.css'

export default function NavBar() {

  const [cartOpen, setCartOpen] = useState(false);
  const handleOpenCart = () => { setCartOpen(true) };
  const handleCloseCart = () => { setCartOpen(false) };

  const total = useCartSelector((state) => {
    return state.cart.items.reduce((value, item) => (value + item.quantity), 0)
  });
  return (
    <>
      {cartOpen && <Cart onClose={handleCloseCart} />}
      <div className="navbar">
        <button onClick={handleOpenCart}>سبد خرید ({total.toLocaleString('fa-IR')})</button>
      </div>
    </>
  )
}
