import { Target, Shield, Users } from 'lucide-react';

export function Vision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Visi & Misi Kami</h2>
          <p className="text-gray-600">
            Tiket Murah Yuk berkomitmen untuk memberikan pengalaman perjalanan terbaik dengan harga yang terjangkau bagi seluruh masyarakat Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Visi</h3>
            <p className="text-gray-600">
              Menjadi platform perjalanan terpercaya yang menghubungkan setiap sudut keindahan Indonesia dengan dunia.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Misi</h3>
            <p className="text-gray-600">
              Menyediakan layanan perjalanan berkualitas dengan harga terbaik, didukung teknologi modern dan layanan pelanggan yang unggul.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Nilai</h3>
            <p className="text-gray-600">
              Integritas, transparansi, inovasi, dan fokus pada kepuasan pelanggan dalam setiap aspek layanan kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}