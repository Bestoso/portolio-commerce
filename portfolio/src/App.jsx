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
import { CustomCursor } from './Components/CustomCursor';
import { CursorContextProvider } from './Context/CursorContext';


function App() {

  return (
    <CartContextProvider>
      <StoreContextProvider>
        <ThemeProvider>
          <CursorContextProvider>
            <div className="App">
            <BrowserRouter> 
            <CustomCursor />
                <NavBar />
                <AnimatedRoutes />
                <Footer />
              </BrowserRouter>
            </div>
            </CursorContextProvider>
          </ThemeProvider>
        </StoreContextProvider>
      </CartContextProvider>
  )
}

export default App
