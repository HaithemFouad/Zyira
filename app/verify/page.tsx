"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, CheckCircle, RefreshCw, Smartphone, Mail } from "lucide-react"
import FloatingMedicalIcons from "@/components/floating-medical-icons"
import VerificationCodeInput from "@/components/verification-code-input"

export default function VerifyPage() {
  const [verificationCode, setVerificationCode] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [timeLeft, setTimeLeft] = useState(120) // 2 minutes
  const [verificationMethod, setVerificationMethod] = useState<"phone" | "email" | null>(null)
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // Get user data and verification method from localStorage
    const storedData = localStorage.getItem("signupData")
    const storedMethod = localStorage.getItem("verificationMethod")

    if (storedData && storedMethod) {
      setUserData(JSON.parse(storedData))
      setVerificationMethod(storedMethod as "phone" | "email")
    } else {
      // Redirect back to signup if no data found
      window.location.href = "/signup"
    }

    // Start countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCodeComplete = async (code: string) => {
    setIsVerifying(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsVerifying(false)

    // Here you would normally verify the code with your backend
    console.log("Verification code:", code)

    // On success, redirect to home page
    window.location.href = "/home"
  }

  const handleResendCode = async () => {
    setIsResending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsResending(false)
    setTimeLeft(120) // Reset timer
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const maskPhone = (phone: string) => {
    if (!phone) return ""
    return phone.replace(/(\d{3})\d{4}(\d{3})/, "$1****$2")
  }

  const maskEmail = (email: string) => {
    if (!email) return ""
    const [username, domain] = email.split("@")
    const maskedUsername = username.length > 2 ? username.substring(0, 2) + "*".repeat(username.length - 2) : username
    return `${maskedUsername}@${domain}`
  }

  if (!userData || !verificationMethod) {
    return <div>جاري التحميل...</div>
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
          <CardHeader className="text-center space-y-4 sm:space-y-6 pb-4 sm:pb-6 px-4 sm:px-6">
            {/* Project Logo and Name */}
            <div className="space-y-4">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/25">
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 text-white"
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
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>

              {/* Project Name */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  زيارة
                </h1>
                <p className="text-sm sm:text-base text-emerald-600 font-medium">منصة الرعاية الصحية الذكية</p>
              </div>
            </div>

            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
              {verificationMethod === "phone" ? "تأكيد رقم الهاتف" : "تأكيد البريد الإلكتروني"}
            </CardTitle>
            <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
              لقد أرسلنا رمز التحقق المكون من 6 أرقام إلى
              <br />
              <span className="font-semibold text-emerald-600">
                {verificationMethod === "phone" ? `+20 ${maskPhone(userData.phone)}` : maskEmail(userData.email)}
              </span>
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
            {/* Verification Code Input */}
            <div className="space-y-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-full mb-4">
                  {verificationMethod === "phone" ? (
                    <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
                  ) : (
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
                  )}
                </div>
              </div>

              <VerificationCodeInput length={6} onComplete={handleCodeComplete} onCodeChange={setVerificationCode} />

              {/* Timer */}
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  انتهاء صلاحية الرمز خلال{" "}
                  <span className="font-mono font-semibold text-emerald-600">{formatTime(timeLeft)}</span>
                </p>
              </div>
            </div>

            {/* Verify Button */}
            <Button
              onClick={() => handleCodeComplete(verificationCode)}
              disabled={verificationCode.length !== 6 || isVerifying}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transform hover:scale-[1.02] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isVerifying ? (
                <>
                  <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                  <span>جاري التحقق...</span>
                </>
              ) : (
                <>
                  <span>تأكيد الرمز</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </Button>

            {/* Resend Code */}
            <div className="text-center space-y-3">
              <p className="text-sm text-gray-600">لم تستلم الرمز؟</p>
              <Button
                variant="outline"
                onClick={handleResendCode}
                disabled={isResending || timeLeft > 60}
                className="text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResending ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  "إعادة إرسال الرمز"
                )}
              </Button>
            </div>

            {/* Help Text */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <p className="text-sm text-blue-700 leading-relaxed">
                <strong>نصيحة:</strong> يمكنك لصق الرمز مباشرة من رسالة{" "}
                {verificationMethod === "phone" ? "SMS" : "البريد الإلكتروني"} أو كتابته رقماً بعد رقم
              </p>
            </div>

            {/* Back to Method Selection */}
            <div className="text-center pt-2 sm:pt-4 border-t border-gray-200/50">
              <Link
                href="/verification-method"
                className="inline-flex items-center text-sm text-gray-600 hover:text-emerald-600 font-medium hover:underline transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 ml-2" />
                تغيير طريقة التحقق
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
