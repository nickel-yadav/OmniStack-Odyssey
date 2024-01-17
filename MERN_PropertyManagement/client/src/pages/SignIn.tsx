import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    // FIXME: Update type
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    // FIXME: Update type
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      navigate("/");
    } catch (error: any) {
      // FIXME: Update type
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="flex-grow flex justify-center items-start bg-gradient-to-b from-gray-400 to-gray-900">
      <div className="mt-10 md:mt-40 lg:mt-10 w-4/5 lg:w-1/3 p-4 bg-clip-padding backdrop-filter backdrop-blur-3xl border border-gray-100 shadow-lg rounded-lg flex flex-col justify-between bg-white bg-opacity-20">
        <h2 className="text-center text-white text-2xl py-4">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-3">
          <input
            type="email"
            placeholder="Email Address"
            id="email"
            className="p-2 rounded-lg border-2 border-gray-500"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="p-2 rounded-lg border-2 border-gray-500"
            onChange={handleChange}
          />
          <button
            disabled={isLoading}
            className="border p-2 rounded-lg disabled:bg-gray-500 hover:bg-blue-600 bg-blue-500 text-white"
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>
        {error && (
          <div className="p-4 mt-2 bg-red-200 border-s-4 border-red-600">
            <p className="text-red-500 text-center">{error}</p>
          </div>
        )}
        <div className="flex flex-col items-center pt-4">
          <p className="text-white">Dont have an account ?</p>
          <p className="text-white hover:text-blue-500">
            <Link to={"/sign-up"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
