import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2">
            <div className="w-9 md:w-10 h-9 md:h-10 bg-gradient-to-br from-[#D4A574] to-[#E8A87C] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm md:text-lg">م</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-bold text-[#1F3A5F]">محمد العربي</h1>
              <p className="text-xs text-gray-600">خبير التجارة الإلكترونية</p>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          <Link href="/about">
            <a className="text-sm lg:text-base text-gray-700 hover:text-[#D4A574] transition">
              عني
            </a>
          </Link>
          <a href="#services" className="text-sm lg:text-base text-gray-700 hover:text-[#D4A574] transition">
            الخدمات
          </a>
          <a href="#testimonials" className="text-sm lg:text-base text-gray-700 hover:text-[#D4A574] transition">
            الشهادات
          </a>
          <a href="#pricing" className="text-sm lg:text-base text-gray-700 hover:text-[#D4A574] transition">
            الأسعار
          </a>
          <a href="#contact" className="text-sm lg:text-base text-gray-700 hover:text-[#D4A574] transition">
            اتصل بي
          </a>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button className="btn-primary text-sm lg:text-base py-2 md:py-2.5">
            ابدأ الآن
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <Link href="/about">
              <a className="text-sm text-gray-700 hover:text-[#D4A574] transition py-2">
                عني
              </a>
            </Link>
            <a href="#services" className="text-sm text-gray-700 hover:text-[#D4A574] transition py-2">
              الخدمات
            </a>
            <a href="#testimonials" className="text-sm text-gray-700 hover:text-[#D4A574] transition py-2">
              الشهادات
            </a>
            <a href="#pricing" className="text-sm text-gray-700 hover:text-[#D4A574] transition py-2">
              الأسعار
            </a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-[#D4A574] transition py-2">
              اتصل بي
            </a>
            <Button className="btn-primary w-full mt-2 text-sm">
              ابدأ الآن
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
