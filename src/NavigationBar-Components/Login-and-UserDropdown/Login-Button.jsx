import { Button } from "@rewind-ui/core";

import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="/login">
      <Button shadow="base">Sign in</Button>
    </Link>
  );
}

export default LoginButton;
