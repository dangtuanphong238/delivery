import { useEffect, useRef } from 'react';

export default function usePreventOnPress(delayTime) {
  const acceptPress = useRef(true);
  const timeoutId = useRef();

  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
  }, []);

  const handlePreventPress = callback => {
    if (acceptPress.current && callback) {
      acceptPress.current = false;
      callback();
      timeoutId.current = setTimeout(() => {
        acceptPress.current = true;
      }, delayTime);
    }
  };

  return handlePreventPress;
}
