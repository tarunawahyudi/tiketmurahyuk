'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Checkbox } from '@/components/ui/checkbox';
import { Plane, Lock, KeyRound, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email({
    message: 'Email tidak valid.',
  }),
  password: z.string().min(6, {
    message: 'Password harus minimal 6 karakter.',
  }),
  rememberMe: z.boolean().default(false),
});

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    // Simulate API call for authentication
    setTimeout(() => {
      setIsLoading(false);
      // Mock admin login for demo purposes
      if (values.email === 'admin@tiketmurahyuk.com' && values.password === 'admin123') {
        router.push('/admin');
      } else {
        form.setError('root', { 
          message: 'Email atau password salah. Coba lagi.' 
        });
      }
    }, 1500);
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:flex flex-1 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-90"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-12 text-white">
          <Plane className="h-20 w-20 mb-8" />
          <h1 className="text-4xl font-bold mb-6">Tiket Murah Yuk</h1>
          <p className="text-xl max-w-md text-center mb-8">
            Platform travel terbaik untuk menjelajahi keindahan Indonesia
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Demo Akun Admin</h2>
            <div className="space-y-2 text-sm">
              <p>Email: admin@tiketmurahyuk.com</p>
              <p>Password: admin123</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center mb-8 lg:hidden">
            <Plane className="h-10 w-10 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-blue-600">Tiket Murah Yuk</span>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Masuk ke Akun Anda</h2>
              <p className="text-gray-600 mt-2">
                Masukkan kredensial Anda untuk melanjutkan
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {form.formState.errors.root && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                    {form.formState.errors.root.message}
                  </div>
                )}
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Masukkan email" 
                            className="pl-10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <KeyRound className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            type="password" 
                            placeholder="Masukkan password" 
                            className="pl-10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="rememberMe"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label
                          htmlFor="rememberMe"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Ingat saya
                        </label>
                      </div>
                    )}
                  />
                  
                  <Link 
                    href="#" 
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Lupa password?
                  </Link>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Masuk...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Lock className="mr-2 h-4 w-4" />
                      Masuk
                    </div>
                  )}
                </Button>
              </form>
            </Form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Belum punya akun?{' '}
                <Link href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                  Daftar
                </Link>
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Tiket Murah Yuk. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}