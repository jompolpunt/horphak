"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import PopularCondoSection from "./popular-condo-section"
import DailyApartmentSection from "./daily-apartment-section"

interface HomePageProps {
  onNavigate: (page: string, property?: any) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
  }

  return (
    <div className="pb-16">
      {/* Search Section */}
      <div className="px-6 py-8 max-w-7xl mx-auto">
        <form onSubmit={handleSearch} className="relative flex gap-2">
          <input
            type="text"
            placeholder="ค้นหาด้วยชื่อสถานศึกษา หรือชื่ออพาร์ทเม้นท์"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-6 py-3 border-2 border-[#65A34E] rounded-full focus:outline-none focus:ring-2 focus:ring-[#65A34E] focus:ring-offset-2 bg-white text-[#1F2937] placeholder-[#9CA3AF]"
          />
          <button
            type="submit"
            className="bg-[#65A34E] text-white px-6 py-3 rounded-full hover:bg-[#5a8f44] transition flex items-center justify-center"
          >
            <Search size={20} />
          </button>
        </form>
      </div>

      {/* Popular Condo Section */}
      <PopularCondoSection onNavigate={onNavigate} />

      {/* Daily Apartment Section */}
      <DailyApartmentSection onNavigate={onNavigate} />
    </div>
  )
}
