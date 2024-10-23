import { useCartDispatch } from '../store/hooks';
import { addToCart } from '../store/CartSlice';
import './Product.css'

interface ProductProps {
  id: string,
  title: string,
  price: number,
  image: string
}

export default function Product({ id, title, price, image }: ProductProps) {

  const dispatch = useCartDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price }))
  }

  return (
    <div className='product-item'>
      <img src={image} alt="product-image" />
      <div>
        <h3>{title}</h3>
        <p className='product-price'>{price.toLocaleString('fa-IR')} تومان</p>
      </div>
      <button onClick={handleAddToCart}>افزودن به سبد خرید</button>
    </div>
  )
}
