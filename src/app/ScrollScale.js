import { useEffect, useState } from 'react';
import { Events, animateScroll as scroll } from 'react-scroll';

const ScrollScale = ({ children }) => {
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const newScaleFactor = 1 + scrollY / 4000; // Adjust the scaling factor as needed
      setScaleFactor(newScaleFactor);
    };

    const handleTouchMove = (event) => {
      const touchY = event.touches[0].clientY;
      const newScaleFactor = 1 + touchY / 4000; // Adjust the scaling factor as needed
      setScaleFactor(newScaleFactor);
    };

    Events.scrollEvent.register('scroll', handleScroll);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      Events.scrollEvent.remove('scroll');
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="scroll-scale-container" style={{ transform: `scale(${scaleFactor})`, transition: 'transform 0.5s' }}>
      {children}
    </div>
  );
};

export default ScrollScale;
