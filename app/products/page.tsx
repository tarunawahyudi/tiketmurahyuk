'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  MapPin, 
  Star, 
  FilterX,
  Filter,
  ShoppingCart
} from 'lucide-react';

// Mock data for products
const mockProducts = [
  {
    id: 1,
    title: 'Paket Liburan Bali 4D3N',
    description: 'Nikmati liburan 4 hari 3 malam di Pulau Dewata dengan akomodasi bintang 4 dan tour guide profesional.',
    location: 'Bali, Indonesia',
    price: 3500000,
    discount: 15,
    rating: 4.8,
    reviewCount: 124,
    category: 'paket-wisata',
    categoryName: 'Paket Wisata',
    available: true,
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
    featured: true,
  },
  {
    id: 2,
    title: 'Tiket Pesawat Jakarta-Yogyakarta PP',
    description: 'Promo spesial tiket pesawat Jakarta-Yogyakarta pulang pergi dengan maskapai terbaik. Berlaku untuk penerbangan ekonomi.',
    location: 'Jakarta - Yogyakarta',
    price: 1200000,
    discount: 25,
    rating: 4.5,
    reviewCount: 86,
    category: 'penerbangan',
    categoryName: 'Tiket Pesawat',
    available: true,
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
  },
  {
    id: 3,
    title: 'Paket Liburan Labuan Bajo 5D4N',
    description: 'Jelajahi keindahan Labuan Bajo dan Pulau Komodo dengan kapal pinisi selama 5 hari 4 malam.',
    location: 'Labuan Bajo, NTT',
    price: 6500000,
    discount: 10,
    rating: 4.9,
    reviewCount: 78,
    category: 'paket-wisata',
    categoryName: 'Paket Wisata',
    available: true,
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    featured: true,
  },
  {
    id: 4,
    title: 'Tiket Kereta Api Jakarta-Bandung',
    description: 'Tiket kereta api Jakarta-Bandung kelas eksekutif. Perjalanan nyaman dengan fasilitas lengkap.',
    location: 'Jakarta - Bandung',
    price: 350000,
    discount: 0,
    rating: 4.3,
    reviewCount: 45,
    category: 'kereta-api',
    categoryName: 'Tiket Kereta Api',
    available: true,
    image: 'https://images.pexels.com/photos/730134/pexels-photo-730134.jpeg',
  },
  {
    id: 5,
    title: 'Hotel Bintang 5 di Nusa Dua Bali',
    description: 'Menginap di hotel bintang 5 dengan pemandangan pantai yang indah di Nusa Dua, Bali.',
    location: 'Nusa Dua, Bali',
    price: 2500000,
    discount: 20,
    rating: 4.7,
    reviewCount: 93,
    category: 'hotel',
    categoryName: 'Hotel',
    available: true,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
  },
  {
    id: 6,
    title: 'Rental Mobil di Bali',
    description: 'Sewa mobil selama di Bali dengan sopir profesional dan berpengalaman.',
    location: 'Bali',
    price: 800000,
    discount: 5,
    rating: 4.6,
    reviewCount: 62,
    category: 'rental-kendaraan',
    categoryName: 'Rental Kendaraan',
    available: true,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
  },
  {
    id: 7,
    title: 'Paket Wisata Lombok 3D2N',
    description: 'Nikmati keindahan Lombok dengan paket wisata 3 hari 2 malam termasuk kunjungan ke Gili Trawangan.',
    location: 'Lombok, NTB',
    price: 2800000,
    discount: 12,
    rating: 4.5,
    reviewCount: 54,
    category: 'paket-wisata',
    categoryName: 'Paket Wisata',
    available: true,
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg',
  },
  {
    id: 8,
    title: 'Tiket Pesawat Jakarta-Bali PP',
    description: 'Tiket pesawat Jakarta-Bali pulang pergi dengan maskapai premium. Termasuk bagasi 20kg.',
    location: 'Jakarta - Bali',
    price: 1800000,
    discount: 15,
    rating: 4.4,
    reviewCount: 76,
    category: 'penerbangan',
    categoryName: 'Tiket Pesawat',
    available: true,
    image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg',
  },
];

// Categories for filter
const categories = [
  { id: 'penerbangan', name: 'Tiket Pesawat' },
  { id: 'kereta-api', name: 'Tiket Kereta Api' },
  { id: 'paket-wisata', name: 'Paket Wisata' },
  { id: 'hotel', name: 'Hotel' },
  { id: 'rental-kendaraan', name: 'Rental Kendaraan' },
];

function formatRupiah(angka: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
}

export default function ProductsPage() {
  // Get the category from URL param if any
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [showDiscount, setShowDiscount] = useState(false);
  const [showAvailable, setShowAvailable] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Filter products based on criteria
  const filteredProducts = mockProducts.filter(product => {
    // Search term filter
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    
    // Price range filter
    const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Discount filter
    const matchesDiscount = showDiscount ? product.discount > 0 : true;
    
    // Availability filter
    const matchesAvailability = showAvailable ? product.available === true : true;
    
    return matchesSearch && matchesCategory && matchesPriceRange && matchesDiscount && matchesAvailability;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero section with search */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Temukan Perjalanan Impian Anda</h1>
          <p className="text-blue-100 mb-8 max-w-2xl">
            Pilih dari berbagai pilihan tiket pesawat, kereta api, paket wisata, hotel, dan rental kendaraan dengan harga terbaik.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Cari destinasi, hotel, tiket..."
                  className="pl-10 h-12 bg-white text-gray-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Button className="h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white">
              Cari
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter section - desktop */}
          <div className="hidden md:block w-full md:w-64 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">Kategori</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategory === category.id}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategory(category.id);
                          } else {
                            setSelectedCategory(null);
                          }
                        }}
                      />
                      <Label
                        htmlFor={`category-${category.id}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">Harga</h3>
                <div className="space-y-6">
                  <Slider
                    defaultValue={[0, 10000000]}
                    max={10000000}
                    step={500000}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                  />
                  <div className="flex justify-between">
                    <div className="text-sm font-medium">
                      {formatRupiah(priceRange[0])}
                    </div>
                    <div className="text-sm font-medium">
                      {formatRupiah(priceRange[1])}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">Ketersediaan</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox
                      id="available-only"
                      checked={showAvailable}
                      onCheckedChange={(checked) => setShowAvailable(checked as boolean)}
                    />
                    <Label
                      htmlFor="available-only"
                      className="ml-2 text-sm font-medium leading-none"
                    >
                      Hanya tampilkan yang tersedia
                    </Label>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">Promo</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox
                      id="discount-only"
                      checked={showDiscount}
                      onCheckedChange={(checked) => setShowDiscount(checked as boolean)}
                    />
                    <Label
                      htmlFor="discount-only"
                      className="ml-2 text-sm font-medium leading-none"
                    >
                      Hanya tampilkan yang ada diskon
                    </Label>
                  </div>
                </div>
              </div>
              
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                  setPriceRange([0, 10000000]);
                  setShowDiscount(false);
                  setShowAvailable(true);
                }}
              >
                <FilterX className="h-4 w-4" />
                <span>Reset Filter</span>
              </Button>
            </div>
          </div>
          
          {/* Mobile filter button */}
          <div className="md:hidden sticky top-16 z-10 bg-white shadow-sm p-3 -mx-4 mb-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-between"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <span>Filter</span>
              </div>
              <ChevronRight className={`h-4 w-4 transform transition-transform ${isMobileFilterOpen ? 'rotate-90' : ''}`} />
            </Button>
            
            {isMobileFilterOpen && (
              <div className="mt-4 bg-white rounded-lg p-4 border space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Kategori</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox
                          id={`mobile-category-${category.id}`}
                          checked={selectedCategory === category.id}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedCategory(category.id);
                            } else {
                              setSelectedCategory(null);
                            }
                          }}
                        />
                        <Label
                          htmlFor={`mobile-category-${category.id}`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg mb-4">Harga</h3>
                  <div className="space-y-6">
                    <Slider
                      defaultValue={[0, 10000000]}
                      max={10000000}
                      step={500000}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                    <div className="flex justify-between">
                      <div className="text-sm font-medium">
                        {formatRupiah(priceRange[0])}
                      </div>
                      <div className="text-sm font-medium">
                        {formatRupiah(priceRange[1])}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg mb-4">Opsi Lainnya</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="mobile-available-only"
                        checked={showAvailable}
                        onCheckedChange={(checked) => setShowAvailable(checked as boolean)}
                      />
                      <Label
                        htmlFor="mobile-available-only"
                        className="ml-2 text-sm font-medium leading-none"
                      >
                        Hanya tampilkan yang tersedia
                      </Label>
                    </div>
                    
                    <div className="flex items-center">
                      <Checkbox
                        id="mobile-discount-only"
                        checked={showDiscount}
                        onCheckedChange={(checked) => setShowDiscount(checked as boolean)}
                      />
                      <Label
                        htmlFor="mobile-discount-only"
                        className="ml-2 text-sm font-medium leading-none"
                      >
                        Hanya tampilkan yang ada diskon
                      </Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory(null);
                      setPriceRange([0, 10000000]);
                      setShowDiscount(false);
                      setShowAvailable(true);
                    }}
                  >
                    Reset
                  </Button>
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => setIsMobileFilterOpen(false)}
                  >
                    Terapkan
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Product listing */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                {selectedCategory 
                  ? `${categories.find(c => c.id === selectedCategory)?.name || 'Produk'} (${filteredProducts.length})` 
                  : `Semua Produk (${filteredProducts.length})`}
              </h2>
              
              <div className="hidden md:block">
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Urut berdasarkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Rekomendasi</SelectItem>
                    <SelectItem value="price-low">Harga Terendah</SelectItem>
                    <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                    <SelectItem value="discount">Diskon Terbesar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tidak Ada Produk</h3>
                <p className="text-gray-500 mb-4">
                  Tidak ada produk yang sesuai dengan kriteria pencarian Anda.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                    setPriceRange([0, 10000000]);
                    setShowDiscount(false);
                    setShowAvailable(true);
                  }}
                >
                  Hapus Filter
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const discountedPrice = product.price - (product.price * product.discount / 100);
                  
                  return (
                    <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
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
                        {product.featured && (
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-blue-600 hover:bg-blue-700">
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                      
                      <CardContent className="p-5">
                        <Link href={`/products/${product.id}`}>
                          <h3 className="font-semibold mb-2 text-lg hover:text-blue-600 transition-colors">
                            {product.title}
                          </h3>
                        </Link>
                        
                        <div className="flex items-center text-gray-500 mb-2 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{product.location}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-500 mb-3 text-sm">
                          <Badge variant="outline" className="bg-gray-50">
                            {product.categoryName}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-medium ml-1">{product.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500 ml-1">
                            ({product.reviewCount} ulasan)
                          </span>
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
                          
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/products/${product.id}`}>Detail</Link>
                            </Button>
                            <Button 
                              className="bg-blue-600 hover:bg-blue-700"
                              size="sm"
                            >
                              <ShoppingCart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
            
            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}