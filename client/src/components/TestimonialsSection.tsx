import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد محمد",
    role: "صاحب متجر إلكتروني",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
    content: "تعلمت من محمد كل شيء عن بناء متجري الإلكتروني. الآن أحقق أرباح شهرية ممتازة!",
    rating: 5,
  },
  {
    name: "فاطمة علي",
    role: "مسوقة رقمية",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
    content: "الدورات التدريبية رائعة جداً وعملية جداً. ساعدتني على تطوير مهاراتي بشكل كبير.",
    rating: 5,
  },
  {
    name: "محمود حسن",
    role: "رائد أعمال",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahmoud",
    content: "أفضل استثمار قمت به هو الاستثمار في تعلم التجارة الإلكترونية مع محمد العربي.",
    rating: 5,
  },
  {
    name: "ليلى محمود",
    role: "مديرة مشاريع",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Layla",
    content: "الخبرة والمعرفة التي قدمها محمد غيرت طريقة تفكيري في العمل الإلكتروني تماماً.",
    rating: 5,
  },
  {
    name: "سارة إبراهيم",
    role: "صاحبة متجر",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "لم أتوقع أن أحقق هذه النتائج في وقت قصير. شكراً محمد على كل شيء!",
    rating: 5,
  },
  {
    name: "عمر خالد",
    role: "متخصص تسويق",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
    content: "محمد ليس فقط معلم، بل هو مرشد حقيقي يساعدك على تحقيق أحلامك.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mb-4">
            شهادات العملاء الراضين
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            استمع إلى قصص النجاح من عملائنا الذين حققوا نتائج حقيقية.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A574] to-[#E8A87C] mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 bg-gray-50 border-0"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#D4A574] text-[#D4A574]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-[#1F3A5F]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
