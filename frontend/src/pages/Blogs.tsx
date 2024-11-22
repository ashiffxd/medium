import { Blogcard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { AppBar } from "../components/AppBar";
import { BlogSkeleton } from "../components/BlogSkeleton";
export const Blogs = () => {
    const { loading , blogs} = useBlogs();
    if(loading){
        return <div>
            <AppBar/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
           
        </div>
    }

    return <div>
        <AppBar/>
   
    <div  className="flex justify-center">
        <div>
            {blogs.map(blog => <Blogcard

                id = {blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb 2024"}
            />)}
        </div>
    </div>
</div>
    
}