// TiltWarning.js
import React, { useEffect, useState } from 'react';

const TiltWarning = () => {
  const [isTilted, setIsTilted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobilePortrait =
        window.innerWidth >= 768 &&
        window.innerWidth <= 1023 &&
        window.innerHeight >= 200 &&
        window.innerHeight <= 568;

      setIsTilted(isMobilePortrait);
    };

    // Check initial screen size
    handleResize();

    // Listen for changes in screen size
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isTilted ? (
    <div className="tilt-warning">
      <p>This website is not available in landscape mode. Please use portrait mode for the best experience  OR  This website may not support your device screen resolution. Use other device of different resolution to get the best experience.</p>
    </div>
  ) : null;
};

export default TiltWarning;
