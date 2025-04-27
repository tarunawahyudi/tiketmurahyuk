'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Plane, 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive: boolean;
  isExpanded?: boolean;
  children?: {
    label: string;
    href: string;
  }[];
  onClick?: () => void;
}

function SidebarItem({
  icon: Icon,
  label,
  href,
  isActive,
  isExpanded,
  children,
  onClick
}: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (children) {
      setIsOpen(!isOpen);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      {children ? (
        <button
          onClick={handleToggle}
          className={cn(
            "flex items-center w-full p-3 rounded-lg transition-colors",
            isActive
              ? "bg-blue-100 text-blue-600"
              : "text-gray-600 hover:bg-gray-100"
          )}
        >
          <Icon className="h-5 w-5 mr-3" />
          {isExpanded && (
            <>
              <span className="flex-1 text-left">{label}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  isOpen && "transform rotate-180"
                )}
              />
            </>
          )}
        </button>
      ) : (
        <Link
          href={href}
          className={cn(
            "flex items-center w-full p-3 rounded-lg transition-colors",
            isActive
              ? "bg-blue-100 text-blue-600"
              : "text-gray-600 hover:bg-gray-100"
          )}
          onClick={onClick}
        >
          <Icon className="h-5 w-5 mr-3" />
          {isExpanded && <span>{label}</span>}
        </Link>
      )}

      {children && isOpen && isExpanded && (
        <div className="ml-6 mt-1 space-y-1">
          {children.map((child, index) => (
            <Link
              key={index}
              href={child.href}
              className="flex items-center p-2 text-gray-600 hover:text-blue-600 rounded-md text-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3"></div>
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarExpanded(false);
      } else {
        setIsSidebarExpanded(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    // In a real application, we would clear session/tokens here
    router.push('/login');
  };

  const sidebarItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '/admin',
    },
    {
      icon: Package,
      label: 'Produk',
      href: '/admin/products',
      children: [
        { label: 'Semua Produk', href: '/admin/products' },
        { label: 'Tambah Produk', href: '/admin/products/new' },
        { label: 'Kategori', href: '/admin/products/categories' },
      ],
    },
    {
      icon: ShoppingBag,
      label: 'Pesanan',
      href: '/admin/orders',
    },
    {
      icon: Users,
      label: 'Pengguna',
      href: '/admin/users',
    },
    {
      icon: MessageSquare,
      label: 'Testimoni',
      href: '/admin/testimonials',
    },
    {
      icon: Settings,
      label: 'Pengaturan',
      href: '/admin/settings',
    },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:block bg-white border-r border-gray-200 transition-all duration-300",
          isSidebarExpanded ? "w-64" : "w-20"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Plane className="h-6 w-6 text-blue-600" />
              {isSidebarExpanded && (
                <span className="text-xl font-bold text-blue-600">Tiket Murah Yuk</span>
              )}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
              className="hidden lg:flex"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-3 space-y-1">
              {sidebarItems.map((item, index) => (
                <SidebarItem
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  isActive={pathname === item.href || pathname.startsWith(`${item.href}/`)}
                  isExpanded={isSidebarExpanded}
                  children={item.children}
                />
              ))}
            </nav>
          </div>

          <div className="p-4 border-t border-gray-200">
            <Button
              variant="ghost"
              className={cn(
                "w-full flex items-center text-red-600 hover:bg-red-50 hover:text-red-700",
                !isSidebarExpanded && "justify-center"
              )}
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5 mr-3" />
              {isSidebarExpanded && <span>Keluar</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden absolute top-4 left-4 z-50">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <div className="h-full flex flex-col">
            <div className="p-4 flex items-center justify-between border-b">
              <Link href="/" className="flex items-center gap-2">
                <Plane className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-blue-600">Tiket Murah Yuk</span>
              </Link>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              <nav className="px-3 space-y-1">
                {sidebarItems.map((item, index) => (
                  <SidebarItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    isActive={pathname === item.href}
                    isExpanded={true}
                    children={item.children}
                  />
                ))}
              </nav>
            </div>

            <div className="p-4 border-t border-gray-200">
              <Button
                variant="ghost"
                className="w-full flex items-center text-red-600 hover:bg-red-50 hover:text-red-700"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5 mr-3" />
                <span>Keluar</span>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
        <div className="py-16 lg:py-8 px-4 sm:px-6 lg:px-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}