import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTracker = () => {
  const location = useLocation();
  const ga_id = import.meta.env.VITE_GA_ID;

  useEffect(() => {
    if (window.gtag && ga_id) {
      window.gtag('config', ga_id, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null; // This component renders nothing
};

export default PageTracker;
