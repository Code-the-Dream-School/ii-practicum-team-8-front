import { useState, useEffect } from "react";

function useStorageState(key, initValue) {
  const storedValue = localStorage.getItem(key);

  const [value, setValue] = useState(() => {
    return storedValue ? JSON.parse(storedValue) : initValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useStorageState;