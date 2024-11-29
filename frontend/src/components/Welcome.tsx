import { useNavigate } from "react-router-dom"
export const Welcome =()=>{
    const navigate = useNavigate();
    return <div >
        <div className="text-center pt-10 text-3xl font-bold">
         Medium</div>
         
         <div className="mt-40 pl-10 w-1/2 font-semibold font-mono">
         <Oneliner/>
           <div className="mt-3">
         A Medium Blog App By Ashif

           </div>
           <div>
            
           </div>
           <div className="pt-4 flex w-1/2 justify-between">
           <div>
            <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={()=>{
                navigate("/signin")
            }}>Sign In</button>
         </div>
         <div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>{
                navigate("/signup")
            }}>Sign Up</button>
         </div>
           </div>
         </div>
         </div>
         
        
    
}

function Oneliner(){

    return <div className="text-5xl text-gray-500 flex justify-center items-center ">
        "Unleash your thoughts, share your stories, and inspire the world—one blog at a time."
    </div>
}