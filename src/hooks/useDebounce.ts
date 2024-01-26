import { useEffect, useState } from "react";

export default function useDebounce(value: string, timer: number) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
      const timeout = setTimeout(() => {
        console.log(value);
        setDebounceValue(value);
      }, timer);
                       
      return () => {
        clearTimeout(timeout);
      };
  }, [value, timer]);

  return debounceValue;
}
