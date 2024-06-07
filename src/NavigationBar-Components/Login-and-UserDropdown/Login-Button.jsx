import { Button } from "@rewind-ui/core";

function LoginButton({ onClick }) {
  return (
    <Button shadow="base" onClick={onClick}>
      Sign in
    </Button>
  );
}

export default LoginButton;
