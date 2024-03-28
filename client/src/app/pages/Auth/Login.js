import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/storeApi";
import { useGlobalContext } from "../../UserContext/UserContext";

const Login = () => {
  // const {isLogedUser,setLogedUser} = useGlobalContext()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (formData.email.trim() === "") {
      newErrors.email = " ";
      isValid = false;
    }

    // Validate password
    if (formData.password.trim() === "") {
      newErrors.password = " ";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
    
    const [loginUser, { isLoading, isError ,data,isSuccess}] = useLoginUserMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
    const respData = await loginUser(formData);
    console.log('respData', respData?.data)
   
      localStorage.setItem('token', JSON.stringify(respData?.data))
  
      navigate('/')
    }
  };
  if(isError){
    alert("some thing wrong")
  }
  if(isLoading){
    return <h1>loading ...!</h1>
  }
  return (
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div class="w-full bg-white rounded-lg shadow md:mt-4 mb-4 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    border: errors.email ? "1px ridge red" : "",
                    backgroundColor: errors.email ? "#fce0d9" : "",
                  }}
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@example.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{
                    border: errors.password ? "1px ridge red" : "",
                    backgroundColor: errors.password ? "#fce0d9" : "",
                  }}
                  placeholder="Enter your password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <span class="text-sm font-medium text-primary-600 hover:underline">
                  Forgot password?
                </span>
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "#e8f3df" }}
                onClick={handleSubmit}
                class="w-full hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  class="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;