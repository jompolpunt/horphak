"use client"

import type React from "react"

import { useState } from "react"

interface SignUpProps {
  onNavigate: (page: string) => void
}

export default function SignUpPage({ onNavigate }: SignUpProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign up logic here
    onNavigate("home")
  }

  return (
    <div className="min-h-[calc(100vh-96px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-[#65A34E] mb-12 font-serif">Create your Account</h1>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 border-2 border-[#E5E7EB] rounded-full focus:outline-none focus:border-[#65A34E] transition bg-white text-[#1F2937] placeholder-[#9CA3AF]"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 border-2 border-[#E5E7EB] rounded-full focus:outline-none focus:border-[#65A34E] transition bg-white text-[#1F2937] placeholder-[#9CA3AF]"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 border-2 border-[#E5E7EB] rounded-full focus:outline-none focus:border-[#65A34E] transition bg-white text-[#1F2937] placeholder-[#9CA3AF]"
            />

            <button
              type="submit"
              className="w-full bg-[#65A34E] text-white font-bold py-3 rounded-lg hover:bg-[#5a8f44] transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-6 text-[#6B7280] text-sm">
            Already have an account?{" "}
            <button onClick={() => onNavigate("signin")} className="text-[#65A34E] font-semibold hover:underline">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
