'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals,
  duration = 1.6,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 50,
    damping: 18,
    mass: 1,
    duration: duration * 1000,
  });
  const [display, setDisplay] = useState('0');

  const isFloat =
    decimals !== undefined ? decimals > 0 : Number.isFinite(value) && !Number.isInteger(value);
  const decimalPlaces = decimals ?? (isFloat ? 1 : 0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      const formatted = v.toLocaleString(undefined, {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      });
      setDisplay(formatted);
    });
    return unsub;
  }, [spring, decimalPlaces]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
