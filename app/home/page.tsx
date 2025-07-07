"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import CategoryCards from "@/components/category-cards"
import ProductCard from "@/components/product-card"
import FloatingMedicalIcons from "@/components/floating-medical-icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, SlidersHorizontal } from "lucide-react"

// Sample products data
const sampleProducts = {
  local: [
    {
      id: "1",
      name: "باراسيتامول 500 مجم - 20 قرص",
      price: 15,
      originalPrice: 20,
      rating: 4.5,
      reviews: 128,
      image: "/placeholder.svg?height=200&width=200",
      category: "مسكنات الألم",
      inStock: true,
      discount: 25,
      isBestseller: true,
    },
    {
      id: "2",
      name: "أموكسيسيلين 250 مجم - كبسولات",
      price: 35,
      rating: 4.2,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=200",
      category: "مضادات حيوية",
      inStock: true,
      isNew: true,
    },
    {
      id: "3",
      name: "فيتامين د3 1000 وحدة دولية",
      price: 45,
      originalPrice: 55,
      rating: 4.7,
      reviews: 203,
      image: "/placeholder.svg?height=200&width=200",
      category: "فيتامينات ومكملات",
      inStock: false,
      discount: 18,
    },
    {
      id: "4",
      name: "شراب الكحة للأطفال - 120 مل",
      price: 25,
      rating: 4.3,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=200",
      category: "أدوية الأطفال",
      inStock: true,
    },
  ],
  imported: [
    {
      id: "5",
      name: "Augmentin 625mg - 14 Tablets",
      price: 85,
      originalPrice: 95,
      rating: 4.8,
      reviews: 342,
      image: "/placeholder.svg?height=200&width=200",
      category: "مضادات حيوية مستوردة",
      inStock: true,
      discount: 11,
      isBestseller: true,
    },
    {
      id: "6",
      name: "Omega-3 Fish Oil 1000mg",
      price: 120,
      rating: 4.6,
      reviews: 278,
      image: "/placeholder.svg?height=200&width=200",
      category: "مكملات غذائية",
      inStock: true,
      isNew: true,
    },
  ],
  rare: [
    {
      id: "7",
      name: "دواء نادر للأمراض المناعية",
      price: 450,
      rating: 4.9,
      reviews: 23,
      image: "/placeholder.svg?height=200&width=200",
      category: "أدوية متخصصة",
      inStock: true,
      isNew: true,
    },
  ],
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                مرحباً بك في زيارة
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                منصتك الموثوقة للحصول على أفضل الأدوية والمنتجات الصحية
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Input
                  placeholder="ابحث عن الأدوية والمنتجات الصحية..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-right rounded-xl border-2 border-gray-200 focus:border-emerald-400"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Category Cards */}
            <CategoryCards onCategorySelect={setActiveSection} />
          </div>
        )

      case "local":
      case "imported":
      case "rare":
        const products = sampleProducts[activeSection as keyof typeof sampleProducts] || []

        return (
          <div className="space-y-6">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-right">
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeSection === "local" && "الأدوية المحلية"}
                  {activeSection === "imported" && "الأدوية المستوردة"}
                  {activeSection === "rare" && "الأدوية النادرة"}
                </h2>
                <p className="text-gray-600 mt-1">{products.length} منتج متاح</p>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <SlidersHorizontal className="w-4 h-4" />
                  فلترة
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Filter className="w-4 h-4" />
                  ترتيب
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {activeSection === "favorites" && "المفضلة"}
              {activeSection === "cart" && "سلة التسوق"}
              {activeSection === "profile" && "الملف الشخصي"}
              {activeSection === "settings" && "الإعدادات"}
            </h2>
            <p className="text-gray-600">هذا القسم قيد التطوير...</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative">
      {/* Floating Medical Icons */}
      <FloatingMedicalIcons />

      {/* Sidebar */}
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <div className="lg:mr-64 transition-all duration-300">
        <div className="p-4 sm:p-6 lg:p-8">{renderContent()}</div>
      </div>
    </div>
  )
}
