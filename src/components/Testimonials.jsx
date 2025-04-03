import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch from fake API
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .then(response => response.json())
      .then(data => {
        const formattedTestimonials = data.map(item => ({
          name: item.name.split(' ')[0],
          role: "Member",
          content: item.body,
          rating: Math.floor(Math.random() * 3) + 3 // Random rating 3-5
        }));
        setTestimonials(formattedTestimonials);
      });
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">What Our Members Say</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonials[currentIndex].content}"</p>
            <div className="flex items-center">
              <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl mr-4">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;