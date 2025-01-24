import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useState } from "react";
import { Blog } from "../hooks";

export const Deleteblog = ({ blog }: { blog: Blog }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [responseMessage, setResponseMessage] = useState<string | null>(null); // Store server response

  const Navigate = useNavigate();

  if (blog.author.username === localStorage.getItem("username")) {
    return (
      <div>
        {showMessage && responseMessage && (
          <div className="success-card bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <p>{responseMessage}</p>
          </div>
        )}
        <div>
          {isVisible && (
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
                  setResponseMessage(response.data.message || "Blog deleted successfully!"); // Display response message
                  setIsVisible(false);
                  setShowMessage(true);
                  setTimeout(() => {
                    Navigate("/blogs");
                  }, 2000);
                } catch (error: unknown) {
                  let errorMessage = "Failed to delete the blog. Please try again.";

                 
                  if (axios.isAxiosError(error)) {
                    errorMessage =
                      error.response?.data?.message || "An error occurred while deleting the blog.";
                  } else if (error instanceof Error) {
                    errorMessage = error.message;
                  }

                  console.error("Error deleting the blog:", error);
                  setResponseMessage(errorMessage); // Display error message if deletion fails
                  setShowMessage(true);
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
  return null;
};
