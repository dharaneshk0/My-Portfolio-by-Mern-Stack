import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export function AnimatedBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video playing successfully');
        } catch (error) {
          console.error('Video play failed:', error);
        }
      };
      
      playVideo();
    }
  }, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Hero video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onError={(e) => console.error('Video error:', e)}
        onLoadedData={() => console.log('Video data loaded')}
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 to-black/60" />
    </div>
  );
}