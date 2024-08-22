import { NavLink } from "react-router-dom";
import LoginForm from "../components/login/loginForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-4 w-2/6 shadow-lg rounded-lg">
        <p className="text-2xl text-bold font-bold">Get's started.</p>
        <p className="text-xl">
          Login to your account{" "}
          <span className="text-cyan-600">
            {" "}
            <NavLink to={"/signup"}> Or. Sign up </NavLink>
          </span>{" "}
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
