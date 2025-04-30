import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    company: '公司名称一',
    position: '职位名称',
    period: '2020年 - 至今',
    description: '在这里详细描述你在这家公司的工作职责、成就和使用的技术。包括你参与的项目、解决的问题以及取得的成果。',
    skills: ['技能1', '技能2', '技能3']
  },
  {
    id: 2,
    company: '公司名称二',
    position: '职位名称',
    period: '2018年 - 2020年',
    description: '在这里详细描述你在这家公司的工作职责、成就和使用的技术。包括你参与的项目、解决的问题以及取得的成果。',
    skills: ['技能1', '技能2', '技能3']
  },
  {
    id: 3,
    company: '公司名称三',
    position: '职位名称',
    period: '2016年 - 2018年',
    description: '在这里详细描述你在这家公司的工作职责、成就和使用的技术。包括你参与的项目、解决的问题以及取得的成果。',
    skills: ['技能1', '技能2', '技能3']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 py-20">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          工作经历
        </motion.h2>
        
        <motion.p 
          className="section-subtitle text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          以下是我的专业工作经历，展示了我在不同公司和角色中积累的经验。
        </motion.p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* 时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          {/* 经历项目 */}
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-10 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-10 md:text-left md:mr-auto md:ml-1/2'} md:w-1/2`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* 时间点 */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 z-10"></div>
              
              {/* 内容卡片 */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-2 text-blue-600 dark:text-blue-400 font-medium">{item.period}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.position}</h3>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{item.company}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
