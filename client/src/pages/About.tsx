import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, Briefcase } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section for About Page */}
        <section className="bg-[#1F3A5F] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">من هو محمد العربي؟</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              خبير متخصص في بناء وتطوير المتاجر الإلكترونية، ساعدت مئات رواد الأعمال على تحقيق أحلامهم في العالم الرقمي.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section id="about" className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/images/hero-background.jpg" 
                  alt="محمد العربي" 
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-[#1F3A5F] mb-6">رحلتي في عالم التجارة الإلكترونية</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  بدأت رحلتي منذ أكثر من 10 سنوات، عندما كان مفهوم التجارة الإلكترونية لا يزال في بداياته في المنطقة. واجهت الكثير من التحديات وتعلمت من الأخطاء حتى استطعت بناء نموذج عمل ناجح ومستدام.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  اليوم، هدفي هو نقل هذه الخبرة إليك، وتزويدك بالأدوات والاستراتيجيات التي تحتاجها لتجنب الأخطاء الشائعة والوصول إلى النجاح بأسرع وقت ممكن.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Award className="text-[#D4A574] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-[#1F3A5F]">خبير معتمد</h4>
                      <p className="text-sm text-gray-600">في منصات التجارة العالمية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="text-[#D4A574] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-[#1F3A5F]">500+ طالب</h4>
                      <p className="text-sm text-gray-600">تخرجوا من دوراتنا</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-[#D4A574] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-[#1F3A5F]">100+ مشروع</h4>
                      <p className="text-sm text-gray-600">تم إطلاقه بنجاح</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#D4A574] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-[#1F3A5F]">نتائج مضمونة</h4>
                      <p className="text-sm text-gray-600">باستراتيجيات مثبتة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-[#1F3A5F] mb-12">رؤيتنا وقيمنا</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-[#D4A574]/10 text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">الشفافية</h3>
                <p className="text-gray-600">نؤمن بمشاركة الحقائق والأرقام كما هي، دون مبالغة أو وعود زائفة.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-[#D4A574]/10 text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">التمكين</h3>
                <p className="text-gray-600">هدفنا هو تمكينك لتكون قادراً على إدارة عملك بنفسك وباحترافية عالية.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-[#D4A574]/10 text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">التميز</h3>
                <p className="text-gray-600">لا نرضى بأقل من التميز في كل ما نقدمه من محتوى أو استشارات.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
