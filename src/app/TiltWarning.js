// TiltWarning.js
import React, { useEffect, useState } from 'react';

const TiltWarning = () => {
  const [isTilted, setIsTilted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobilePortrait =
        window.innerWidth >= 483 &&
        window.innerWidth <= 1023 &&
        window.innerHeight >= 200 &&
        window.innerHeight <= 1366;

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
      <p>This website does not support TABLET/IPAD Device OR This website is not available on Landscape mode of SMARTPHONE kindly view the website on portrait mode for BEST Experience.</p>
    </div>
  ) : null;
};

export default TiltWarning;
