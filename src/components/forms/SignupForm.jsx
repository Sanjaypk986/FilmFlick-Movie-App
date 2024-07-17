import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
    const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch('password')
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users`, data);
      console.log("signup");
      navigate('/login')
      reset();
      setErrorMessage("");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage("Email already exists");
      } else {
        setErrorMessage("Error creating user. Please try again.");
      }
      console.error("Error creating user:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-gray-100 sm:flex-row sm:flex-wrap gap-4 items-start sm:items-center p-6 rounded-md shadow-md w-full lg:w-3/4 mx-auto"
    >
      {errorMessage && <span className="text-red-600">{errorMessage}</span>}
      <div className="w-full">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 my-2"
        >
          Name
        </label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:border-gray-500"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <div className="w-full">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 my-2"
        >
          Email
        </label>
        <input
        {...register("email", {
          required: "This field is required",
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
        type="email"
        className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:border-gray-500"
      />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <div className="w-full">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 my-2"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 8 })}
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:border-gray-500"
        />
        {errors.password?.type === "required" && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
        {errors.password?.type === "minLength" && (
          <span className="text-red-500 text-sm">
            Password must be at least 8 characters long
          </span>
        )}
      </div>
      <div className="w-full">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700 my-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword", { required: "This field required", validate: value=> value === password || '"Passwords do not match"'})}
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:border-gray-500"
        />
        {errors.confirmPassword&& (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <div className="w-full mx-auto mt-4 sm:mt-0">
        <input
          type="submit"
          value="Signup"
          className="w-full sm:w-auto px-4 py-2 links text-white rounded-md hover:bg-blue-600 transition duration-300"
        />
      </div>
    </form>
  );
}
