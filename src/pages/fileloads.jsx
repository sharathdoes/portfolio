
import React, { useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import animationData from './filesload.json'; // Import your Lottie animation JSON file

const LottieAnimation = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      // You can add more customizations to the Lottie instance here
    }
  }, []);

  const defaultOptions = {
    loop: true,        // Loop the animation
    autoplay: true,    // Start the animation automatically
    animationData: animationData,  // The Lottie JSON data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',  // Adjust aspect ratio if necessary
    },
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        isClickToPauseDisabled={true} // Disable clicking to pause
      />
    </div>
  );
};

export default LottieAnimation;
