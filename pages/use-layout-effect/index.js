import { useLayoutEffect, useEffect, useRef } from "react";

const layoutEffect = () => {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log("useEffect");
    inputRef.current.value = "Ederson";
  }, []);
  return (
    <div>
      <input type="text" name="name" id="name" value={"Juan"} ref={inputRef} />
    </div>
  );
};
export default layoutEffect;
