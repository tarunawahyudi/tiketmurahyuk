import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Tag } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Paket Liburan Bali 4D3N',
    description: 'Nikmati liburan 4 hari 3 malam di Pulau Dewata dengan akomodasi bintang 4 dan tour guide profesional.',
    location: 'Bali, Indonesia',
    duration: '4 hari 3 malam',
    price: 3500000,
    discount: 15,
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
  },
  {
    id: 2,
    title: 'Tiket Pesawat Jakarta-Yogyakarta PP',
    description: 'Promo spesial tiket pesawat Jakarta-Yogyakarta pulang pergi dengan maskapai terbaik.',
    location: 'Jakarta - Yogyakarta',
    duration: 'Flexible',
    price: 1200000,
    discount: 25,
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
  },
  {
    id: 3,
    title: 'Paket Liburan Labuan Bajo 5D4N',
    description: 'Jelajahi keindahan Labuan Bajo dan Pulau Komodo dengan kapal pinisi selama 5 hari 4 malam.',
    location: 'Labuan Bajo, NTT',
    duration: '5 hari 4 malam',
    price: 6500000,
    discount: 10,
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
  },
];

function formatRupiah(angka: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
}

export function Offers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Penawaran Menarik</h2>
          <p className="text-gray-600">
            Nikmati berbagai penawaran menarik dengan diskon khusus untuk perjalanan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => {
            const discountedPrice = offer.price - (offer.price * offer.discount / 100);
            
            return (
              <div 
                key={offer.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-60">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-blue-600 hover:bg-blue-700">
                      Diskon {offer.discount}%
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  
                  <div className="flex items-center text-gray-500 mb-1 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{offer.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 mb-3 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{offer.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-5 text-sm line-clamp-2">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center mb-1">
                        <Tag className="h-4 w-4 text-red-500 mr-1" />
                        <span className="text-red-500 text-sm line-through">
                          {formatRupiah(offer.price)}
                        </span>
                      </div>
                      <div className="text-xl font-bold text-blue-600">
                        {formatRupiah(discountedPrice)}
                      </div>
                    </div>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Pesan
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Lihat Semua Penawaran
          </Button>
        </div>
      </div>
    </section>
  );
}