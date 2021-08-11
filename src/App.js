import React, {useState} from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <CartProvider>
    {isOpen && <Cart isOpen={isOpen} setIsOpen={setIsOpen}/>}
     <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
     <main>
      <Meals />
     </main>
     </CartProvider>
  )
}

export default App

