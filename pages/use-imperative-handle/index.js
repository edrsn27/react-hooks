import { useRef } from "react";
import Button from "../../components/ImperativeHandle/Button";
export default function Index() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button onClick={() => buttonRef.current.alterToggle()}>
        Button from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}
