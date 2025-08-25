import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      const username = postInputs.username;

      localStorage.setItem("token", jwt);
      localStorage.setItem("username", username);

      navigate("/blogs");
    } catch (e) {
      console.log(e);
      alert("Error while signing up");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800">
            {type === "signup" ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
            <Link
              className="pl-2 font-medium text-indigo-600 hover:text-indigo-800 underline"
              to={type === "signin" ? "/signup" : "/signin"}
            >
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          {type === "signup" && (
            <LabeledInput
              label="Full Name"
              placeholder="Ashif Ansari"
              onChange={(e) => setPostInputs({ ...postInputs, name: e.target.value })}
            />
          )}
          <LabeledInput
            label="Username"
            placeholder="ashif_ansari"
            onChange={(e) => setPostInputs({ ...postInputs, username: e.target.value })}
          />
          <LabeledInput
            label="Password"
            placeholder="********"
            type="password"
            onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })}
          />

          {/* Button */}
          <button
            onClick={sendRequest}
            type="button"
            className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 shadow-md transition-all duration-300"
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabeledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabeledInput({ label, placeholder, onChange, type = "text" }: LabeledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 p-3 text-gray-800 placeholder-gray-400 shadow-sm transition"
        required
      />
    </div>
  );
}
