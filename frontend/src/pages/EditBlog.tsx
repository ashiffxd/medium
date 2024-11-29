import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";


export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
    username: string;
  };
}

export const Editblog = () => {
  const navigate = useNavigate();
 
  const { id } = useParams();
  const location = useLocation();
  const blog = location.state as Blog;
  const [showMessage, setShowMessage] = useState(false);
    const [isVisible , setIsVisible] = useState(true);


  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");
  

  useEffect(() => {
    // Update state if blog changes
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [blog]);

  async function editblog() {
    axios.put(
      `${BACKEND_URL}/api/v1/blog/${id}/edit`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        
      }
      
    );
    setShowMessage(true);
    setIsVisible(false);
    setTimeout(() => {
      navigate("/blogs");
    }, 2000);
  }
  // if (blog.author.username === localStorage.getItem("username")){
    return (
    
        <div>
          <AppBar />
          <div className="flex justify-center w-full pt-8">
            <div className="max-w-screen-lg w-full">
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Title"
              />
    
              <TextEditor
                value={content}
                onChange={(e: any) => {
                  setContent(e.target.value);
                }}
              />

              {showMessage && (
                <div className="">
                  <p> Your Blog has been updated ✔</p>
                </div>
              )}
              {isVisible &&  (
                 <button
                 onClick={editblog}
                 type="submit"
                 className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
               >
                 Update
               </button>
              )}
             
              
              
            </div>
          </div>
        </div>
      );
  }
  
// };

function TextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-2">
      <div className="w-full mb-4 ">
        <div className="flex items-center justify-between border">
          <div className="my-2 bg-white rounded-b-lg w-full">
            <label className="sr-only">Publish post</label>
            <textarea
              onChange={onChange}
              id="editor"
              rows={8}
              value={value}
              className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
