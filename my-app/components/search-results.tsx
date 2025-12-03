"use client"

import { POPULAR_CONDOS, DAILY_APARTMENTS } from "@/lib/property-data"
import { ChevronLeft } from "lucide-react"

interface SearchResultsProps {
  searchQuery: string
  onNavigate: (page: string, property?: any) => void
  onBack: () => void
}

export default function SearchResults({ searchQuery, onNavigate, onBack }: SearchResultsProps) {
  const allProperties = [...POPULAR_CONDOS, ...DAILY_APARTMENTS]
  const results = allProperties.filter((property) => {
    const query = searchQuery.toLowerCase()
    return (
      property.name.toLowerCase().includes(query) ||
      property.location.toLowerCase().includes(query) ||
      property.locationShort?.toLowerCase().includes(query) ||
      property.locationFull?.toLowerCase().includes(query)
    )
  })

  const condoResults = results.filter((p) => POPULAR_CONDOS.some((c) => c.id === p.id))
  const apartmentResults = results.filter((p) => DAILY_APARTMENTS.some((a) => a.id === p.id))

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {/* Header with back button */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 hover:bg-gray-200 rounded-full transition" aria-label="Go back">
          <ChevronLeft size={24} className="text-[#1F2937]" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-[#1F2937]">ผลการค้นหา</h1>
          <p className="text-sm text-gray-600">
            พบ {results.length} ผล สำหรับ "{searchQuery}"
          </p>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">ไม่พบผลการค้นหา</p>
          <p className="text-gray-400">ลองค้นหาด้วยชื่ออื่นหรือสถานที่อื่น</p>
        </div>
      ) : (
        <>
          {/* Condo Results */}
          {condoResults.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#1F2937] mb-6">คอนโด</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {condoResults.map((property) => (
                  <div
                    key={property.id}
                    onClick={() => onNavigate("property-detail", property)}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                  >
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-[#1F2937] mb-2">{property.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{property.locationShort}</p>
                      <p className="text-[#65A34E] font-semibold">
                        {property.price} {property.priceUnit}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onNavigate("property-detail", property)
                        }}
                        className="w-full mt-4 bg-[#65A34E] text-white py-2 rounded-lg hover:bg-[#5a8f44] transition"
                      >
                        เพิ่มเติม
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Apartment Results */}
          {apartmentResults.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-[#1F2937] mb-6">อพาร์ทเมนท์</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {apartmentResults.map((property) => (
                  <div
                    key={property.id}
                    onClick={() => onNavigate("property-detail", property)}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                  >
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-[#1F2937] mb-2">{property.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-xs text-gray-500">เดือน</p>
                          <p className="text-[#65A34E] font-semibold">{property.priceMonth} THB</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">วัน</p>
                          <p className="text-[#65A34E] font-semibold">{property.priceDay} THB</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onNavigate("property-detail", property)
                        }}
                        className="w-full bg-[#65A34E] text-white py-2 rounded-lg hover:bg-[#5a8f44] transition"
                      >
                        เพิ่มเติม
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
