"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button, Input, Form, message } from "antd"
import { Mail, ArrowLeft, Shield, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setEmailSent(true)
      message.success("Password reset email sent successfully!")
      console.log("Forgot password values:", values)
    } catch (error) {
      message.error("Failed to send reset email. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (emailSent) {
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

            <h2 className="text-2xl font-bold text-foreground mb-4">Check Your Email</h2>
            <p className="text-muted-foreground mb-6">
              We've sent a password reset link to your email address. Please check your inbox and follow the
              instructions to reset your password.
            </p>

            <div className="space-y-4">
              <Button
                onClick={() => setEmailSent(false)}
                className="w-full h-12 bg-primary hover:bg-accent border-none text-primary-foreground font-semibold rounded-lg"
              >
                Send Another Email
              </Button>

              <Link href="/auth">
                <Button type="text" className="w-full h-12 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Login
                </Button>
              </Link>
            </div>
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Forgot Password?</h2>
          <p className="text-muted-foreground">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <Form name="forgotPassword" onFinish={onFinish} layout="vertical" size="large" className="space-y-4">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<Mail className="w-4 h-4 text-muted-foreground" />}
              placeholder="Enter your email address"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </Form.Item>

          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full h-12 bg-primary hover:bg-accent border-none text-primary-foreground font-semibold rounded-lg"
            >
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            Remember your password?{" "}
            <Link href="/auth" className="text-primary hover:text-accent transition-colors font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ForgotPasswordPage
