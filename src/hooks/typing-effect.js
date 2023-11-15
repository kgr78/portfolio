// typing-effect.js
import { useEffect, useRef, useState } from "react";

export function useTypingEffect(textToType, interKeyStrokeDurationInMs, delay) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const currentPositionRef = useRef(0);

  useEffect(() => {
    const startTyping = () => {
      const intervalId = setInterval(() => {
        console.log("interval");
        setCurrentPosition((value) => value + 1);
        currentPositionRef.current += 1;
        if (currentPositionRef.current >= textToType.length) {
          clearInterval(intervalId);
          setTypingComplete(true);
        }
      }, interKeyStrokeDurationInMs);

      return () => {
        clearInterval(intervalId);
        currentPositionRef.current = 0;
        setCurrentPosition(0);
      };
    };

    const delayTimer = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimer);
    };
  }, [interKeyStrokeDurationInMs, textToType, delay]);

  return {
    typedText: textToType.substring(0, currentPosition),
    typingComplete: typingComplete,
  };
}
