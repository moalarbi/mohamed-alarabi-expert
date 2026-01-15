import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#1F3A5F] to-[#2D5A8C] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#D4A574] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#E8A87C] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            هل أنت مستعد لتغيير حياتك؟
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-8 md:mb-12 leading-relaxed">
            انضم إلى مئات الرواد الذين حققوا نجاحاً حقيقياً في التجارة الإلكترونية. ابدأ رحلتك اليوم وحول شغفك إلى دخل حقيقي.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 py-6 md:py-8 border-t border-b border-white/20">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#D4A574]">500+</p>
              <p className="text-xs md:text-sm text-gray-300">طالب ناجح</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#D4A574]">$5M+</p>
              <p className="text-xs md:text-sm text-gray-300">مبيعات محققة</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#D4A574]">98%</p>
              <p className="text-xs md:text-sm text-gray-300">رضا العملاء</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
            <Button className="bg-[#D4A574] hover:bg-[#C49464] text-white text-base md:text-lg py-5 md:py-6 px-6 md:px-8 flex items-center justify-center gap-2 w-full sm:w-auto">
              ابدأ الآن
              <ArrowRight size={18} className="hidden sm:inline" />
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white/10 text-base md:text-lg py-5 md:py-6 px-6 md:px-8 w-full sm:w-auto">
              تواصل معي
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-[#D4A574]">✓</span>
              <span>دفع آمن 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4A574]">✓</span>
              <span>ضمان استرجاع المال</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4A574]">✓</span>
              <span>دعم مدى الحياة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
