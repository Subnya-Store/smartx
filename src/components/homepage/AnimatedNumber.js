// components/AnimatedNumber.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

function AnimatedNumber({ value }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    config: { mass: 1, tension: 120, friction: 14, delay: 1000 },
  });

  return (
    <animated.span>
      {number.interpolate((num) => Math.round(num))}
    </animated.span>
  );
}

export default AnimatedNumber;
