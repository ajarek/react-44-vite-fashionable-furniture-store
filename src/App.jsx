import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout'
function App() {
  return (
    <div className='App'>
      <Navigation />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about/'
          element={<About />}
        />

        <Route
          path='/products/'
          element={<Products />}
        />

        <Route
          path='/cart/'
          element={<Cart />}
        />
        <Route
          path='/login/'
          element={<Login />}
        />
        <Route
          path='/logout/'
          element={<Logout />}
        />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
