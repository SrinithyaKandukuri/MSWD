import { useState } from "react";
import { loginWithEmail } from "../utils/api";
import { Button, FormField, Input, LoginContainer, Text } from "./style";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let regrex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
    if (email.match(regrex) == null) {
      setErrors({ message: "Invalid Email" });
      return;
    }

    if (password.length < 8) {
      setErrors({ message: "Password must be at least 8 characters long" });
      return;
    }

    setErrors({});
    
    const response = await loginWithEmail({ email, password });
    console.log(response);
    response.error ? setErrors(response.error) : navigate("/home");
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Text> Email </Text>
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            required
            placeholder="Enter Email"
          />
        </FormField>
        <FormField>
          <Text> Password </Text>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            required
            placeholder="Enter Password"
          />
          <p className="text-red-500">{error.message}</p>
        </FormField>
        <Button>Login</Button>
      </form>
    </LoginContainer>
  );
};

export default LoginForm;
