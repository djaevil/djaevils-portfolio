import { useEffect, useState } from "react";

const NameSwitcher: React.FC = () => {
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <span className="inline-grid">
      <span
        className={`col-start-1 row-start-1 transition-all duration-800 ${
          showAlt ? "inactive-text" : "active-text"
        }`}
      >
        djaevil
      </span>
      <span
        className={`text-start col-start-1 row-start-1 transition-all duration-800 ${
          showAlt ? "active-text" : "inactive-text"
        }`}
      >
        Sigge
      </span>
    </span>
  );
};
export default NameSwitcher;
