import { useState, useEffect, useRef } from "react";

const useAnimateOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Torna visível quando o elemento aparece na viewport
          } else {
            setIsVisible(false); // Reseta a visibilidade quando o elemento sai da viewport
          }
        });
      },
      {
        threshold: 0.1, // Ajusta quando a animação deve ser disparada (10% visível)
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

export default useAnimateOnScroll;
