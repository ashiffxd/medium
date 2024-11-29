import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useState } from "react";
import { Blog } from "../hooks";


export const Deleteblog = ({ blog }: { blog: Blog }) => {
    const [showMessage, setShowMessage] = useState(false);
    const [isVisible , setIsVisible] = useState(true);
  
    const Navigate = useNavigate();
  
    if (blog.author.username === localStorage.getItem("username")) {
      return (
        <div>
          {showMessage && (
            <div className="success-card">
              <p>Blog has been deleted successfully ✔ </p>
            </div>
          )}
          <div>
            {isVisible && (
                 <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                 onClick={async () => {
                   
                   try {
                     const response = await axios.delete(
                       `${BACKEND_URL}/api/v1/blog/${blog.id}/delete`,
                       {
                         headers: {
                           Authorization: localStorage.getItem("token"), // Use Bearer if required
                         },
                       }
                     );
                     console.log(response);
                     setIsVisible(false);
                     setShowMessage(true);
                     setTimeout(() => {
                       Navigate("/blogs");
                     }, 2000);
                   } catch (error) {
                     console.error("Error deleting the blog:", error);
                     alert("Failed to delete the blog. Please try again.");
                   }
                 }}
               >
                 Delete
               </button>
            )}
           
          </div>
        </div>
      );
    }
  };
  