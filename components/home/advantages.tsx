import { Award, CreditCard, Clock, Lock, Settings, Headset as HeadsetMic } from 'lucide-react';

const advantages = [
  {
    title: 'Harga Terbaik',
    description: 'Kami menawarkan harga yang kompetitif dan terjangkau untuk semua layanan perjalanan.',
    icon: Award,
  },
  {
    title: 'Pembayaran Aman',
    description: 'Nikmati keamanan bertransaksi dengan sistem pembayaran yang aman dan terpercaya.',
    icon: CreditCard,
  },
  {
    title: 'Booking Cepat',
    description: 'Proses pemesanan yang cepat dan mudah melalui platform kami.',
    icon: Clock,
  },
  {
    title: 'Keamanan Data',
    description: 'Privasi dan keamanan data Anda adalah prioritas utama kami.',
    icon: Lock,
  },
  {
    title: 'Pilihan Fleksibel',
    description: 'Berbagai pilihan paket dan layanan yang dapat disesuaikan dengan kebutuhan Anda.',
    icon: Settings,
  },
  {
    title: 'Dukungan 24/7',
    description: 'Tim dukungan pelanggan kami siap membantu Anda 24 jam sehari, 7 hari seminggu.',
    icon: HeadsetMic,
  },
];

export function Advantages() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Kenapa Memilih Kami?</h2>
          <p className="text-gray-600">
            Tiket Murah Yuk menyediakan layanan perjalanan terbaik untuk memenuhi kebutuhan perjalanan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <advantage.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}