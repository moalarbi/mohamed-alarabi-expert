import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#D4A574] to-[#E8A87C] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">م</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-[#1F3A5F]">محمد العربي</h1>
            <p className="text-xs text-gray-600">خبير التجارة الإلكترونية</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-gray-700 hover:text-[#D4A574] transition">
            عني
          </a>
          <a href="#services" className="text-gray-700 hover:text-[#D4A574] transition">
            الخدمات
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-[#D4A574] transition">
            الشهادات
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-[#D4A574] transition">
            الأسعار
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#D4A574] transition">
            اتصل بي
          </a>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button className="btn-primary">
            ابدأ الآن
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a href="#about" className="text-gray-700 hover:text-[#D4A574] transition">
              عني
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#D4A574] transition">
              الخدمات
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#D4A574] transition">
              الشهادات
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#D4A574] transition">
              الأسعار
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#D4A574] transition">
              اتصل بي
            </a>
            <Button className="btn-primary w-full">
              ابدأ الآن
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
