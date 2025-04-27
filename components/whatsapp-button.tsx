'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhatsappButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 w-72 animate-in slide-in-from-bottom duration-300">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Butuh Bantuan?</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Tim customer service kami siap membantu Anda. Hubungi kami sekarang!
          </p>
          <a 
            href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md text-center transition-colors"
          >
            Chat WhatsApp
          </a>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "bg-green-500 hover:bg-green-600 text-white rounded-full p-3.5 shadow-lg transition-all duration-300",
          isOpen ? "rotate-180" : "rotate-0"
        )}
        aria-label="Chat WhatsApp"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}