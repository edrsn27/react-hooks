import { useState } from "react";
const useReducerTutorial = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click Here
      </button>
      {showText && <p>this is text</p>}
    </div>
  );
};

export default useReducerTutorial;
