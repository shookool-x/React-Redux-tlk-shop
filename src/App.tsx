import { Provider } from "react-redux"
import { Store } from "./store/Store"

import Product from "./components/Product"
import ProductList from "./components/ProductList"
import { productData } from "./data/items"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <Provider store={Store}>
      <NavBar />
      <ProductList>
        {
          productData.map(item => (
            <div key={item.id}>
              <Product {...item} />
            </div>
          ))
        }
      </ProductList>
    </Provider>
  )
}
