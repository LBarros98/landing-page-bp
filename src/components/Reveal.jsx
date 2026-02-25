import { useState, useEffect, useRef } from 'react';
import { Children } from 'react';

const defaultOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px',
  once: true,
};

export default function Reveal({ children, stagger, className = '', ...props }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, defaultOptions);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const visibleClass = isVisible ? 'is-visible' : '';
  const staggerClass = stagger ? 'reveal--stagger' : '';

  if (stagger) {
    const childArray = Children.toArray(children);
    return (
      <div
        ref={ref}
        className={`reveal ${staggerClass} ${visibleClass} ${className}`.trim()}
        {...props}
      >
        {childArray.map((child, i) => (
          <div
            key={i}
            className="reveal__item"
            style={{ '--delay': i * 0.08 }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`reveal ${staggerClass} ${visibleClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
