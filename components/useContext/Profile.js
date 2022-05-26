import { useContext } from "react";
import { AppContext } from "../../pages/use-context";
export default function Profile() {
  const { username } = useContext(AppContext);
  return <h1>{username}</h1>;
}
