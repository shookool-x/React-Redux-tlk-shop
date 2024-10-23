import CartItems from './CartItems'
import './Cart.css'

interface CartProps {
  onClose: () => void,
}

export default function Cart({ onClose }: CartProps) {
  return (
    <div className='modal-backdrop'>
      <div className="modal-content">
        <h2>سبد خرید</h2>
        <CartItems />
        <div className='cart-action'>
          <button onClick={onClose} >بستن</button>
        </div>
      </div>
    </div>
  )
}
