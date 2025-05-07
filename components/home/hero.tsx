'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plane, Train, Package, Hotel, Calendar, Search, Users, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Hero() {
  const [activeTab, setActiveTab] = useState('flight');

  return (
    <section className="relative">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg"
          alt="Pemandangan Pantai Indonesia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-40 relative z-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 max-w-5xl">
  <div className="flex-1">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
      Jelajahi Keindahan Indonesia Bersama Tiket Murah Yuk
    </h1>
    <p className="text-xl text-white/90 mb-8">
      Temukan pengalaman perjalanan terbaik dengan harga spesial. Pesan tiket pesawat, kereta api, dan paket wisata sekarang!
    </p>
    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
      Mulai Perjalanan
    </Button>
  </div>
    <div className="flex-shrink-0 ml-auto justify-center mx-auto">
        <Image
          src="/logo.png"
          alt="Logo"
          width={350}
          height={350}
          className="object-contain"
        />
      </div>
      </div>

      </div>

    </section>
  );
}