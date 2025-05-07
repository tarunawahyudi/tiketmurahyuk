import { Hero } from '@/components/home/hero';
import { Advantages } from '@/components/home/advantages';
import { Testimonials } from '@/components/home/testimonials';
import { Contact } from '@/components/home/contact';
import { Categories } from '@/components/home/categories';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Categories />
      <Advantages />
      <Testimonials />
      <Contact />
    </div>
  );
}