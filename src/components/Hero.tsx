import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/431/1920/1080" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="block text-haus-gold font-sans font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-fade-in-up">
          Welcome to Anaheim's Finest
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-tight animate-fade-in-up delay-100">
          Brunch at <br/> <span className="italic text-haus-gold">8th Haus</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-sans font-light animate-fade-in-up delay-200">
          Experience the comfort of home with a modern twist. From our signature Ube Pancakes to artisanal coffee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a 
            href="#menu" 
            onClick={(e) => handleNavClick(e, '#menu')}
            className="group px-8 py-4 bg-haus-gold text-white font-bold rounded-full hover:bg-white hover:text-haus-black transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Menu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-haus-black transition-all duration-300"
          >
            Find Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;