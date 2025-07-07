"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Facebook, Mail, ArrowRight, User, Phone, Lock, Eye } from "lucide-react"
import FloatingMedicalIcons from "@/components/floating-medical-icons"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("كلمات المرور غير متطابقة")
      return
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password) {
      alert("يرجى ملء جميع الحقول المطلوبة")
      return
    }

    // Store form data in localStorage for the verification process
    localStorage.setItem("signupData", JSON.stringify(formData))

    // Redirect to verification method selection
    window.location.href = "/verification-method"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Floating Medical Icons */}
      <FloatingMedicalIcons />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-3 sm:p-4 lg:p-6">
        <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-emerald-500/10">
          <CardHeader className="text-center space-y-3 sm:space-y-4 pb-4 sm:pb-6 px-4 sm:px-6">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/25">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
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
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                زيارة
              </h1>
              <p className="text-sm text-emerald-600 font-medium">منصة الرعاية الصحية الذكية</p>
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">إنشاء حساب جديد</CardTitle>
            <CardDescription className="text-gray-600 text-sm sm:text-base px-2">
              انضم إلى أكبر منصة صيدلية في المنطقة
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
            {/* Social Login Options */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-sm sm:text-base"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="font-medium">التسجيل بحساب فيسبوك</span>
              </Button>

              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 border-2 border-red-200 hover:bg-red-50 hover:border-red-300 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-sm sm:text-base"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="font-medium">التسجيل بحساب جيميل</span>
              </Button>
            </div>

            <div className="relative">
              <Separator className="bg-gray-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 sm:px-6 text-xs sm:text-sm text-gray-500 font-medium">
                  أو التسجيل بالبيانات
                </span>
              </div>
            </div>

            {/* Manual Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-right font-medium text-gray-700 text-sm">
                    الاسم الأول
                  </Label>
                  <div className="relative">
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="أحمد"
                      className="text-right pr-8 sm:pr-10 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm sm:text-base"
                      required
                    />
                    <User className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-right font-medium text-gray-700 text-sm">
                    اسم العائلة
                  </Label>
                  <div className="relative">
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="محمد"
                      className="text-right pr-8 sm:pr-10 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm sm:text-base"
                      required
                    />
                    <User className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-right font-medium text-gray-700 text-sm">
                  البريد الإلكتروني
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className="text-right pr-8 sm:pr-10 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm sm:text-base"
                    required
                  />
                  <Mail className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-right font-medium text-gray-700 text-sm">
                  رقم الهاتف
                </Label>
                <div className="flex gap-2 sm:gap-3">
                  <div className="relative flex-1">
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="01234567890"
                      className="text-right pr-8 sm:pr-10 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm sm:text-base"
                      required
                    />
                    <Phone className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center px-3 sm:px-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-xs sm:text-sm font-medium text-gray-600">
                    +20
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-right font-medium text-gray-700 text-sm">
                  كلمة المرور
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="text-right pr-8 sm:pr-10 pl-8 sm:pl-10 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm sm:text-base"
                    required
                  />
                  <Lock className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                  <Eye className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-right font-medium text-gray-700 text-sm">
                  تأكيد كلمة المرور
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="text-right pr-8 sm:pr-10 pl-8 sm:pl-10 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm sm:text-base"
                    required
                  />
                  <Lock className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                  <Eye className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transform hover:scale-[1.02] transition-all duration-300 group"
              >
                <span>إنشاء الحساب</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>

            <div className="text-center text-xs sm:text-sm text-gray-600 pt-2 sm:pt-4">
              لديك حساب بالفعل؟{" "}
              <Link
                href="/signin"
                className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline transition-colors duration-200"
              >
                تسجيل الدخول
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
