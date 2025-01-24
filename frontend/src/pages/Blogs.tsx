import { Blogcard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { AppBar } from "../components/AppBar";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  // Get today's date in a readable format
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }); // Example: "24 Jan 2025"

  if (loading) {
    return (
      <div>
        <AppBar />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <div>
      <AppBar/>
      <div className="flex justify-center">
        <div>
          {[...blogs]
            .reverse()
            .map((blog) => (
              <Blogcard
                key={blog.id}
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={formattedDate} // Use today's date here
              />
            ))}
        </div>
      </div>
    </div>
  );
};
