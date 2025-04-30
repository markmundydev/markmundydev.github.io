import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="section relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
        <motion.div 
          className="w-full h-full bg-gradient-to-r from-blue-900 to-purple-900"
          style={{ 
            y: scrollY * 0.5,
            scale: 1 + scrollY * 0.001
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="block">你的名字</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/80 mb-8">
            职业头衔
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
            这里是一段简短的自我介绍，描述你的专业背景、技能和兴趣。让访问者快速了解你是谁，你能做什么。
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <a 
              href="#projects" 
              className="inline-block px-8 py-3 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-100 transition-colors duration-300"
            >
              查看我的作品
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
      >
        <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Header;
