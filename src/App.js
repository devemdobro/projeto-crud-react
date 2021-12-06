import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductsList } from './pages/products-list'
import { ProductSave } from './pages/products-save'
import { GlobalStyle } from './globalStyle'
import { ProductContextProvider } from './contexts/product-context'

function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <main>

          <Routes>
            <Route exact path="/" element={<ProductsList />} />
            <Route exact path="/new" element={<ProductSave />} />
          </Routes>
          
        </main>

        <Footer />
      </BrowserRouter>
    </ProductContextProvider>
  );
}

export default App;
