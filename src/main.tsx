import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './styles/index.css'
import App from './components/App.tsx'
import Product from './components/Product.tsx';
import NotFound from './components/404.tsx';
import { Navigation } from './components/Navigation.tsx';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/en/" element={<App />} />
      <Route path="/en/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>

);
