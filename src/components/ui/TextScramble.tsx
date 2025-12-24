'use client';

import { type JSX, useEffect, useState, useCallback } from 'react';
import { motion, MotionProps } from 'framer-motion';

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements
  );

  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const text = children;

  const scramble = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  }, [isAnimating, duration, speed, text, characterSet, onScrambleComplete]);

  useEffect(() => {
    if (!trigger) return;
    scramble();
  }, [trigger, scramble]);

  // Update display text when children change (for cycling text)
  useEffect(() => {
    if (!isAnimating) {
      scramble();
    }
  }, [children]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}

// Cycling text scramble component
type CyclingTextScrambleProps = {
  texts: string[];
  interval?: number;
  duration?: number;
  speed?: number;
  className?: string;
  as?: React.ElementType;
} & Omit<MotionProps, 'children'>;

export function CyclingTextScramble({
  texts,
  interval = 3000,
  duration = 0.8,
  speed = 0.04,
  className,
  as: Component = 'span',
  ...props
}: CyclingTextScrambleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      setTrigger(true);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const handleComplete = () => {
    setTrigger(false);
  };

  // Find the longest text for consistent width
  const maxLength = Math.max(...texts.map(t => t.length));
  const paddedText = texts[currentIndex].padEnd(maxLength, ' ');

  return (
    <TextScramble
      duration={duration}
      speed={speed}
      className={className}
      as={Component}
      trigger={trigger}
      onScrambleComplete={handleComplete}
      {...props}
    >
      {paddedText}
    </TextScramble>
  );
}

