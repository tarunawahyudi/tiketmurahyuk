import Link from 'next/link';
import { Plane, Facebook, Instagram, Twitter, Mail, Phone, MapPin, MessageCircle, UserCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Tiket Murah Yuk</span>
            </div>
            <p className="text-gray-300 mb-4">
              Platform travel terpercaya untuk tiket pesawat, kereta api, dan paket perjalanan dengan harga terbaik.
            </p>
            <div className="flex space-x-4 content-center">
              <Link href="https://www.instagram.com/tiketmurahyuk" className="flex gap-3  text-gray-300 hover:text-blue-400">
                <Instagram className="h-5 w-5" /> 
                <span>tiketmurahyuk</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Produk</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." target='_blank' className="text-gray-300 hover:text-blue-400">
                  Tiket Pesawat
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." target='_blank' className="text-gray-300 hover:text-blue-400">
                  Tiket Kereta Api
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." target='_blank' className="text-gray-300 hover:text-blue-400">
                  Paket Wisata
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." target='_blank' className="text-gray-300 hover:text-blue-400">
                  Hotel
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/62895094141161?text=Halo%20TiketMurahYuk,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda." target='_blank' className="text-gray-300 hover:text-blue-400">
                  Rental Kendaraan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-blue-400 mt-0.5" />
                <a href="https://www.instagram.com/tiketmurahyuk" target="_blank" className="text-gray-300">@tiketmurahyuk</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                <a href="https://wa.me/62895094141161?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20Anda%21" target="_blank" className="text-gray-300">0895094141161</a>
              </li>
              <li className="flex items-start gap-3">
                <UserCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                <a href="https://www.instagram.com/putridelikaa" target="_blank" className="text-gray-300">
                  @putridelikaa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 Tiket Murah Yuk. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}