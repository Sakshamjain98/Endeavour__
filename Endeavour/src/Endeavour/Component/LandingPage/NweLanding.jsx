import  { useEffect, useRef } from 'react';
import VANTA from 'vanta/dist/vanta.waves.min';

function WavesBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Initialize Vanta.js waves effect
    VANTA.WAVES({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });

    // Clean up effect on unmount
    return () => {
      if (window.VANTA) {
        window.VANTA.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} style={{ width: '100%', height: '100vh' }}>
      {/* Your content here */}
    </div>
  );
}

export default WavesBackground;
