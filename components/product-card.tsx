import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    image: string
    category: string
    inStock: boolean
    discount?: number
    isNew?: boolean
    isBestseller?: boolean
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.isNew && <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-xs">جديد</Badge>}
          {product.isBestseller && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs">الأكثر مبيعاً</Badge>
          )}
          {product.discount && (
            <Badge className="bg-red-500 hover:bg-red-600 text-white text-xs">-{product.discount}%</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-sm">
              نفد من المخزن
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Category */}
        <p className="text-xs text-emerald-600 font-medium">{product.category}</p>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 text-right leading-tight">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 justify-end">
          <span className="text-sm text-gray-600">({product.reviews})</span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 justify-end">
          <span className="text-lg font-bold text-emerald-600">{product.price} ج.م</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">{product.originalPrice} ج.م</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4 ml-2" />
          {product.inStock ? "إضافة للسلة" : "نفد من المخزن"}
        </Button>
      </CardContent>
    </Card>
  )
}
