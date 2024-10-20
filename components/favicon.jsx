'use client';

import { useEffect, useState } from 'react';

const FAVICON_FRAMES = [
  '/frame01.ico',
  '/frame02.ico',
  '/frame03.ico',
  '/frame04.ico',
  '/frame05.ico',
  '/frame06.ico',
  '/frame07.ico',
  '/frame08.ico',
];

const ANIMATION_INTERVAL = 500; // Change frame every 500ms

export default function AnimatedFavicon() {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % FAVICON_FRAMES.length);
    }, ANIMATION_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = FAVICON_FRAMES[currentFrame];
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [currentFrame]);

  return null;
}