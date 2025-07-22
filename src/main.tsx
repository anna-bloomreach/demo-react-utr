import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './styles/index.css'
import App from './components/App.tsx'
import Product from './components/Product.tsx';
import NotFound from './components/NotFound.tsx';
import { Navigation } from './components/Navigation.tsx';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<App language="en" />} />
      <Route path="/en/" element={<App language="en" />} />
      <Route path="/cz/" element={<App language="cz" />} />
      <Route path="/en/product/:id" element={<Product language="en" />} />
      <Route path="/cz/product/:id" element={<Product language="cz" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>

);
