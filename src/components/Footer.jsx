import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { 
      name: "Facebook", 
      icon: <FaFacebookF className="w-4 h-4" />, 
      url: "#",
      color: "hover:bg-blue-600"
    },
    { 
      name: "Twitter", 
      icon: <FaTwitter className="w-4 h-4" />, 
      url: "#",
      color: "hover:bg-blue-400"
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram className="w-4 h-4" />, 
      url: "#",
      color: "hover:bg-pink-600"
    },
    { 
      name: "YouTube", 
      icon: <FaYoutube className="w-4 h-4" />, 
      url: "#",
      color: "hover:bg-red-600"
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedinIn className="w-4 h-4" />, 
      url: "#",
      color: "hover:bg-blue-700"
    },
  ];

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 px-6 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FITNESS HUB</h3>
            <p className="text-gray-400">Your premier destination for fitness and wellness. Transform your life with us.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'pricing', 'contact'].map((link) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href={`#${link}`} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { days: "Monday - Friday", hours: "5:00 AM - 11:00 PM" },
                { days: "Saturday", hours: "7:00 AM - 9:00 PM" },
                { days: "Sunday", hours: "8:00 AM - 8:00 PM" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex justify-between py-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <span>{item.days}</span>
                  <span>{item.hours}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`bg-gray-700 ${social.color} w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300`}
                  aria-label={social.name}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, 10, -10, 0]
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Newsletter</h4>
              <motion.div 
                className="flex"
                whileHover={{ scale: 1.01 }}
              >
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none w-full focus:ring-2 focus:ring-indigo-500"
                />
                <motion.button 
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Fitness Hub. All rights reserved.</p>
          <p className="mt-2 text-sm">Made with ❤️ for fitness enthusiasts</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;