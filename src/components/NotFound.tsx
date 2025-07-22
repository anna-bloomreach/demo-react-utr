import { useLocation } from "react-router";
import '../styles/not_found.css';
export default function NotFound() {

  const { pathname } = useLocation();

  const languagePathSegment = pathname.split('/')[1];

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>{languagePathSegment === 'en' ? 'Oops! The page you are looking for does not exist.' : 'Oops! Stránka, kterou hledáte, neexistuje.'}</p>
    </div>
  );
}