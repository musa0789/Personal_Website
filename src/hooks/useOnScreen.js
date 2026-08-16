import { useState, useEffect } from "react";

export function useOnScreen(ref, rootMargin = "-15% 0px -15% 0px") {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { rootMargin }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, rootMargin]);
  
  return visible;
}