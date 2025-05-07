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

export const SearchForm = () => {
    const [activeTab, setActiveTab] = useState('flight');

    return (
        <div className="container mx-auto px-4 relative z-10 -mt-20">
            <div className="bg-white rounded-xl shadow-xl p-6">
                <Tabs defaultValue="flight" onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-4 md:grid-cols-4 mb-6">
                        <TabsTrigger value="flight" className="flex items-center gap-2">
                            <Plane className="h-4 w-4"/>
                            <span>Pesawat</span>
                        </TabsTrigger>
                        <TabsTrigger value="train" className="flex items-center gap-2">
                            <Train className="h-4 w-4"/>
                            <span>Kereta</span>
                        </TabsTrigger>
                        <TabsTrigger value="package" className="flex items-center gap-2">
                            <Package className="h-4 w-4"/>
                            <span>Paket</span>
                        </TabsTrigger>
                        <TabsTrigger value="hotel" className="flex items-center gap-2">
                            <Hotel className="h-4 w-4"/>
                            <span>Hotel</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="flight">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="departure">Dari</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="departure" placeholder="Jakarta" className="pl-9"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="arrival">Ke</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="arrival" placeholder="Bali" className="pl-9"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="date">Tanggal</Label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="date" type="date" className="pl-9"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="passengers">Penumpang</Label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Select>
                                        <SelectTrigger className="pl-9">
                                            <SelectValue placeholder="1 Dewasa"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">1 Dewasa</SelectItem>
                                            <SelectItem value="2">2 Dewasa</SelectItem>
                                            <SelectItem value="3">3 Dewasa</SelectItem>
                                            <SelectItem value="4">4 Dewasa</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <Button className="mt-6 w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                            <Search className="mr-2 h-4 w-4"/> Cari Penerbangan
                        </Button>
                    </TabsContent>

                    <TabsContent value="train">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="train-departure">Dari</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="train-departure" placeholder="Jakarta" className="pl-9"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="train-arrival">Ke</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="train-arrival" placeholder="Bandung" className="pl-9"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="train-date">Tanggal</Label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="train-date" type="date" className="pl-9"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="train-passengers">Penumpang</Label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Select>
                                        <SelectTrigger className="pl-9">
                                            <SelectValue placeholder="1 Dewasa"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">1 Dewasa</SelectItem>
                                            <SelectItem value="2">2 Dewasa</SelectItem>
                                            <SelectItem value="3">3 Dewasa</SelectItem>
                                            <SelectItem value="4">4 Dewasa</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <Button className="mt-6 w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                            <Search className="mr-2 h-4 w-4"/> Cari Kereta
                        </Button>
                    </TabsContent>

                    <TabsContent value="package">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="destination">Tujuan</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="destination" placeholder="Bali, Lombok, Raja Ampat..." className="pl-9"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="package-date">Tanggal</Label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="package-date" type="date" className="pl-9"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="package-duration">Durasi</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih durasi"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="2-3">2-3 hari</SelectItem>
                                        <SelectItem value="4-5">4-5 hari</SelectItem>
                                        <SelectItem value="6-7">6-7 hari</SelectItem>
                                        <SelectItem value="8+">8+ hari</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <Button className="mt-6 w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                            <Search className="mr-2 h-4 w-4"/> Cari Paket
                        </Button>
                    </TabsContent>

                    <TabsContent value="hotel">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-2 lg:col-span-2">
                                <Label htmlFor="hotel-location">Lokasi</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="hotel-location" placeholder="Masukkan kota, area, atau nama hotel"
                                           className="pl-9"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="check-in">Check-in</Label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="check-in" type="date" className="pl-9"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="check-out">Check-out</Label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500"/>
                                    <Input id="check-out" type="date" className="pl-9"/>
                                </div>
                            </div>
                        </div>
                        <Button className="mt-6 w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                            <Search className="mr-2 h-4 w-4"/> Cari Hotel
                        </Button>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
