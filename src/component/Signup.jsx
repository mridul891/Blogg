import { useState } from "react";
import authService from "../appwrite/auth";
import { Link,useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Input } from "./index";
import Button from "./Button"
function Singup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`nx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 `}
      >
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account ? &nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label=" Full Name:"
              placeholder="Enter your full name "
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="Submit" className='w-full'>Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singup;
