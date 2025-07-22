import { useEffect } from 'react';
import '../styles/index.css'
import SearchBar from './SearchBar.tsx';

declare global {
  interface Window {
    brweb: any;
  }
}

function App({ language }: { language: string }) {

  useEffect(() => {
    setTimeout(() => {
      window.brweb.track('view_homepage');
    });
  }, []);

  const getHeaderText = () => {
    if (language === 'en') return 'Welcome to Our Store';
    if (language === 'cz') return 'Vítejte v našem obchodě';
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>{getHeaderText()}</h1>
        <SearchBar language={language} />
      </header>
    </div>
  )
}

export default App
