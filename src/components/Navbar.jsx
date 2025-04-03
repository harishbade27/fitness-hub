import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setMobileMenuOpen(false);
      
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
        setActiveLink(sectionId);
      }, 300);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'pricing', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: '100%', 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 }
  };

  const navItemVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.span 
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              FITNESS HUB
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {['home', 'about', 'services', 'pricing', 'testimonials', 'contact'].map((link) => (
              <motion.div
                key={link}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <button
                  onClick={() => scrollToSection(link)}
                  className={`px-3 py-2 rounded-md text-sm font-medium relative ${
                    activeLink === link
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                  {activeLink === link && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}

            <motion.button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-600"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <FiSun className="w-5 h-5 text-yellow-400" /> : <FiMoon className="w-5 h-5 text-indigo-600" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-gray-700 dark:text-gray-300 z-50"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiMenu className="w-6 h-6" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Modal with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              key="mobileMenu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 z-50 w-3/4 bg-white dark:bg-gray-800 shadow-xl p-6 overflow-y-auto"
            >
              <div className="flex justify-end mb-8">
                <motion.button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="flex flex-col space-y-6">
                {['home', 'about', 'services', 'pricing', 'testimonials', 'contact'].map((link) => (
                  <motion.div
                    key={link}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => scrollToSection(link)}
                      className={`w-full text-lg px-4 py-3 rounded-lg text-left ${
                        activeLink === link
                          ? 'bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </button>
                  </motion.div>
                ))}

                <div className="mt-8">
                  <motion.button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-full flex items-center justify-center p-3 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-200 hover:bg-indigo-100 dark:hover:bg-gray-600"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {darkMode ? (
                      <>
                        <FiSun className="w-5 h-5 text-yellow-400 mr-2" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <FiMoon className="w-5 h-5 text-indigo-600 mr-2" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;