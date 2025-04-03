const About = () => {
    return (
      <section id="about" className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Our Gym</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Gym Interior" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Why Choose Us?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Fitness Hub, we're dedicated to helping you achieve your fitness goals in a supportive and motivating environment. 
                Our state-of-the-art facility is equipped with the latest equipment and staffed by certified trainers who are passionate 
                about your success.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">Certified Trainers</h4>
                    <p className="text-gray-600 dark:text-gray-400">Our trainers are certified professionals with years of experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">Modern Equipment</h4>
                    <p className="text-gray-600 dark:text-gray-400">We regularly update our equipment to provide the best workout experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">Flexible Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400">Open 24/7 to accommodate your busy schedule.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;