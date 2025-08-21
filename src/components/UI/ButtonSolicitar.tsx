import React, { type ReactNode, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ButtonSolicitarProps {
  text?: string;
  icon?: ReactNode;
  whatsappNumber: string;
}

interface Ripple {
  x: number;
  y: number;
  key: number;
}

const RIPPLE_LIFETIME = 700;

const ButtonSolicitar: React.FC<ButtonSolicitarProps> = ({
  text = "Solicitar",
  icon,
  whatsappNumber,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const createRippleFromCenter = (el?: HTMLButtonElement | null) => {
    const node = el ?? buttonRef.current;
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

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    createRippleFromCenter(e.currentTarget);
  };

  const handleMouseLeave = () => {
    setRipples([]);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
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
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className="relative flex items-center gap-2 bg-cta hover:bg-orange-400 px-4 py-2 rounded-lg overflow-hidden text-white transition-colors duration-200 cursor-pointer"
      type="button"
    >
      {icon && <span className="flex items-center w-5 h-5">{icon}</span>}
      <span>{text}</span>

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

export default ButtonSolicitar;
