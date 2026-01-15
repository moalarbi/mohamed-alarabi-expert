import { Card } from "@/components/ui/card";
import { ShoppingCart, TrendingUp, Users, Zap, BarChart3, Smartphone } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "بناء المتاجر الإلكترونية",
    description: "تعلم كيفية بناء متجر إلكتروني احترافي من الصفر باستخدام أفضل المنصات والأدوات.",
  },
  {
    icon: TrendingUp,
    title: "استراتيجيات التسويق الرقمي",
    description: "استراتيجيات فعالة لزيادة المبيعات والوصول إلى جمهورك المستهدف بكفاءة.",
  },
  {
    icon: Users,
    title: "إدارة العملاء والعلاقات",
    description: "تقنيات متقدمة لبناء علاقات قوية مع العملاء وزيادة ولاءهم.",
  },
  {
    icon: Zap,
    title: "تحسين الأداء والتحويل",
    description: "تحسين معدل التحويل وزيادة متوسط قيمة الطلب من خلال تحليل البيانات.",
  },
  {
    icon: BarChart3,
    title: "تحليل البيانات والتقارير",
    description: "فهم أرقامك وتحليل الأداء لاتخاذ قرارات تجارية مستنيرة.",
  },
  {
    icon: Smartphone,
    title: "التسويق عبر وسائل التواصل",
    description: "استراتيجيات فعالة للتسويق على الفيسبوك والإنستغرام والتيك توك.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F3A5F] mb-4">
            الخدمات التي أقدمها
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            مجموعة شاملة من الخدمات والدورات المتخصصة لمساعدتك على بناء وتطوير عملك الإلكتروني.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A574] to-[#E8A87C] mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-5 md:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0"
              >
                <div className="w-14 md:w-16 h-14 md:h-16 bg-gradient-to-br from-[#D4A574] to-[#E8A87C] rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <Icon size={28} className="md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#1F3A5F] mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
