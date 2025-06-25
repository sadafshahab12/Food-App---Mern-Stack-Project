import ReactGA from "react-ga4";

const TRACKING_ID = import.meta.env.VITE_GA_ID; // your GA4 Measurement ID

if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
} else {
  console.warn("Google Analytics ID is not defined!");
}

export default ReactGA;
