import { addToCart, removeFromCart } from '../store/CartSlice';
import { useCartDispatch, useCartSelector } from '../store/hooks'
import './CartItems.css'

export default function CartItems() {
  const dispatch = useCartDispatch();
  const cartItem = useCartSelector((state) => state.cart.items);
  const totalPrice = cartItem.reduce((value, item) => value + (item.quantity * item.price), 0);

  return (
    <div className='cart-item'>

      {
        cartItem.length === 0 ? (<p>محصولی در سبد خرید وجود ندارد.</p>) : (
          <>
            {
              cartItem.map(item => (
                <div className='item' key={item.id}>
                  <p>{item.title} ( {item.price.toLocaleString('fa-IR')} تومان )</p>
                  <div>
                    <span onClick={() => { dispatch(addToCart({ title: item.title, price: item.price, id: item.id })) }}>+</span>
                    <strong>{item.quantity.toLocaleString('fa-IR')}</strong>
                    <span onClick={() => { dispatch(removeFromCart(item.id)) }}>-</span>
                  </div>
                </div>
              ))
            }
            <div className="total-price">
              <p>جمع کل :</p>
              <span>{totalPrice.toLocaleString('fa-IR')} تومان</span>
            </div>
          </>
        )
      }
    </div >
  )


}
