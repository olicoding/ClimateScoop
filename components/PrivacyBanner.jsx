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
        We use cookies for authentication and basic analytics. By continuing,
        you agree.
      </p>
      <button onClick={handleAcknowledge} type="button">
        okay!
      </button>
    </div>
  );
}

export default PrivacyBanner;
