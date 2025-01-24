import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col space-y-8 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="text-center">
          <div className="text-3xl font-extrabold">
            {type === "signup" ? "Create an Account" : "Sign In"}
          </div>
          <div className="text-slate-400 mt-2">
            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
            <Link className="pl-2 underline text-blue-600" to={type === "signin" ? "/signup" : "/signin"}>
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {type === "signup" && (
            <LabbeledInput
              label="Name"
              placeholder="Ashif Ansari"
              onChange={(e) => {
                setPostInputs({ ...postInputs, name: e.target.value });
              }}
            />
          )}
          <LabbeledInput
            label="Username"
            placeholder="ashif_ansari"
            onChange={(e) => {
              setPostInputs({ ...postInputs, username: e.target.value });
            }}
          />
          <LabbeledInput
            label="Password"
            placeholder="********"
            type="password"
            onChange={(e) => {
              setPostInputs({ ...postInputs, password: e.target.value });
            }}
          />
          <button
            onClick={sendRequest}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none w-full focus:ring-4 focus:ring-gray-300
            font-medium rounded-lg text-sm px-6 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabbeledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabbeledInput({ label, placeholder, onChange, type = "text" }: LabbeledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        onChange={onChange}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
