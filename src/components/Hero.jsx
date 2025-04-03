import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Body, <span className="text-yellow-300">Transform Your Life</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Join our community and achieve your fitness goals with our expert trainers and state-of-the-art facilities.
          </p>
          <div className="flex space-x-4">
            <Link to="pricing" smooth={true} duration={500} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
              Join Now
            </Link>
            <Link to="about" smooth={true} duration={500} className="border-2 border-white hover:bg-white hover:text-indigo-600 font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Fitness" 
            className="rounded-lg shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;