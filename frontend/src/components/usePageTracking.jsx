import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();
  const ga_id = import.meta.env.VITE_GA_ID;

  useEffect(() => {
    if (window.gtag && ga_id) {
      window.gtag('config', ga_id, {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default usePageTracking;
