"use client"
import { Phone, MessageCircle, ChevronLeft } from "lucide-react"
import ImageGallery from "./image-gallery"
import FacilitiesList from "./facilities-list"
import ReviewsSection from "./reviews-section"
import LocationInfo from "./location-info"

interface PropertyDetailPageProps {
  property: any
  onNavigate: (page: string) => void
}

export default function PropertyDetailPage({ property, onNavigate }: PropertyDetailPageProps) {
  const galleryImages = property.galleryImages || [property.image]

  return (
    <div className="pb-16">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 px-6 py-6 max-w-7xl mx-auto">
        <button onClick={() => onNavigate("home")} className="p-2 hover:bg-[#E5E7EB] rounded-lg transition">
          <ChevronLeft size={24} className="text-[#1F2937]" />
        </button>
        <h1 className="text-2xl font-bold text-[#1F2937] font-serif">รายละเอียดเพิ่มเติม</h1>
      </div>

      {/* Image Gallery */}
      <ImageGallery images={galleryImages} />

      {/* Action Buttons */}
      <div className="flex gap-4 px-6 py-6 max-w-7xl mx-auto">
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#65A34E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a8f44] transition">
          <Phone size={20} />
          {property.phone || "0644456789"}
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-white text-[#65A34E] px-6 py-3 rounded-lg font-semibold border-2 border-[#65A34E] hover:bg-[#FDFBF7] transition">
          <MessageCircle size={20} />
          แชทสอบถามข้อมูล
        </button>
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Title and Price */}
        <div>
          <h2 className="text-3xl font-bold text-[#1F2937] mb-2 font-serif">{property.name}</h2>
          <p className="text-lg text-[#65A34E] font-bold">{property.priceMonth || property.price} บาท/เดือน</p>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-xl font-bold text-[#1F2937] mb-3 font-serif">รายละเอียด</h3>
          <p className="text-[#6B7280] leading-relaxed">{property.description}</p>
        </div>

        {/* Location Info */}
        <LocationInfo
          location={property.location}
          nearbyUniversities={property.nearbyUniversities}
          transit={property.transit}
          nearbyPlaces={property.nearbyPlaces}
        />

        {/* Facilities */}
        <FacilitiesList facilities={property.facilities} />

        {/* Reviews */}
        <ReviewsSection />
      </div>
    </div>
  )
}
