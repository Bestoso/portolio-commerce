import './assets/css/App.css'
import "toastify-js/src/toastify.css"
import 'animate.css'
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { AnimatedRoutes } from './Components/AnimatedRoutes';
import { Footer } from './Components/Footer';
import { ThemeProvider } from './Context/ThemeContext';
import { CartContextProvider } from './Context/CartContext';
import { StoreContextProvider } from './Context/StoreContext';


function App() {

  return (
    <CartContextProvider>
      <StoreContextProvider>
        <ThemeProvider>
            <div className="App">
              <BrowserRouter> 
                <NavBar />
                <AnimatedRoutes />
                <Footer />
              </BrowserRouter>
            </div>
          </ThemeProvider>
        </StoreContextProvider>
      </CartContextProvider>
  )
}

export default App
