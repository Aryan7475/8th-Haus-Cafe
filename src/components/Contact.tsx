import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { CAFE_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-haus-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl font-bold mb-6">Visit Us</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              We are located in the heart of Anaheim. Whether you're a local or just visiting Disney, stop by for a memorable meal.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-haus-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p className="text-gray-300">{CAFE_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-haus-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Hours</h3>
                  <p className="text-gray-300">{CAFE_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-haus-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Contact</h3>
                  <p className="text-gray-300">{CAFE_INFO.phone}</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir//8th+Haus+Cafe+656+S+Brookhurst+St+Anaheim,+CA+92804"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-haus-gold text-white rounded-lg font-bold hover:bg-white hover:text-haus-black transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Map */}
          <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <iframe 
              src={CAFE_INFO.mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="8th Haus Cafe Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;