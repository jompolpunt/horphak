"use client"

import { Star } from "lucide-react"

interface Review {
  id: number
  avatar: string
  name: string
  date: string
  rating: number
  comment: string
  color: string
}

const REVIEWS: Review[] = [
  {
    id: 1,
    avatar: "bg-green-500",
    name: "สม ตั้งใจ",
    date: "21 มกราคม 2568",
    rating: 5,
    comment: "ห้องสะอาด มีสิ่งอำนวยความสะดวก 400 เมตร ไม่ต้องเดินไกล มั่นใจได้ว่ามีความปลอดภัย ได้ เพื่อนยังชอบและแนะนำให้คนอื่นเข้า",
    color: "from-green-500 to-green-600",
  },
  {
    id: 2,
    avatar: "bg-purple-500",
    name: "อรพนห์ สีพิษสัฐ",
    date: "21 มกราคม 2568",
    rating: 5,
    comment:
      "บรรยากาศห้องพักอยู่ใจกลางจังหวัร ห้องสะอาดประจำวันจากโปรแกรม คาว ทาวน์ สเปส ส่วนประเทศไทยนี้มี ห้องยอดเยี่ยม และทำเนียบปรับปรุงตามความต้องการของผู้เช่า",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    avatar: "bg-pink-500",
    name: "ดารารัต แอลกอลง",
    date: "21 มกราคม 2568",
    rating: 5,
    comment: "เนื้อดีแค่โปรแกรม 'คาวทาวน์สเปส' ส่วนประเทศไทยนี้มีคุณภาพสูงและ ที่พักอาศัยระดับ ５ ดาวเต็ม ประสบการณ์ดี",
    color: "from-pink-500 to-pink-600",
  },
  {
    id: 4,
    avatar: "bg-amber-500",
    name: "ดารารัต แอลกอลง",
    date: "21 มกราคม 2568",
    rating: 5,
    comment: "ไม่มีเสียสุดที่จะว่า อยู่นอนเล่นได้นาน...ถ้าจริงคาวทาวน์สเปสเนื้อดี ประเทศไทยนี้มีคุณภาพเยี่ยม",
    color: "from-amber-500 to-amber-600",
  },
  {
    id: 5,
    avatar: "bg-rose-500",
    name: "ดารารัต แอลกอลง",
    date: "21 มกราคม 2568",
    rating: 5,
    comment: "ห่อมจำเป็นจะเท่า 5 ดาว เลยครับ ดี ดี โปรแกรมจริงสร้างสร้างทรง ประเทศ",
    color: "from-rose-500 to-rose-600",
  },
]

export default function ReviewsSection() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-[#1F2937] flex items-center gap-2 font-serif">
          รีวิว
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-lg font-bold text-[#65A34E] ml-2">5.0 (รีวิวทั้ง 5 รับ)</span>
        </h3>
        <button className="px-6 py-2 bg-[#65A34E] text-white rounded-lg font-semibold hover:bg-[#5a8f44] transition">
          เขียนรีวิวของคุณ
        </button>
      </div>

      <div className="space-y-4">
        {REVIEWS.map((review) => (
          <div key={review.id} className="p-4 border border-[#E5E7EB] rounded-xl">
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-full flex-shrink-0 bg-gradient-to-br ${review.color} flex items-center justify-center`}
              >
                <span className="text-white text-sm font-bold">{review.name.charAt(0)}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-[#1F2937]">{review.name}</h4>
                  <span className="text-xs text-[#6B7280]">{review.date}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
