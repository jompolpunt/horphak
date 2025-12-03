"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DAILY_APARTMENTS } from "@/lib/property-data"

interface DailyApartmentSectionProps {
  onNavigate: (page: string, property?: any) => void
}

export default function DailyApartmentSection({ onNavigate }: DailyApartmentSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-8 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1F2937] mb-6 font-serif">อพาร์ทเม้นท์รายวัน</h2>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 opacity-0 group-hover:opacity-100 transition"
        >
          <div className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl">
            <ChevronLeft className="text-[#65A34E]" size={24} />
          </div>
        </button>

        {/* Carousel */}
        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide">
          {DAILY_APARTMENTS.map((apartment) => (
            <div
              key={apartment.id}
              className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer flex flex-col"
              onClick={() => onNavigate("property-detail", apartment)}
            >
              <img
                src={apartment.image || "/placeholder.svg"}
                alt={apartment.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-[#1F2937] mb-1 line-clamp-2">{apartment.name}</h3>
                <p className="text-sm text-[#6B7280] mb-3">{apartment.location}</p>
                <div className="space-y-1 mb-4 flex-grow">
                  <p className="text-base font-bold text-[#1F2937]">
                    {apartment.priceMonth} <span className="text-sm font-normal">บาท/เดือน</span>
                  </p>
                  <p className="text-base text-[#6B7280]">
                    {apartment.priceDay} <span className="text-sm">บาท/วัน</span>
                  </p>
                </div>
              </div>
              <button className="w-full py-2 text-[#65A34E] font-semibold hover:bg-[#FDFBF7] transition border-t border-[#E5E7EB]">
                เพิ่มเติม
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 opacity-0 group-hover:opacity-100 transition"
        >
          <div className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl">
            <ChevronRight className="text-[#65A34E]" size={24} />
          </div>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#65A34E] opacity-60" />
        ))}
      </div>
    </section>
  )
}
