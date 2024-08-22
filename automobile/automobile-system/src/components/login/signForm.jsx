import { useState } from "react";
import { Button, FormField, Input, LoginContainer, Text } from "./style";
import { useNavigate } from "react-router-dom";
import { createUser, loginWithEmail } from "../utils/api";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    let regrex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
    if (email.match(regrex) == null) {
      setError({ message: "Invalid Email" });
      return;
    }

    if (password.length < 8) {
      setError({ message: "Password must be at least 8 characters long" });
      return;
    }

    const response = await createUser({
      name: {
        firstName: firstName,
        lastName: lastName,
      },
      email,
      password,
    });
    response.error ? setError(response.error) : navigate("/login");
  };
  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Text> First Name </Text>
          <Input
            type="text"
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
            name="firstName"
            required
            placeholder="Enter First Name"
          />
        </FormField>
        <FormField>
          <Text>Last Name</Text>
          <Input
            type="text"
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}
            name="lastName"
            required
            placeholder="Enter Last Name"
          />
        </FormField>
        <FormField>
          <Text>Email</Text>
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
          <Text>Password</Text>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            name="password"
            placeholder="Enter Password"
          />
        </FormField>
        <p className="text-red-500">{error.message}</p>
        <Button>Sign Up</Button>
      </form>
    </LoginContainer>
  );
};

export default SignUpForm;
