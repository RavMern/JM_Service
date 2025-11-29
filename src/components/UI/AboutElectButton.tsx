import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AboutElectButtonProps {
  text: string;
}

interface Ripple {
  x: number;
  y: number;
  key: number;
}

const RIPPLE_LIFETIME = 700;

const AboutElectButton: React.FC<AboutElectButtonProps> = ({ text }) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const createRippleFromCenter = () => {
    const node = buttonRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = rect.width / 2;
    const y = rect.height / 2;
    const key = Date.now();

    setRipples([{ x, y, key }]);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setRipples([]);
      timeoutRef.current = null;
    }, RIPPLE_LIFETIME);
  };

  const handleMouseEnter = () => createRippleFromCenter();

  const handleMouseLeave = () => {
    setRipples([]);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      type="submit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className="relative bg-cta hover:bg-orange-400 py-3 rounded-md w-full overflow-hidden font-bold text-white transition-colors duration-200 cursor-pointer"
    >
      {text}

      {/* Ripple Animation */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.key}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.36, scale: 8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: r.x,
              top: r.y,
              width: 20,
              height: 20,
              backgroundColor: "white",
              borderRadius: "50%",
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};

export default AboutElectButton;
