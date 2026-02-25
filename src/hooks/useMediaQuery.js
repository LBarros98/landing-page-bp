import { useState, useEffect } from 'react';

const BREAKPOINT_MOBILE = 768;

export function useMediaQuery(maxWidth = BREAKPOINT_MOBILE) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia(`(max-width: ${maxWidth}px)`).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handleChange = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handleChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', handleChange);
  }, [maxWidth]);

  return isMobile;
}
