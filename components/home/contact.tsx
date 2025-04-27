'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle, UserCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Nama harus minimal 2 karakter.',
  }),
  email: z.string().email({
    message: 'Email tidak valid.',
  }),
  phone: z.string().min(10, {
    message: 'Nomor telepon harus minimal 10 digit.',
  }),
  message: z.string().min(10, {
    message: 'Pesan harus minimal 10 karakter.',
  }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Pesan Terkirim!',
        description: 'Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.',
      });
      form.reset();
    }, 1500);
  }

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-gray-600">
            Hubungi kami untuk mendapatkan informasi lebih lanjut atau bantuan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-blue-600 text-white rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/30 p-3 rounded-full mr-4">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="https://www.instagram.com/tiketmurahyuk" target='_blank' className="text-blue-100 hover:text-white transition-colors">
                      @tiketmurahyuk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/30 p-3 rounded-full mr-4">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Whatsapp</h4>
                    <a href="https://wa.me/62895094141161?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20Anda%21
" className="text-blue-100 hover:text-white transition-colors">
                      0895094141161
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/30 p-3 rounded-full mr-4">
                    <UserCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Owner</h4>
                    <a href="https://www.instagram.com/putridelikaa" target="_blank" className="text-blue-100 hover:text-white transition-colors">@putridelikaa</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-4">Jam Operasional</h4>
                <div className="space-y-2 text-blue-100">
                  <p>Senin - Jumat: 08.00 - 18.00</p>
                  <p>Sabtu: 09.00 - 15.00</p>
                  <p>Minggu & Hari Libur: Tutup</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nama lengkap" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telepon</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan nomor telepon" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pesan</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tuliskan pesan Anda di sini..." 
                            className="min-h-[150px] resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Mengirim...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Kirim Pesan
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}