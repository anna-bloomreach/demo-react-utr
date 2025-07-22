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
    window.brweb.metadata({
      view_id: {
        lang: language
      }
    });

    window.brweb.track('view_homepage');
  }, [language]);

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
