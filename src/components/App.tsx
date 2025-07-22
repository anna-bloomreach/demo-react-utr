import { useEffect } from 'react';
import '../styles/index.css'
import SearchBar from './SearchBar.tsx';

declare global {
  interface Window {
    brweb: any;
  }
}

function App() {
  useEffect(() => {
    window.brweb.track('view_homepage');
  }, []);

  return (
    <div>
      <SearchBar />
    </div>
  )
}

export default App
