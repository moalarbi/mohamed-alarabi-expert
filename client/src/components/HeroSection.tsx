import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80 z-1" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="inline-block bg-[#D4A574]/10 text-[#D4A574] px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">🚀 ابدأ رحلتك نحو النجاح</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3A5F] mb-6 leading-tight">
              ازاي تبني متجرك الإلكتروني وتحقق أرباح حقيقية
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              تعلم من خبير متخصص في التجارة الإلكترونية والتسويق الرقمي. استراتيجيات مثبتة وعملية لبناء متجر ناجح وزيادة مبيعاتك بشكل مستدام.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <p className="text-3xl font-bold text-[#D4A574]">500+</p>
                <p className="text-sm text-gray-600">عميل ناجح</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#D4A574]">$2M+</p>
                <p className="text-sm text-gray-600">مبيعات محققة</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#D4A574]">10+</p>
                <p className="text-sm text-gray-600">سنوات خبرة</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg py-6 px-8 flex items-center gap-2">
                ابدأ الآن
                <ArrowRight size={20} />
              </Button>
              <Button className="btn-secondary text-lg py-6 px-8 flex items-center gap-2">
                <Play size={20} />
                شاهد الفيديو
              </Button>
            </div>
          </div>

          {/* Right Content - Video/Image */}
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-background.jpg"
                alt="محمد العربي - خبير التجارة الإلكترونية"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition">
                <button className="bg-[#D4A574] hover:bg-[#C49464] text-white rounded-full p-6 transition transform hover:scale-110">
                  <Play size={40} fill="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4A574] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#D4A574] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
