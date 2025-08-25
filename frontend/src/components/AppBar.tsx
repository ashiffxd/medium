import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";
import { Feather } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const AppBar = () => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close logout dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowLogout(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setShowLogout(false);
    navigate("/signin");
  };

  return (
    <div className="border-b bg-white/70 backdrop-blur-md flex justify-between items-center px-10 py-4 shadow-sm sticky top-0 z-50">
      {/* Logo / Brand */}
      <Link to={"/blogs"} className="flex items-center space-x-3 cursor-pointer">
        <div className="relative">
          <Feather className="text-blue-600" size={28} />
          <div className="absolute -inset-1 bg-blue-600/20 rounded-full blur-sm" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Medium
        </h1>
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        {/* Publish Button */}
        <Link to={`/publish`}>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2 shadow-md"
          >
            ✍️ New Post
          </button>
        </Link>

        {/* Avatar with click toggle */}
        <div
          className="cursor-pointer"
          onClick={() => setShowLogout((prev) => !prev)}
          aria-haspopup="true"
          aria-expanded={showLogout}
        >
          <Avatar size={"big"} name={"Ashif Ansari"} />
        </div>

        {/* Dropdown Logout */}
        {showLogout && (
          <button
            onClick={handleLogout}
            className="absolute right-0 top-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
