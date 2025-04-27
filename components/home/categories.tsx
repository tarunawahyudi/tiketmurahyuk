import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Plane, Train, Package, Hotel, Car } from 'lucide-react';

const categories = [
  {
    id: 'penerbangan',
    name: 'Tiket Pesawat',
    description: 'Temukan penerbangan dengan harga terbaik ke berbagai destinasi',
    icon: Plane,
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg',
  },
  {
    id: 'kereta-api',
    name: 'Tiket Kereta Api',
    description: 'Pesan tiket kereta api untuk perjalanan yang nyaman',
    icon: Train,
    image: 'https://images.pexels.com/photos/1170187/pexels-photo-1170187.jpeg',
  },
  {
    id: 'paket-wisata',
    name: 'Paket Wisata',
    description: 'Jelajahi berbagai paket wisata menarik ke destinasi favorit',
    icon: Package,
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg',
  },
  {
    id: 'hotel',
    name: 'Hotel',
    description: 'Temukan hotel dengan fasilitas terbaik untuk kenyamanan Anda',
    icon: Hotel,
    image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg',
  },
  {
    id: 'rental-kendaraan',
    name: 'Rental Kendaraan',
    description: 'Sewa kendaraan untuk menjelajahi destinasi dengan leluasa',
    icon: Car,
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
  },
];

export function Categories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Pilihan Layanan</h2>
          <p className="text-gray-600">
            Kami menyediakan berbagai layanan travel untuk memenuhi kebutuhan perjalanan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full mr-3">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Lihat Semua</span>
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}