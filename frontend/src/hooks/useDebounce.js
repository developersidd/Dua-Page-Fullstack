import React, { useEffect } from "react";

const useDebounce = (cb, delay = 300) => {
  const timeout = React.useRef(null);
  useEffect(() => {
    // Cleanup
    return () => clearTimeout(timeout.current);
  }, []);
  const debouncedCallback = (...args) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };
  return debouncedCallback;
};

export default useDebounce;
