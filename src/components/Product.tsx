import React, { useEffect } from 'react';
import { products } from '../data/products';
import { useParams } from 'react-router';
import NotFound from './404';

const Product: React.FC = () => {
  const { id } = useParams();

  const product = products.find(p => p.id === id);
  if (!product) {
    return <NotFound />;
  }
  const { name, price, description, imageUrl } = product;
  const brweb = window.brweb;

  useEffect(() => {
    brweb.track('view_item', {
      id,
      price,
      name,
    });
  }, [id]);

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default Product;