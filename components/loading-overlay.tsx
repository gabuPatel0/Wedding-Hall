"use client"

import { useEffect } from "react"
import { Heart } from "lucide-react"

interface LoadingOverlayProps {
  visible: boolean
  message?: string
  lockScroll?: boolean
}

export function LoadingOverlay({ visible, message = "Loading…", lockScroll = true }: LoadingOverlayProps) {
  // Optionally lock body scroll while the overlay is visible
  useEffect(() => {
    if (!lockScroll) return
    if (visible) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [visible, lockScroll])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#ffedd8]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {/* Outer ring spinner */}
          <div className="h-16 w-16 rounded-full border-4 border-[#bc8a5f]/30 border-t-[#bc8a5f] animate-spin" aria-hidden />
          {/* Center icon pulse */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid place-items-center h-10 w-10 rounded-full bg-[#f3d5b5] shadow" aria-hidden>
              <Heart className="h-5 w-5 text-[#a47148] animate-pulse" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-[#603808] font-semibold">
            {message}
          </p>
          <p className="text-[#8b5e34] text-sm">Please wait a moment</p>
        </div>
      </div>
    </div>
  )
}
