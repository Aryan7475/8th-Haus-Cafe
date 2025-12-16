import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-haus-green/5 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 text-haus-black">
        <Quote size={300} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-haus-black mb-4">What Our Guests Say</h2>
          <div className="flex justify-center gap-1 text-haus-gold mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} fill="currentColor" size={20} />
            ))}
          </div>
          <p className="text-gray-600">Rated 4.5+ Stars by Locals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-haus-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-haus-black text-sm">{review.author}</h4>
                  <span className="text-gray-400 text-xs">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;