"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import SignUpPage from "@/components/sign-up"
import SignInPage from "@/components/sign-in"
import HomePage from "@/components/home-page"
import PropertyDetailPage from "@/components/property-detail-page"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedProperty, setSelectedProperty] = useState<any>(null)

  const handleNavigate = (page: string, property?: any) => {
    if (property) {
      setSelectedProperty(property)
    }
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar onNavigate={handleNavigate} />
      <main className="pt-24">
        {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
        {currentPage === "signup" && <SignUpPage onNavigate={handleNavigate} />}
        {currentPage === "signin" && <SignInPage onNavigate={handleNavigate} />}
        {currentPage === "property-detail" && selectedProperty && (
          <PropertyDetailPage property={selectedProperty} onNavigate={handleNavigate} />
        )}
      </main>
    </div>
  )
}
