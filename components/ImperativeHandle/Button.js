import { forwardRef, useImperativeHandle, useState } from "react";
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button>button from child</button>
      <br />
      {toggle && <span>toggle</span>}
    </div>
  );
});
export default Button;
