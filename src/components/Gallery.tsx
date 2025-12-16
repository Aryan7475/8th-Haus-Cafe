import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold text-haus-black mb-2">The Gallery</h2>
            <p className="text-gray-500">A glimpse into the haus.</p>
          </div>
          <a 
            href="https://www.instagram.com/8thhauscafe?igshid=NTc4MTIwNjQ2YQ%3D%3D" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 text-haus-gold font-bold hover:underline"
          >
            <Instagram size={20} />
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className={`relative group overflow-hidden rounded-xl ${index === 1 || index === 4 ? 'row-span-2' : 'h-64 md:h-80'}`}>
              <img 
                src={img} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <a 
            href="https://www.instagram.com/8thhauscafe?igshid=NTc4MTIwNjQ2YQ%3D%3D"
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-haus-gold font-bold"
          >
            <Instagram size={20} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;