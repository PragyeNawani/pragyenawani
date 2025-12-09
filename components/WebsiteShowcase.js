import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WebsiteShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const designs = [
    {
      id: 3,
      title: "Pragye Nawani - Web Dev Portfolio",
      category: "portfolio",
      description: "Interactive, attractive, responsive portfolio with AI chat",
      image: "portfolio.png",
      color: "from-purple-500 to-indigo-500",
      tags: ["Auto-responder", "ChatBot", "Animations", "Portfolio"],
      project_url: 'https://pragyenawani.vercel.app'
    },
    {
      id: 6,
      title: "Soloistanjali - Music Learning",
      category: "education",
      description: "User-friendly music learning platform with CMS and payment gateway",
      image: "soloistanjali.png",
      color: "from-teal-500 to-blue-500",
      tags: ["Blog", "E-commerce", "Marketing","Education"],
      project_url: 'https://www.soloistanjali.com'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'saas', name: 'SaaS' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'education', name: 'Education' }
  ];

  const filteredDesigns = activeFilter === 'all' 
    ? designs 
    : designs.filter(design => design.category.toLowerCase() === activeFilter.toLowerCase());

  const handleFilterChange = (categoryId) => {
    console.log('Changing filter to:', categoryId);
    setActiveFilter(categoryId);
  };

  return (
    <section className="bg-black min-h-screen py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Website Designs
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Crafting digital experiences that combine stunning visuals with seamless functionality
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer z-30 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-700 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Design Grid with smooth animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDesigns.length > 0 ? (
              filteredDesigns.map((design, index) => (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl z-20"
                >
                  {/* Design Preview */}
                  <div className={`relative h-64 bg-gradient-to-br ${design.color} overflow-hidden`}>
                    <img src={design.image} className="w-full h-full object-cover" alt={design.title} />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <a href={design.project_url} target="_blank" rel="noopener noreferrer">
                          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-110 transition-all">
                            View Project
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Design Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {design.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{design.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {design.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-gray-600 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 z-40">
                <p className="text-gray-400 text-xl mb-4">No projects found in this category yet.</p>
                <button 
                  onClick={() => handleFilterChange('all')}
                  className="text-orange-400 hover:text-orange-300 underline text-lg"
                >
                  View all projects
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 border border-gray-800 hover:border-gray-700 transition-all">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge design and development.
            </p>
            <a href="#contact" className=' relative z-20'>
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer">
                Get In Touch
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteShowcase;