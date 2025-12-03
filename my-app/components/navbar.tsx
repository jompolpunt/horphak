"use client"

import { User } from "lucide-react"

interface NavbarProps {
  onNavigate: (page: string) => void
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#65A34E] rounded-b-3xl shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          onClick={() => onNavigate("home")}
          className="text-white font-serif text-3xl font-bold cursor-pointer hover:opacity-90 transition"
        >
          Horphak
        </h1>
        <button className="bg-white bg-opacity-30 hover:bg-opacity-40 p-2 rounded-full transition">
          <User size={24} className="text-white" />
        </button>
      </div>
    </nav>
  )
}
