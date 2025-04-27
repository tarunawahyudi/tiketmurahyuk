'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    title: 'Traveler',
    comment: 'Pengalaman booking tiket pesawat di Tiket Murah Yuk sangat mudah dan cepat. Harga yang ditawarkan juga sangat kompetitif. Terima kasih Tiket Murah Yuk!',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    title: 'Backpacker',
    comment: 'Saya baru saja menggunakan layanan paket wisata dari Tiket Murah Yuk untuk perjalanan ke Bali, dan saya sangat puas dengan pelayanannya. Guide-nya sangat ramah dan banyak spot foto yang bagus!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    id: 3,
    name: 'Deni Wijaya',
    title: 'Business Traveler',
    comment: 'Sebagai orang yang sering traveling untuk urusan bisnis, Tiket Murah Yuk sangat membantu saya dalam booking tiket dan hotel dengan cepat dan mudah. Customer service-nya juga sangat responsive.',
    rating: 4,
    image: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg',
  },
  {
    id: 4,
    name: 'Rina Susanti',
    title: 'Family Traveler',
    comment: 'Paket liburan keluarga ke Jogja sangat memuaskan. Anak-anak saya sangat senang dengan akomodasi dan tempat wisata yang dikunjungi. Pasti akan menggunakan Tiket Murah Yuk lagi untuk liburan selanjutnya!',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimoni Pelanggan</h2>
          <p className="text-gray-600">
            Apa kata mereka yang telah menggunakan layanan Tiket Murah Yuk
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center">
                    <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                      <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      
                      <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md border-gray-200 hidden md:flex"
            onClick={prev}
            disabled={isTransitioning}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md border-gray-200 hidden md:flex"
            onClick={next}
            disabled={isTransitioning}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}