import { motion } from 'framer-motion';
import { FaDumbbell, FaAppleAlt, FaWeight, FaUsers, FaHeartbeat } from 'react-icons/fa';

const Services = () => {
  const programs = [
    {
      title: "Personal Training",
      description: "One-on-one sessions with our expert trainers tailored to your specific goals.",
      icon: <FaDumbbell className="w-10 h-10" />
    },
    {
      title: "Group Classes",
      description: "Fun and energetic group workouts including HIIT, Yoga, and Spin.",
      icon: <FaUsers className="w-10 h-10" />
    },
    {
      title: "Nutrition Planning",
      description: "Customized meal plans to complement your fitness routine.",
      icon: <FaAppleAlt className="w-10 h-10" />
    },
    {
      title: "Weight Loss",
      description: "Specialized programs to help you shed pounds and keep them off.",
      icon: <FaWeight className="w-10 h-10" />
    },
    {
      title: "Strength Training",
      description: "Build muscle and increase strength with our targeted programs.",
      icon: <FaDumbbell className="w-10 h-10" />
    },
    {
      title: "Cardio Programs",
      description: "Improve endurance and cardiovascular health with our cardio equipment.",
      icon: <FaHeartbeat className="w-10 h-10" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Programs</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">{program.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">{program.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;