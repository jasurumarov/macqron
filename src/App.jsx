import { Route, Routes } from 'react-router-dom'
import './scss/style.scss'

// Pages
import Home from './pages/home/Home'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'

// Components
import SupHeader from "./components/supHeader/SupHeader"
import SubHeader from "./components/subHeader/SubHeader"
import Footer from "./components/footer/Footer"
import LazyLoading from './components/lazyLoading/LazyLoading'

function App() {
  return (
    <>
      <SupHeader />
      <SubHeader />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App