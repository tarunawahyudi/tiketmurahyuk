import { Hero } from '@/components/home/hero';
import { Vision } from '@/components/home/vision';
import { Offers } from '@/components/home/offers';
import { Advantages } from '@/components/home/advantages';
import { Testimonials } from '@/components/home/testimonials';
import { Contact } from '@/components/home/contact';
import { Categories } from '@/components/home/categories';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Vision />
      <Categories />
      <Offers />
      <Advantages />
      <Testimonials />
      <Contact />
    </div>
  );
}