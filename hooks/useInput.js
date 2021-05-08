import { useState, useCallback } from "react";

function useInput(initialState = null) {
  const [value, setValue] = useState(initialState);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
}

export default useInput;
