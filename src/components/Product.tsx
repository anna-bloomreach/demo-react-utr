import React, { useEffect } from 'react';
import { products } from '../data/products';
import { useParams } from 'react-router';
import NotFound from './NotFound';

const Product: React.FC<{ language: string }> = ({ language }) => {
  const { id } = useParams();

  const product = products.find(p => p.id === id);
  if (!product) {
    return <NotFound />;
  }
  const { price, imageUrl, en, cz } = product;
  const brweb = window.brweb;

  useEffect(() => {
    setTimeout(() => brweb.track('view_item', {
      id,
      price,
      name: en.name,
    }), 1000);
  }, []);

  return (<div className="product-page">
    <img src={imageUrl} alt={en.name} className="product-image" />
    <div className="product-details">
      <h1 className="product-name">{language === 'en' ? en.name : cz.name}</h1>
      <p className="product-price">{language === 'en' ? `Price: ${price} CZK` : `Cena: ${price} Kč`}</p>
      <p className="product-description">{language === 'en' ? en.description : cz.description}</p>
    </div>
  </div>)
};

export default Product;