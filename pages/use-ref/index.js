import { useRef } from "react";

function useRefTutorial() {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Juan</h1>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="type here..."
        ref={inputRef}
      />
      <button onClick={onClick}>Change name</button>
    </div>
  );
}

export default useRefTutorial;
