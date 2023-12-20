import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("daadshf", data);
  };

  return (
    <div className="flex-grow flex justify-center items-start bg-gradient-to-b from-gray-400 to-gray-900">
      <div className="mt-10 md:mt-40 lg:mt-10 w-4/5 lg:w-1/3 p-4 bg-clip-padding backdrop-filter backdrop-blur-3xl border border-gray-100 shadow-lg rounded-lg flex flex-col justify-between bg-gray-600 bg-opacity-40">
        <h2 className="text-center text-white text-2xl py-4">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <input
            type="text"
            placeholder="Name"
            id="username"
            className="p-2 rounded-2xl border"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email Address"
            id="email"
            className="p-2 rounded-2xl border"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            id="password"
            className="p-2 rounded-2xl border"
            onChange={handleChange}
          />
          <button className="border p-2 rounded-2xl hover:bg-blue-600 bg-blue-500 text-white">
            Sign Up
          </button>
        </form>
        <div className="flex flex-col items-center pt-4">
          <p className="text-white">Have an account ?</p>
          <p className="text-white hover:text-blue-500">
            <Link to={"/sign-in"}>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
