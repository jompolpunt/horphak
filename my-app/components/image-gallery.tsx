"use client"

import { useState } from "react"

interface ImageGalleryProps {
  images: string[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {/* Main Image */}
        <div className="col-span-2 row-span-2">
          <img
            src={images[selectedImageIndex] || "/placeholder.svg"}
            alt="Main property image"
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Smaller Images */}
        {images.slice(1, 5).map((image, index) => (
          <div key={index} onClick={() => setSelectedImageIndex(index + 1)} className="cursor-pointer">
            <img
              src={image || "/placeholder.svg"}
              alt={`Property image ${index + 2}`}
              className="w-full h-[180px] object-cover rounded-xl hover:opacity-80 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
