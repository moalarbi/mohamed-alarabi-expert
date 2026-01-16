import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // In RTL, swiping left means going to the NEXT slide
      goToNext();
    } else if (isRightSwipe) {
      // In RTL, swiping right means going to the PREVIOUS slide
      goToPrevious();
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="p-6 bg-gray-50 border-0 h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#D4A574] text-[#D4A574]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-[#1F3A5F] text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 rounded-full bg-[#D4A574] text-white flex items-center justify-center hover:bg-[#C49464] transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex
                  ? "bg-[#D4A574] w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full bg-[#D4A574] text-white flex items-center justify-center hover:bg-[#C49464] transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-sm text-gray-600">
        {currentIndex + 1} / {testimonials.length}
      </div>
    </div>
  );
}
