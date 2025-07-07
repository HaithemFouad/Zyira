import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Clock, Users, Package, Headphones } from "lucide-react"
import FloatingMedicalIcons from "@/components/floating-medical-icons"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Floating Medical Icons */}
      <FloatingMedicalIcons />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-300/10 to-teal-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl w-full space-y-6 sm:space-y-8 text-center">
          {/* Logo and Brand */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/25 transform hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                زيارة
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-2">
                منصة الرعاية الصحية الذكية
                <br />
                <span className="text-emerald-600 font-medium text-sm sm:text-base">
                  توصيل سريع • أسعار مميزة • خدمة 24/7
                </span>
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 py-4 sm:py-6">
            <div className="text-center space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-emerald-600" />
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">توصيل سريع</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-teal-600" />
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">منتجات أصلية</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                <Headphones className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-cyan-600" />
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">دعم 24/7</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/signup">
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transform hover:scale-[1.02] transition-all duration-300 group">
                <span>إنشاء حساب جديد</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <Link href="/signin">
              <Button
                variant="outline"
                className="w-full border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
              >
                تسجيل الدخول
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-4 sm:pt-6 border-t border-gray-200/50">
            <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">موثوق من قبل أكثر من</p>
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 space-x-reverse">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600">50K+</div>
                <div className="text-xs sm:text-sm text-gray-500">عميل</div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600">1000+</div>
                <div className="text-xs sm:text-sm text-gray-500">منتج</div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-600">24/7</div>
                <div className="text-xs sm:text-sm text-gray-500">خدمة</div>
              </div>
            </div>
          </div>

          {/* Additional Features for larger screens */}
          <div className="hidden lg:block pt-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Users className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="text-sm text-gray-600">فريق طبي متخصص</p>
              </div>
              <div className="space-y-2">
                <Package className="w-8 h-8 text-teal-600 mx-auto" />
                <p className="text-sm text-gray-600">تغليف آمن ومحكم</p>
              </div>
              <div className="space-y-2">
                <Sparkles className="w-8 h-8 text-cyan-600 mx-auto" />
                <p className="text-sm text-gray-600">عروض وخصومات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
