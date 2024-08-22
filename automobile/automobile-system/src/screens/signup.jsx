import { NavLink } from "react-router-dom";
import LoginForm from "../components/login/loginForm";
import SignUpForm from "../components/login/signForm";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-4 w-2/6 shadow-lg rounded-lg">
        <p className="text-2xl text-bold font-bold">Get's started.</p>
        <p className="text-xl">
          Sign Up For A your account{" "}
          <span className="text-cyan-600">
            <NavLink to={"/login"}>Or. Login</NavLink>
          </span>{" "}
        </p>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
