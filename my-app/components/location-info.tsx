"use client"

import { MapPin } from "lucide-react"

interface LocationInfoProps {
  location?: string
}

export default function LocationInfo({ location }: LocationInfoProps) {
  const distances = [
    {
      category: "ที่ตั้ง/โครงสร้าง",
      items: [
        "มหาวิทยาลัยขอนแก่น  400 ม.",
        "BTS สถานีต้นสน  200 ม.",
        "ไรถวายามโครง-ธนะ  ระยะประมาณ 500 ม.",
        "โรงพยาบาลกรุงเทพ-ธนะ  5.9 กิโลเมตร",
      ],
    },
    { category: "แนน/ซอย/เลขที่/อื่นๆ", items: ["คณะสัตวแพทยศาสตร์ ม.เกษตร  24 ชั่วโมง", "หลังสวนปลูก (CCTV)", "ระวางน้ำ"] },
  ]

  return (
    <div>
      <h3 className="text-xl font-bold text-[#1F2937] mb-4 flex items-center gap-2 font-serif">
        <MapPin size={24} className="text-[#65A34E]" />
        บริเวณใกล้เคียง
      </h3>
      <div className="grid grid-cols-2 gap-8">
        {distances.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h4 className="font-bold text-[#1F2937] mb-3">----{section.category}----</h4>
            <div className="space-y-1">
              {section.items.map((item, i) => (
                <p key={i} className="text-[#6B7280] text-sm leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
