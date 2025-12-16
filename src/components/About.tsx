import React from 'react';
import { Clock, MapPin, Utensils } from 'lucide-react';
import { CAFE_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-haus-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="font-serif text-4xl font-bold text-haus-black">
              More Than Just <span className="text-haus-gold">Breakfast</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {CAFE_INFO.description} We believe that food brings people together. That's why we've created a space that feels like a home away from home, where every dish is prepared with passion and every cup of coffee is brewed to perfection.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="p-3 bg-white rounded-full shadow-sm mb-3 text-haus-gold">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900">Open Daily</h3>
                <p className="text-sm text-gray-500">8:00 AM - 3:00 PM</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="p-3 bg-white rounded-full shadow-sm mb-3 text-haus-gold">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900">Fresh Food</h3>
                <p className="text-sm text-gray-500">Locally Sourced</p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="p-3 bg-white rounded-full shadow-sm mb-3 text-haus-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900">Anaheim</h3>
                <p className="text-sm text-gray-500">Lincoln Ave</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <img 
              src="https://picsum.photos/id/42/400/600" 
              alt="Waitress pouring coffee" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
            />
            <img 
              src="https://picsum.photos/id/225/400/600" 
              alt="Avocado toast detail" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;