'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Star, 
  MapPin, 
  Clock, 
  Calendar, 
  Users, 
  ThumbsUp, 
  Shield, 
  Heart, 
  Share2, 
  ShoppingCart, 
  ChevronLeft,
  Plus,
  Minus
} from 'lucide-react';

// Mock product data
const product = {
  id: 3,
  title: 'Paket Liburan Labuan Bajo 5D4N',
  description: 'Jelajahi keindahan Labuan Bajo dan Pulau Komodo dengan kapal pinisi selama 5 hari 4 malam. Paket ini mencakup akomodasi, transportasi, makan 3x sehari, dan pemandu wisata profesional.',
  longDescription: `
    <p>Labuan Bajo, pintu gerbang menuju Taman Nasional Komodo yang menakjubkan, menawarkan keindahan alam yang luar biasa. Dengan paket 5 hari 4 malam ini, Anda akan menjelajahi keajaiban alam Labuan Bajo dan sekitarnya dengan nyaman dan aman.</p>
    
    <p>Paket ini mencakup:</p>
    <ul>
      <li>Akomodasi 4 malam di kapal pinisi tradisional</li>
      <li>Makan 3x sehari (menu Indonesia dan internasional)</li>
      <li>Pemandu wisata profesional dan berpengalaman</li>
      <li>Tiket masuk ke Taman Nasional Komodo</li>
      <li>Peralatan snorkeling</li>
      <li>Air mineral selama perjalanan</li>
      <li>Transportasi dari/ke bandara</li>
    </ul>
    
    <p>Destinasi utama yang akan dikunjungi:</p>
    <ul>
      <li>Pulau Komodo - Melihat komodo langsung di habitat aslinya</li>
      <li>Pulau Padar - Trekking untuk menikmati pemandangan spektakuler</li>
      <li>Pink Beach - Pantai dengan pasir merah muda yang unik</li>
      <li>Manta Point - Berenang bersama ikan pari manta</li>
      <li>Pulau Kelor - Trekking dan snorkeling</li>
      <li>Pulau Rinca - Habitat komodo lainnya</li>
      <li>Pulau Kanawa - Snorkeling dengan pemandangan bawah laut yang menakjubkan</li>
    </ul>
  `,
  itinerary: [
    {
      day: 'Hari 1',
      title: 'Kedatangan di Labuan Bajo',
      activities: [
        'Tiba di Bandara Komodo, Labuan Bajo',
        'Transfer ke pelabuhan dan check-in ke kapal pinisi',
        'Santap siang di kapal',
        'Menuju Pulau Kelor untuk trekking dan menikmati sunset',
        'Santap malam dan bermalam di kapal'
      ]
    },
    {
      day: 'Hari 2',
      title: 'Pulau Rinca dan Pulau Kalong',
      activities: [
        'Sarapan di kapal',
        'Mengunjungi Pulau Rinca untuk melihat komodo',
        'Santap siang di kapal',
        'Snorkeling di Pulau Kambing',
        'Menuju Pulau Kalong untuk menyaksikan kelelawar terbang saat sunset',
        'Santap malam dan bermalam di kapal'
      ]
    },
    {
      day: 'Hari 3',
      title: 'Pulau Padar dan Pink Beach',
      activities: [
        'Sarapan di kapal',
        'Trekking di Pulau Padar untuk menikmati pemandangan spektakuler',
        'Santap siang di kapal',
        'Berenang dan bersantai di Pink Beach',
        'Snorkeling di terumbu karang sekitar Pink Beach',
        'Santap malam dan bermalam di kapal'
      ]
    },
    {
      day: 'Hari 4',
      title: 'Pulau Komodo dan Manta Point',
      activities: [
        'Sarapan di kapal',
        'Mengunjungi Pulau Komodo untuk trekking dan melihat komodo',
        'Santap siang di kapal',
        'Snorkeling di Manta Point untuk berenang bersama ikan pari manta',
        'Menuju Pulau Kanawa untuk menikmati sunset',
        'Santap malam dan bermalam di kapal'
      ]
    },
    {
      day: 'Hari 5',
      title: 'Pulau Kanawa dan Kembali ke Labuan Bajo',
      activities: [
        'Sarapan di kapal',
        'Snorkeling terakhir di Pulau Kanawa',
        'Kembali ke Labuan Bajo',
        'Transfer ke bandara atau hotel jika ingin memperpanjang masa tinggal'
      ]
    }
  ],
  faqs: [
    {
      question: 'Apa yang harus dibawa untuk perjalanan ini?',
      answer: 'Anda disarankan membawa: pakaian ringan, baju renang, topi, kacamata hitam, tabir surya, obat-obatan pribadi, kamera, dan uang tunai secukupnya.'
    },
    {
      question: 'Apakah ada batasan umur untuk paket wisata ini?',
      answer: 'Paket ini cocok untuk segala usia, namun untuk trekking di Pulau Padar disarankan untuk peserta berumur di atas 12 tahun dan memiliki kondisi fisik yang baik.'
    },
    {
      question: 'Bagaimana kondisi kapal pinisi yang digunakan?',
      answer: 'Kapal pinisi yang digunakan memiliki standar kenyamanan yang baik dengan kabin ber-AC, kamar mandi dalam, area berjemur, dan ruang makan.'
    },
    {
      question: 'Apakah ada jaringan seluler selama perjalanan?',
      answer: 'Jaringan seluler hanya tersedia di beberapa titik, terutama saat mendekati pulau-pulau utama. Kami menyarankan untuk menikmati waktu offline Anda.'
    },
    {
      question: 'Apakah makanan sudah termasuk?',
      answer: 'Ya, 3 kali makan sehari sudah termasuk dengan menu Indonesia dan internasional. Kami juga bisa menyediakan opsi vegetarian jika diminta sebelumnya.'
    }
  ],
  location: 'Labuan Bajo, NTT',
  duration: '5 hari 4 malam',
  price: 6500000,
  discount: 10,
  rating: 4.9,
  reviewCount: 78,
  category: 'paket-wisata',
  categoryName: 'Paket Wisata',
  available: true,
  images: [
    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg',
    'https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg',
    'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
    'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg'
  ],
  availability: [
    { date: '2025-06-10', available: true },
    { date: '2025-06-17', available: true },
    { date: '2025-06-24', available: true },
    { date: '2025-07-01', available: true },
    { date: '2025-07-08', available: true },
    { date: '2025-07-15', available: false },
  ]
};

// Mock related products
const relatedProducts = [
  {
    id: 1,
    title: 'Paket Liburan Bali 4D3N',
    location: 'Bali, Indonesia',
    price: 3500000,
    discount: 15,
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
  },
  {
    id: 7,
    title: 'Paket Wisata Lombok 3D2N',
    location: 'Lombok, NTB',
    price: 2800000,
    discount: 12,
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg',
  },
  {
    id: 9,
    title: 'Paket Wisata Raja Ampat 6D5N',
    location: 'Raja Ampat, Papua Barat',
    price: 8500000,
    discount: 8,
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
  }
];

// Mock reviews
const reviews = [
  {
    id: 1,
    name: 'Budi Santoso',
    date: '15 April 2025',
    rating: 5,
    comment: 'Pengalaman luar biasa! Pemandu wisata sangat ramah dan profesional. Makanan di kapal enak dan bersih. Sangat merekomendasikan paket tour ini untuk menikmati keindahan Labuan Bajo.',
    helpful: 12
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    date: '3 April 2025',
    rating: 5,
    comment: 'Paket wisata terbaik yang pernah saya ikuti. Seluruh rangkaian perjalanan sangat teratur, pemandangan luar biasa indah, dan bertemu langsung dengan komodo adalah pengalaman tak terlupakan!',
    helpful: 8
  },
  {
    id: 3,
    name: 'Agus Wijaya',
    date: '28 Maret 2025',
    rating: 4,
    comment: 'Secara keseluruhan sangat memuaskan. Satu-satunya yang kurang adalah waktu snorkeling yang saya rasa terlalu singkat. Tapi pemandangan dan keramahan kru kapal membuat perjalanan ini sangat menyenangkan.',
    helpful: 5
  }
];

function formatRupiah(angka: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  
  const discountedPrice = product.price - (product.price * product.discount / 100);
  const totalPrice = discountedPrice * quantity;
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <Link href="/" className="text-gray-500 hover:text-blue-600">
            Beranda
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/products" className="text-gray-500 hover:text-blue-600">
            Semua Produk
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href={`/products?category=${product.category}`} className="text-gray-500 hover:text-blue-600">
            {product.categoryName}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">
            {product.title}
          </span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <div className="relative w-full h-96 rounded-lg overflow-hidden mb-4">
                <Image
                  src={mainImage}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-base px-3 py-1">
                      {product.discount}% OFF
                    </Badge>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                      mainImage === image ? 'border-blue-600' : 'border-transparent'
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} - gambar ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Badge variant="outline" className="mr-2">
                    {product.categoryName}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({product.reviewCount} ulasan)
                    </span>
                  </div>
                </div>
                
                <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{product.location}</span>
                </div>
                
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{product.duration}</span>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {product.description}
                </p>
              </div>
              
              <div className="mb-6 pb-6 border-b">
                {product.discount > 0 ? (
                  <div className="flex items-center mb-2">
                    <span className="text-gray-400 text-lg line-through mr-2">
                      {formatRupiah(product.price)}
                    </span>
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      Hemat {formatRupiah(product.price * product.discount / 100)}
                    </Badge>
                  </div>
                ) : null}
                
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {formatRupiah(discountedPrice)}
                  <span className="text-sm font-normal text-gray-500"> / orang</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="h-10 w-10 rounded-none"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <div className="w-12 text-center">{quantity}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={incrementQuantity}
                      className="h-10 w-10 rounded-none"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="ml-4 text-sm text-gray-500">
                    Jumlah Peserta
                  </span>
                </div>
                
                <div className="font-semibold mb-6">
                  Total: {formatRupiah(totalPrice)}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 flex-1"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Tambahkan ke Keranjang
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className={isLiked ? "text-red-500 border-red-500" : ""}
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500" : ""}`} />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Pembayaran Aman</h4>
                    <p className="text-sm text-gray-500">
                      Sistem pembayaran aman dengan berbagai metode pembayaran
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Jaminan Keamanan</h4>
                    <p className="text-sm text-gray-500">
                      Perlindungan asuransi perjalanan untuk semua peserta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="p-6 border-t">
            <Tabs defaultValue="details">
              <TabsList className="mb-6">
                <TabsTrigger value="details">Detail Paket</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="reviews">Ulasan ({reviews.length})</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details">
                <div className="prose max-w-none prose-blue prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700" dangerouslySetInnerHTML={{ __html: product.longDescription }} />
              </TabsContent>
              
              <TabsContent value="itinerary">
                <div className="space-y-6">
                  {product.itinerary.map((day, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 flex items-center">
                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                          <Calendar className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-500">{day.day}</div>
                          <div className="text-lg font-semibold">{day.title}</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <ol className="space-y-3">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-center">
                              <div className="bg-blue-100 text-blue-600 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                                {actIndex + 1}
                              </div>
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-4 rounded-lg text-center">
                      <div className="text-4xl font-bold text-blue-600">{product.rating}</div>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400' : ''}`} />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{product.reviewCount} ulasan</div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 gap-2">
                      {[5, 4, 3, 2, 1].map((star) => {
                        const percentage = star === 5 ? 85 : star === 4 ? 12 : star === 3 ? 3 : 0;
                        return (
                          <div key={star} className="flex items-center text-sm">
                            <div className="w-4 mr-2">{star}</div>
                            <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400 mr-2" />
                            <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                            </div>
                            <div className="text-gray-500 w-8 text-right">{percentage}%</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                        <div className="flex justify-between mb-3">
                          <div className="font-semibold">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                        <div className="flex text-yellow-400 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400' : ''}`} />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-3">{review.comment}</p>
                        <button className="text-sm flex items-center text-gray-500 hover:text-blue-600">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Membantu ({review.helpful})
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="faqs">
                <Accordion type="single" collapsible className="w-full">
                  {product.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-gray-900">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Paket Wisata Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => {
              const discountedPrice = product.price - (product.price * product.discount / 100);
              
              return (
                <div 
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    {product.discount > 0 && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-orange-500 hover:bg-orange-600">
                          {product.discount}% OFF
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-semibold mb-2 hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center text-gray-500 mb-3 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{product.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        {product.discount > 0 && (
                          <div className="flex items-center mb-1">
                            <span className="text-gray-400 text-sm line-through">
                              {formatRupiah(product.price)}
                            </span>
                          </div>
                        )}
                        <div className="text-lg font-bold text-blue-600">
                          {formatRupiah(discountedPrice)}
                        </div>
                      </div>
                      
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700"
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}