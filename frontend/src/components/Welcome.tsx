import { useNavigate } from "react-router-dom";
import { Heart, Feather, Globe } from 'lucide-react';

export const Welcome =()=>{
    const navigate = useNavigate();
    return <div className="min-h-screen bg-white flex flex-col">
    {/* Header */}
    <header className="flex justify-between items-center p-6 border-b">
      <div className="flex items-center space-x-2">
        <Feather className="text-blue-600" size={36} />
        <h1 className="text-2xl font-bold text-gray-800">MyBlog</h1>
      </div>
      <div className=" space-x-4">
      <button type="button" h-48 onClick={()=>{navigate("/signup")}} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Signup</button>

      <button onClick={()=>{ navigate("/signin")
      
      }} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Signin</button>

      </div>
    </header>

    {/* Hero Section */}
    <main className="flex-grow flex items-center justify-center text-center px-4 py-16">
      <div>
        <h2 className="text-5xl font-bold mb-6 text-gray-900">
          Share Your Stories, Connect Your World
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Create, discover, and engage with amazing content from creators worldwide
        </p>
        <div className="space-x-4">
          {/* <Button size="lg">Start Writing</Button>
          <Button variant="outline" size="lg">Explore Blogs</Button> */}
        </div>
      </div>
    </main>

    {/* Features */}
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Globe className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
          <p>Connect with readers from around the world</p>
        </div>
        <div className="text-center">
          <Feather className="mx-auto mb-4 text-green-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Easy Writing</h3>
          <p>Intuitive tools to help you tell your story</p>
        </div>
        <div className="text-center">
          <Heart className="mx-auto mb-4 text-red-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p>Engage with passionate readers and writers</p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p>© 2025 MyBlog. All rights reserved.</p>
    </footer>
  </div>
        
         
        
    
}