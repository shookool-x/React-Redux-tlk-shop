import { ReactNode } from 'react'
import './ProductList.css'

export default function ProductList({ children }: { children: ReactNode }) {
  return (
    <div className='product-list'>
        {children}
    </div>
  )
}
