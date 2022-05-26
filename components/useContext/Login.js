import { useContext } from "react";
import { AppContext } from "../../pages/use-context";
export default function Login() {
  const { setUsername } = useContext(AppContext);
  return <input type="text" onChange={(e) => setUsername(e.target.value)} />;
}
