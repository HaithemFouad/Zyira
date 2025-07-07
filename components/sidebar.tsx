"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, Pill, Globe, Star, Heart, ShoppingCart, User, Settings, Menu, X, ChevronRight } from "lucide-react"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const sidebarItems = [
  { id: "home", label: "الرئيسية", icon: Home },
  { id: "local", label: "الأدوية المحلية", icon: Pill },
  { id: "imported", label: "الأدوية المستوردة", icon: Globe },
  { id: "rare", label: "الأدوية النادرة", icon: Star },
  { id: "favorites", label: "المفضلة", icon: Heart },
  { id: "cart", label: "سلة التسوق", icon: ShoppingCart },
  { id: "profile", label: "الملف الشخصي", icon: User },
  { id: "settings", label: "الإعدادات", icon: Settings },
]

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsCollapsed(true)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 right-0 h-full bg-white/95 backdrop-blur-xl border-l border-gray-200 
        transition-all duration-300 z-50 shadow-2xl
        ${isCollapsed ? "w-16" : "w-64"}
        ${isCollapsed ? "lg:w-16" : "lg:w-64"}
      `}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  زيارة
                </h2>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 hover:bg-emerald-50"
            >
              {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-2 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => onSectionChange(item.id)}
                className={`
                  w-full justify-start gap-3 p-3 h-auto text-right
                  ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700 border-r-2 border-emerald-500"
                      : "text-gray-700 hover:bg-emerald-25 hover:text-emerald-600"
                  }
                  ${isCollapsed ? "justify-center" : ""}
                `}
              >
                <Icon className={`w-5 h-5 ${isCollapsed ? "" : "ml-auto"}`} />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-right">{item.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4" />}
                  </>
                )}
              </Button>
            )
          })}
        </nav>

        {/* User Info */}
        {!isCollapsed && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-emerald-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-right">
                <p className="text-sm font-semibold text-gray-900">أحمد محمد</p>
                <p className="text-xs text-gray-600">عضو مميز</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
