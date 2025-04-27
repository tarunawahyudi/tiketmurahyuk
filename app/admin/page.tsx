import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ShoppingBag, 
  Users, 
  CreditCard, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Package,
  Plane,
  Train
} from 'lucide-react';
import { Button } from '@/components/ui/button';

function formatRupiah(angka: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
}

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard Admin</h1>
          <p className="text-gray-500">Selamat datang kembali di panel admin Tiket Murah Yuk</p>
        </div>
        <div className="hidden md:flex space-x-2">
          <Button variant="outline">Download Laporan</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Pendapatan</CardTitle>
            <CreditCard className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatRupiah(45750000)}</div>
            <div className="flex items-center pt-1 text-xs text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+12.5% dari bulan lalu</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Pesanan</CardTitle>
            <ShoppingBag className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <div className="flex items-center pt-1 text-xs text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+8.2% dari bulan lalu</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Pengguna</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,854</div>
            <div className="flex items-center pt-1 text-xs text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+5.7% dari bulan lalu</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Konversi</CardTitle>
            <BarChart3 className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.3%</div>
            <div className="flex items-center pt-1 text-xs text-red-600">
              <TrendingDown className="h-4 w-4 mr-1" />
              <span>-1.3% dari bulan lalu</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Penjualan Berdasarkan Kategori</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <div className="w-full space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2 flex-1">
                      <Plane className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Tiket Pesawat</span>
                    </div>
                    <span className="text-sm font-medium">{formatRupiah(21250000)}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2 flex-1">
                      <Package className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium">Paket Wisata</span>
                    </div>
                    <span className="text-sm font-medium">{formatRupiah(16750000)}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2 flex-1">
                      <Train className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Tiket Kereta Api</span>
                    </div>
                    <span className="text-sm font-medium">{formatRupiah(7750000)}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pesanan Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Plane className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Tiket Pesawat Jakarta-Bali</div>
                  <div className="text-xs text-gray-500">14 Mei 2025 • Rudi Hartono</div>
                </div>
                <div className="text-sm font-medium">{formatRupiah(1250000)}</div>
              </div>

              <div className="flex items-center">
                <div className="bg-orange-100 p-2 rounded-full mr-4">
                  <Package className="h-5 w-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Paket Wisata Labuan Bajo</div>
                  <div className="text-xs text-gray-500">13 Mei 2025 • Siti Rahayu</div>
                </div>
                <div className="text-sm font-medium">{formatRupiah(6500000)}</div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Train className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Tiket Kereta Jakarta-Bandung</div>
                  <div className="text-xs text-gray-500">12 Mei 2025 • Budi Santoso</div>
                </div>
                <div className="text-sm font-medium">{formatRupiah(350000)}</div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <Package className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Paket Wisata Yogyakarta</div>
                  <div className="text-xs text-gray-500">11 Mei 2025 • Dewi Lestari</div>
                </div>
                <div className="text-sm font-medium">{formatRupiah(2750000)}</div>
              </div>
            </div>
            
            <Button variant="ghost" className="w-full mt-6">
              Lihat Semua Pesanan
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}