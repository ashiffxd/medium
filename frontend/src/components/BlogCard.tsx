import { Link } from "react-router-dom";
interface BlogCardProps {
    id : number
    authorName : string;
    title: string;
    content : string;
    publishedDate : string;

}

export const Blogcard = ({authorName , id ,  title , content , publishedDate} : BlogCardProps)=>{
    return (
    
    <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex mt-1 flex-col ">
            <div className=" flex flex-row">
                <div className="">
                <Avatar name={authorName} size="small"/> 

                </div>
            
        <div className="font-extralight pl-2 mt-1 text-sm">
        {authorName} 

        </div>
        <div className="font-thin mt-1 pl-2 text-sm text-slate-500">
        {publishedDate}

        </div>

            </div>
        
         

        </div>

        <div className="text-xl font-semibold">
           {title} 
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+ "..."}
        </div>

        <div className=" text-slate-500 text-sm font-thin">
            { `${Math.ceil(content.length/100)} minutes read..`}
        </div>
        


        
    </div>
     </Link>
    )
}

export function Avatar({name , size} : {name :string , size:"small" | "big" }){

    return <div>
        
<div className={`relative inline-flex items-center justify-center overflow-hidden bg-slate-400 rounded-full dark:bg-gray-600
${size==="small" ? "w-6 h-6" : "w-10 h-10" }`}>
    <span className={`text-xs font-medium opacity-100  text-gray-600 dark:text-gray-300
   ${size==="small" ? "text-xs" : "text-md"}`}>{name[0]}</span>
</div>

    </div>

}
export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}