import { motion } from 'framer-motion';
import { useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: '项目一',
    description: '这是一个示例项目描述。在这里详细说明项目的目标、使用的技术和你的贡献。',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    title: '项目二',
    description: '这是另一个示例项目描述。在这里详细说明项目的目标、使用的技术和你的贡献。',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 3,
    title: '项目三',
    description: '这是第三个示例项目描述。在这里详细说明项目的目标、使用的技术和你的贡献。',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React Native', 'Firebase', 'Redux'],
    link: '#'
  }
];

const Projects = () => {
  const constraintsRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          我的作品
        </motion.h2>
        
        <motion.p 
          className="section-subtitle text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          这里展示了我最近完成的一些项目。每个项目都展示了我的技能和专业知识。
        </motion.p>
        
        <motion.div 
          ref={constraintsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <a 
                      href={project.link} 
                      className="text-white font-medium hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      查看项目 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
