"use client"

import { useEffect, useState } from "react"
import { Heart, Pill, Thermometer, Stethoscope, Cross, Syringe, Activity, Shield } from "lucide-react"

const medicalIcons = [
  { Icon: Heart, color: "text-red-400/30", size: "w-8 h-8" },
  { Icon: Pill, color: "text-blue-400/30", size: "w-6 h-6" },
  { Icon: Thermometer, color: "text-orange-400/30", size: "w-7 h-7" },
  { Icon: Stethoscope, color: "text-emerald-400/30", size: "w-8 h-8" },
  { Icon: Cross, color: "text-red-500/30", size: "w-6 h-6" },
  { Icon: Syringe, color: "text-teal-400/30", size: "w-7 h-7" },
  { Icon: Activity, color: "text-green-400/30", size: "w-8 h-8" },
  { Icon: Shield, color: "text-blue-500/30", size: "w-7 h-7" },
]

interface FloatingIcon {
  id: number
  Icon: any
  color: string
  size: string
  x: number
  y: number
  duration: number
  delay: number
}

export default function FloatingMedicalIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    const generateIcons = () => {
      const newIcons: FloatingIcon[] = []

      for (let i = 0; i < 12; i++) {
        const iconData = medicalIcons[Math.floor(Math.random() * medicalIcons.length)]
        newIcons.push({
          id: i,
          ...iconData,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: 15 + Math.random() * 10, // 15-25 seconds
          delay: Math.random() * 5, // 0-5 seconds delay
        })
      }

      setIcons(newIcons)
    }

    generateIcons()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-float opacity-40"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
          }}
        >
          <icon.Icon className={`${icon.size} ${icon.color}`} />
        </div>
      ))}
    </div>
  )
}
