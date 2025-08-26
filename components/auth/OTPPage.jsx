"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button, message } from "antd"
import { Mail, ArrowLeft, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

const OTPPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [loading, setLoading] = useState(false)
  const [verificationSuccess, setVerificationSuccess] = useState(false)
  const [resendTimer, setResendTimer] = useState(0)
  const inputRefs = useRef([])

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [resendTimer])

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return // Prevent multiple characters

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async () => {
    const otpString = otp.join("")
    if (otpString.length !== 6) {
      message.error("Please enter the complete 6-digit OTP")
      return
    }

    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setVerificationSuccess(true)
      message.success("OTP verified successfully!")
      console.log("OTP submitted:", otpString)
    } catch (error) {
      message.error("OTP verification failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleResend = () => {
    setResendTimer(60)
    message.success("OTP resent successfully!")
  }

  if (verificationSuccess) {
    return (
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-primary" />
            </motion.div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Email Verified!</h2>
            <p className="text-muted-foreground mb-6">
              Your email has been verified successfully. You can now access your account.
            </p>

            <Link href="/auth">
              <Button className="w-full h-12 bg-primary hover:bg-accent border-none text-primary-foreground font-semibold rounded-lg">
                Continue to Login
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Mail className="w-8 h-8 text-primary" />
          </motion.div>

          <h2 className="text-3xl font-bold text-foreground mb-2">Verify Your Email</h2>
          <p className="text-muted-foreground">
            We've sent a 6-digit verification code to your email address. Please enter it below.
          </p>
        </div>

        <div className="space-y-6">
          {/* OTP Input Fields */}
          <div className="flex justify-center space-x-3">
            {otp.map((digit, index) => (
              <motion.input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-semibold border-2 border-border rounded-lg bg-input text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>

          {/* Submit Button */}
          <Button
            type="primary"
            onClick={handleSubmit}
            loading={loading}
            disabled={otp.join("").length !== 6}
            className="w-full h-12 bg-primary hover:bg-accent border-none text-primary-foreground font-semibold rounded-lg"
          >
            Verify OTP
          </Button>

          {/* Resend OTP */}
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              Didn't receive the code?{" "}
              {resendTimer > 0 ? (
                <span className="text-foreground">
                  Resend in {resendTimer}s
                </span>
              ) : (
                <button
                  onClick={handleResend}
                  className="text-primary hover:text-accent transition-colors font-semibold"
                >
                  Resend OTP
                </button>
              )}
            </p>
          </div>

          {/* Back to Login */}
          <div className="text-center">
            <Link href="/auth" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 inline mr-2" />
              Back to Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default OTPPage
