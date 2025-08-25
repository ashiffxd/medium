import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Heart, 
  Feather, 
  Globe, 
  Users, 
  BookOpen, 
  Star, 
  TrendingUp, 
  Award,
  ArrowRight,
  Play,
  Quote,
  Zap,
  Shield,
  Coffee
} from 'lucide-react';

export const Welcome = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const stats = [
    { icon: Users, value: "2M+", label: "Active Writers" },
    { icon: BookOpen, value: "10M+", label: "Stories Published" },
    { icon: Globe, value: "150+", label: "Countries" },
    { icon: Award, value: "500K+", label: "Featured Articles" }
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with readers from around the world and share your unique perspective",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Feather,
      title: "Easy Writing",
      description: "Intuitive editor with rich formatting options to bring your stories to life",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Heart,
      title: "Community",
      description: "Engage with passionate readers and build meaningful connections",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized platform ensuring your content loads instantly worldwide",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security measures",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Track your story performance with detailed insights and metrics",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const categories = [
    "Technology", "Lifestyle", "Travel", "Food", "Health", "Business", "Art", "Science"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech Writer",
      image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      quote: "This platform transformed how I share my thoughts. The community is incredibly supportive!"
    },
    {
      name: "Mike Chen",
      role: "Travel Blogger",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      quote: "The writing tools are intuitive and the reach is amazing. My stories now connect with readers globally."
    },
    {
      name: "Emily Rodriguez",
      role: "Lifestyle Influencer",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      quote: "I've found my voice here and built an incredible following. The analytics help me understand my audience."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex justify-between items-center p-6 bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0"
      >
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Feather className="text-blue-600" size={36} />
            <div className="absolute -inset-1 bg-blue-600/20 rounded-full blur-sm"></div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Medium
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { navigate("/signup") }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full px-6 py-2.5 hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { navigate("/signin") }}
            className="text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-full px-6 py-2.5 transition-all duration-300"
          >
            Sign In
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0E4Qjg2IiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32 text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 2M+ writers worldwide
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight"
          >
            Share Your Stories,
            <br />
            <span className="text-blue-600">Connect Your World</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join millions of writers sharing their passion, expertise, and creativity. 
            Build your audience, earn from your content, and make your voice heard.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { navigate("/signup") }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 flex items-center"
            >
              Start Writing Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center text-gray-700 font-semibold px-8 py-4 rounded-full text-lg border border-gray-300 hover:border-gray-400 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            variants={itemVariants}
            className="relative mx-auto max-w-4xl"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
                alt="Writing workspace"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20 -z-10"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tell Your Story
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides all the tools and features you need to create, publish, and grow your audience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Explore Popular Categories</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing content across various topics or find your niche to start writing.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.span
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-50 hover:to-purple-50 rounded-full text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-all duration-300 border hover:border-blue-200"
              >
                {category}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">What Writers Say About Us</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied writers who've found their home on our platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Coffee className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Writing Journey?
            </h3>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join our community of passionate writers and start sharing your unique perspective with the world today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { navigate("/signup") }}
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                Start Writing for Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Feather className="text-blue-400" size={32} />
                <h4 className="text-xl font-bold text-white">Medium</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering writers to share their stories and connect with readers worldwide.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Platform</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Write</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Read</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Publish</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Community</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Featured Writers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Writing Tips</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Forum</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Support</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>© 2025 BlogSphere. All rights reserved. Made with ❤️ for writers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};