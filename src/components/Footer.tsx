import React from 'react';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-haus-black border-t border-gray-800 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center gap-2 mb-6 text-white font-serif text-2xl font-bold">
          <Coffee className="text-haus-gold" />
          <span>8th Haus</span>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.instagram.com/8thhauscafe?igshid=NTc4MTIwNjQ2YQ%3D%3D" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-haus-gold transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-haus-gold transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-haus-gold transition-colors">
            <Twitter size={24} />
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} 8th Haus Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;