import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "الباقة الأساسية",
    price: "$99",
    description: "مناسبة للمبتدئين",
    features: [
      "دورة تعليمية كاملة",
      "فيديوهات تدريبية",
      "ملفات وموارد",
      "دعم عبر البريد الإلكتروني",
      "شهادة إتمام",
    ],
    highlighted: false,
  },
  {
    name: "الباقة المتقدمة",
    price: "$299",
    description: "الأكثر شهرة",
    features: [
      "كل ما في الباقة الأساسية",
      "جلسات استشارية فردية",
      "مجموعة نقاش خاصة",
      "تحديثات مدى الحياة",
      "أدوات وقوالب حصرية",
      "دعم أولوية",
    ],
    highlighted: true,
  },
  {
    name: "الباقة الاحترافية",
    price: "$799",
    description: "للمتخصصين",
    features: [
      "كل ما في الباقات السابقة",
      "جلسات استشارية شهرية",
      "تحليل متجرك الخاص",
      "استراتيجية تسويق مخصصة",
      "دعم مباشر 24/7",
      "عضوية مجتمع VIP",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mb-4">
            اختر الباقة المناسبة لك
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            باقات مرنة تناسب جميع المستويات والاحتياجات.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A574] to-[#E8A87C] mx-auto mt-6" />
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 transition-all duration-300 border-0 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-[#D4A574] to-[#E8A87C] text-white shadow-2xl scale-105"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  الأكثر شهرة
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-[#1F3A5F]"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/80" : "text-gray-600"}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-[#D4A574]"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-white/80" : "text-gray-600"}`}>
                  {" "}/ لمدى الحياة
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-white" : "text-[#D4A574]"
                      }`}
                    />
                    <span className={plan.highlighted ? "text-white" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 font-semibold transition ${
                  plan.highlighted
                    ? "bg-white text-[#D4A574] hover:bg-gray-100"
                    : "btn-primary"
                }`}
              >
                اختر هذه الباقة
              </Button>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg">
            ✓ ضمان استرجاع المال 100% خلال 30 يوم إذا لم تكن راضياً
          </p>
        </div>
      </div>
    </section>
  );
}
