import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F3A5F] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* About */}
          <div>
            <Link href="/">
              <a className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#D4A574] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">م</span>
                </div>
                <h3 className="text-base md:text-lg font-bold">محمد العربي</h3>
              </a>
            </Link>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              خبير متخصص في التجارة الإلكترونية والتسويق الرقمي. مساعدة رواد الأعمال على بناء متاجر إلكترونية ناجحة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4">الروابط السريعة</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li>
                <Link href="/about">
                  <a className="hover:text-[#D4A574] transition">
                    عني
                  </a>
                </Link>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4A574] transition">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#D4A574] transition">
                  الشهادات
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#D4A574] transition">
                  الأسعار
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4">تواصل معي</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#D4A574] flex-shrink-0" />
                <a href="mailto:info@mohamedalarabi.com" className="hover:text-[#D4A574] transition break-all">
                  info@mohamedalarabi.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#D4A574] flex-shrink-0" />
                <a href="tel:+966501234567" className="hover:text-[#D4A574] transition">
                  +966 50 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#D4A574] mt-0.5 flex-shrink-0" />
                <span>السعودية</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4">تابعني</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 md:w-10 h-9 md:h-10 bg-[#D4A574] rounded-lg flex items-center justify-center hover:bg-[#E8A87C] transition flex-shrink-0"
              >
                <Facebook size={16} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="w-9 md:w-10 h-9 md:h-10 bg-[#D4A574] rounded-lg flex items-center justify-center hover:bg-[#E8A87C] transition flex-shrink-0"
              >
                <Twitter size={16} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="w-9 md:w-10 h-9 md:h-10 bg-[#D4A574] rounded-lg flex items-center justify-center hover:bg-[#E8A87C] transition flex-shrink-0"
              >
                <Linkedin size={16} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="w-9 md:w-10 h-9 md:h-10 bg-[#D4A574] rounded-lg flex items-center justify-center hover:bg-[#E8A87C] transition flex-shrink-0"
              >
                <Instagram size={16} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-4">
            <p>&copy; {currentYear} محمد العربي. جميع الحقوق محفوظة.</p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-[#D4A574] transition">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-[#D4A574] transition">
                شروط الخدمة
              </a>
              <a href="#" className="hover:text-[#D4A574] transition">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
