import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1F3A5F] to-[#2D5A8C] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8A87C] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            هل أنت مستعد لتغيير حياتك؟
          </h2>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            انضم إلى مئات الرواد الذين حققوا نجاحاً حقيقياً في التجارة الإلكترونية. ابدأ رحلتك اليوم وحول شغفك إلى دخل حقيقي.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-t border-b border-white/20">
            <div>
              <p className="text-3xl font-bold text-[#D4A574]">500+</p>
              <p className="text-sm text-gray-300">طالب ناجح</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#D4A574]">$5M+</p>
              <p className="text-sm text-gray-300">مبيعات محققة</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#D4A574]">98%</p>
              <p className="text-sm text-gray-300">رضا العملاء</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#D4A574] hover:bg-[#C49464] text-white text-lg py-6 px-8 flex items-center gap-2 justify-center">
              ابدأ الآن
              <ArrowRight size={20} />
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white/10 text-lg py-6 px-8">
              تواصل معي
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
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
