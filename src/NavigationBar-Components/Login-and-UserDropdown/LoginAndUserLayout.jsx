import { useSelector } from "react-redux";
import UserDropdown from "./UserDropdown";
import LoginButton from "./Login-Button";

function LoginAndUserLayout() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return <>{user ? <UserDropdown user={user} /> : <LoginButton />}</>;
}

export default LoginAndUserLayout;
