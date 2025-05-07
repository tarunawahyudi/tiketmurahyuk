'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Menu, 
  X, 
  Search, 
  Plane, 
  Train, 
  Package, 
  Hotel, 
  Car, 
  User
} from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">Tiket Murah Yuk <br/><span className='text-sm text-slate-600'>by Delika Travel</span> </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
            target='_blank'
            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <Plane className="h-4 w-4" />
            <span>Penerbangan</span>
          </Link>
          <Link 
            href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
            target='_blank'
            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <Train className="h-4 w-4" />
            <span>Kereta Api</span>
          </Link>
          <Link 
            href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
            target='_blank'
            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <Package className="h-4 w-4" />
            <span>Paket Wisata</span>
          </Link>
          <Link 
            href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
            target='_blank'
            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <Hotel className="h-4 w-4" />
            <span>Hotel</span>
          </Link>
          <Link 
            href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
            target='_blank'
            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <Car className="h-4 w-4" />
            <span>Rental Kendaraan</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <Link 
                href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
                target='_blank'
                className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Plane className="h-5 w-5" />
                <span>Penerbangan</span>
              </Link>
              <Link 
                href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
                target='_blank'
                className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Train className="h-5 w-5" />
                <span>Kereta Api</span>
              </Link>
              <Link 
                href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
                target='_blank'
                className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Package className="h-5 w-5" />
                <span>Paket Wisata</span>
              </Link>
              <Link 
                href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
                target='_blank'
                className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Hotel className="h-5 w-5" />
                <span>Hotel</span>
              </Link>
              <Link 
                href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." 
                target='_blank'
                className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Car className="h-5 w-5" />
                <span>Rental Kendaraan</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}