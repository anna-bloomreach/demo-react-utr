import { NavLink } from "react-router";

const ProductGrid: React.FC<{ suggestions: any[], handleSuggestionClick: () => void, language: string }> = ({ suggestions, handleSuggestionClick, language }) => {


    return (
        <main className="product-grid">
            {suggestions.map(product => (
                <NavLink key={product.id} style={{ color: 'black' }} to={`/${language}/product/${product.id}`}>
                    <div key={product.id} className="product-card" onClick={() => handleSuggestionClick()}>
                        <img src={product.imageUrl} alt={product.en.name} className="product-image" />
                        <h2>{product[language as 'en' | 'cz'].name}</h2>
                        <p>{product[language as 'en' | 'cz'].description}</p>
                    </div>
                </NavLink>
            ))}
        </main>
    );
};

export default ProductGrid;