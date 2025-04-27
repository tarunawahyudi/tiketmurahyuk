'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { CreditCard, Wallet, Building2, Tag, AlertCircle } from 'lucide-react';

// Mock data for demonstration
const cartItems = [
  {
    id: 1,
    title: 'Paket Liburan Bali 4D3N',
    price: 3500000,
    quantity: 2,
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
  },
];

const vouchers = [
  { code: 'TRAVEL10', discount: 10 },
  { code: 'LIBURAN25', discount: 25 },
  { code: 'HEMAT50', discount: 50 },
];

function formatRupiah(angka: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
}

export default function CheckoutPage() {
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState<typeof vouchers[0] | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = appliedVoucher ? (subtotal * appliedVoucher.discount / 100) : 0;
  const total = subtotal - discount;

  const handleApplyVoucher = () => {
    const voucher = vouchers.find(v => v.code === voucherCode.toUpperCase());
    if (voucher) {
      setAppliedVoucher(voucher);
      toast({
        title: 'Voucher berhasil digunakan!',
        description: `Anda mendapatkan diskon ${voucher.discount}%`,
      });
    } else {
      toast({
        title: 'Voucher tidak valid',
        description: 'Kode voucher yang Anda masukkan tidak ditemukan',
        variant: 'destructive',
      });
    }
    setVoucherCode('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Pembayaran berhasil!',
      description: 'Terima kasih telah melakukan pemesanan',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detail Pesanan</CardTitle>
                </CardHeader>
                <CardContent>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 py-4">
                      <div className="relative h-24 w-24 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        <p className="font-medium text-blue-600">{formatRupiah(item.price)}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Informasi Pemesan</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nama Depan</Label>
                        <Input id="firstName" placeholder="Masukkan nama depan" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nama Belakang</Label>
                        <Input id="lastName" placeholder="Masukkan nama belakang" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Masukkan email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input id="phone" placeholder="Masukkan nomor telepon" />
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Metode Pembayaran</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-4 rounded-lg border p-4">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="h-5 w-5 text-blue-600" />
                        <span>Kartu Kredit / Debit</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-4 rounded-lg border p-4">
                      <RadioGroupItem value="e-wallet" id="e-wallet" />
                      <Label htmlFor="e-wallet" className="flex items-center gap-2 cursor-pointer">
                        <Wallet className="h-5 w-5 text-blue-600" />
                        <span>E-Wallet (OVO, GoPay, DANA)</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-4 rounded-lg border p-4">
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                      <Label htmlFor="bank-transfer" className="flex items-center gap-2 cursor-pointer">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <span>Transfer Bank</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Order Total */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ringkasan Pembayaran</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Voucher Input */}
                    <div>
                      <Label htmlFor="voucher">Kode Voucher</Label>
                      <div className="flex gap-2 mt-1.5">
                        <Input
                          id="voucher"
                          value={voucherCode}
                          onChange={(e) => setVoucherCode(e.target.value)}
                          placeholder="Masukkan kode"
                        />
                        <Button
                          variant="outline"
                          onClick={handleApplyVoucher}
                          disabled={!voucherCode}
                        >
                          <Tag className="h-4 w-4 mr-2" />
                          Pakai
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    {/* Price Details */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>{formatRupiah(subtotal)}</span>
                      </div>
                      {appliedVoucher && (
                        <div className="flex justify-between text-green-600">
                          <span>Diskon ({appliedVoucher.discount}%)</span>
                          <span>-{formatRupiah(discount)}</span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>{formatRupiah(total)}</span>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex gap-2 text-sm text-blue-600">
                        <AlertCircle className="h-4 w-4 mt-0.5" />
                        <div>
                          <p className="font-medium">Informasi Pembayaran:</p>
                          <p>Pembayaran akan diproses secara aman menggunakan enkripsi SSL.</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      size="lg"
                      onClick={handleSubmit}
                    >
                      Bayar Sekarang
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Available Vouchers */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Voucher Tersedia</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {vouchers.map((voucher) => (
                      <div
                        key={voucher.code}
                        className="flex items-center justify-between p-2 bg-gray-50 rounded-lg text-sm"
                      >
                        <div className="font-medium">{voucher.code}</div>
                        <div className="text-green-600">Diskon {voucher.discount}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}