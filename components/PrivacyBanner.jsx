import { useState, useEffect } from "react";

function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const isAcknowledged = localStorage.getItem("privacyAcknowledged");
    setIsVisible(!isAcknowledged);
    setIsInitialized(true);
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem("privacyAcknowledged", "true");
    setIsVisible(false);
  };

  if (!isInitialized || !isVisible) return null;

  return (
    <div className="privacy-banner" role="alert">
      <p>
        Your privacy matters. No personal data is collected, and no cookies
        stored. Only anonymized traffic via Vercel Analytics.
      </p>
      <button onClick={handleAcknowledge} type="button">
        okay!
      </button>
    </div>
  );
}

export default PrivacyBanner;
