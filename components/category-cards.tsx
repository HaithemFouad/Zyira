"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Pill, Globe, Star, ArrowLeft } from "lucide-react"

interface CategoryCardsProps {
  onCategorySelect: (category: string) => void
}

const categories = [
  {
    id: "local",
    title: "الأدوية المحلية",
    description: "أدوية محلية عالية الجودة بأسعار مناسبة",
    icon: Pill,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    count: "500+ منتج",
  },
  {
    id: "imported",
    title: "الأدوية المستوردة",
    description: "أدوية مستوردة من أفضل الشركات العالمية",
    icon: Globe,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    count: "300+ منتج",
  },
  {
    id: "rare",
    title: "الأدوية النادرة",
    description: "أدوية نادرة ومتخصصة للحالات الخاصة",
    icon: Star,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    count: "100+ منتج",
  },
]

export default function CategoryCards({ onCategorySelect }: CategoryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const Icon = category.icon

        return (
          <Card
            key={category.id}
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
            onClick={() => onCategorySelect(category.id)}
          >
            <CardContent className="p-6 space-y-4">
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2 text-right">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>
                <p className="text-sm text-emerald-600 font-medium">{category.count}</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-start">
                <div className="flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm font-medium">تصفح المنتجات</span>
                  <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
