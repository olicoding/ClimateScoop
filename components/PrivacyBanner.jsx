import { useState, useEffect } from "react";

function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isAcknowledged = localStorage.getItem("privacyAcknowledged");
    if (isAcknowledged) {
      setIsVisible(false);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem("privacyAcknowledged", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="privacy-banner">
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
