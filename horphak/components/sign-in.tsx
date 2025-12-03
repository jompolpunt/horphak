"use client"

import type React from "react"

import { useState } from "react"

interface SignInProps {
  onNavigate: (page: string) => void
}

export default function SignInPage({ onNavigate }: SignInProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    onNavigate("home")
  }

  return (
    <div className="min-h-[calc(100vh-96px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-[#65A34E] mb-12 font-serif">Sign In</h1>

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

            <button
              type="submit"
              className="w-full bg-[#65A34E] text-white font-bold py-3 rounded-lg hover:bg-[#5a8f44] transition duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 space-y-2 text-center text-sm">
            <p>
              <button className="text-[#65A34E] hover:underline font-semibold">Forgot your password?</button>
            </p>
            <p className="text-[#6B7280]">
              Don't have an account?{" "}
              <button onClick={() => onNavigate("signup")} className="text-[#65A34E] font-semibold hover:underline">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
