"use client"

export default function FacilitiesList() {
  const leftFacilities = ["เครื่องอบผ้าสาร", "เพอร์รี่อยส-ดี เลิ้ม", "เครื่องทำน้ำอุ่น", "บ้าน", "ตู้เก็บ", "ตู้เอก"]

  const rightFacilities = ["ที่ออดออน", "การรักษาความปลอดภัย 24 ชั่วโมง", "กล้องวงจรปิด (CCTV)", "ระวาง", "ว่างทำอาหาร"]

  return (
    <div>
      <h3 className="text-xl font-bold text-[#1F2937] mb-4 font-serif">สิ่งอำนวยความสะดวก</h3>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          {leftFacilities.map((facility, index) => (
            <p key={index} className="text-[#6B7280]">
              {facility}
            </p>
          ))}
        </div>
        <div className="space-y-2">
          {rightFacilities.map((facility, index) => (
            <p key={index} className="text-[#6B7280]">
              {facility}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
