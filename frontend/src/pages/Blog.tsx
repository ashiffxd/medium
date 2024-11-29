import { AppBar } from "../components/AppBar";
import { FullBlog } from "../components/FullBlog";
import { Deleteblog } from "./DeleteBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import { useParams, useNavigate } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();

  const { loading, blog } = useBlog({
    id: id || "",
  });

  const navigate = useNavigate();

  if (loading || !blog) {
    return (
      <div>
        <AppBar />
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <FullBlog blog={blog} />
      <div className=" flex justify-center ">
       
        <div className="">
        <Deleteblog blog={blog}></Deleteblog>

        </div>
       
      </div>
      {blog.author.username === localStorage.getItem("username") && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate(`/${id}/edit`, { state: blog })}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Edit Blog
          </button>
        </div>
      )}
    </div>
  );
};
