import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCrown } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "29",
      period: "month",
      features: [
        "Access to gym facilities",
        "Standard equipment",
        "1 free class per week",
        "No contract"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "59",
      period: "month",
      features: [
        "Unlimited gym access",
        "All equipment",
        "3 free classes per week",
        "Nutrition consultation",
        "No contract"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "99",
      period: "month",
      features: [
        "24/7 gym access",
        "All equipment + premium",
        "Unlimited classes",
        "Personal trainer sessions",
        "Meal plans",
        "No contract"
      ],
      popular: false
    }
  ];

  // Default selected plan is "Premium"
  const [selectedPlan, setSelectedPlan] = useState("Premium");

  const handleCardClick = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Membership Plans
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick(plan.name)}
              className={`relative rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                selectedPlan === plan.name 
                  ? 'border-4 border-indigo-600 scale-105' 
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-bold flex items-center">
                  <FaCrown className="mr-1" /> POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
                  {plan.name}
                </h3>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                    plan.popular 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg' 
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
