"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button, Input, Form, message } from "antd"
import { Eye, EyeOff, Lock, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

const ResetPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [passwordReset, setPasswordReset] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setPasswordReset(true)
      message.success("Password reset successfully!")
      console.log("Reset password values:", values)
    } catch (error) {
      message.error("Password reset failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (passwordReset) {
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

            <h2 className="text-2xl font-bold text-foreground mb-4">Password Reset Successfully!</h2>
            <p className="text-muted-foreground mb-6">
              Your password has been reset successfully. You can now sign in with your new password.
            </p>

            <Link href="/auth">
              <Button className="w-full h-12 bg-primary hover:bg-accent border-none text-primary-foreground font-semibold rounded-lg">
                Sign In Now
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Reset Your Password</h2>
          <p className="text-muted-foreground">
            Enter your new password below. Make sure it's strong and secure.
          </p>
        </div>

        <Form name="resetPassword" onFinish={onFinish} layout="vertical" size="large" className="space-y-4">
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your new password!" },
              { min: 8, message: "Password must be at least 8 characters!" },
            ]}
          >
            <Input.Password
              prefix={<Lock className="w-4 h-4 text-muted-foreground" />}
              placeholder="Enter your new password"
              iconRender={(visible) => (visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your new password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error("Passwords do not match!"))
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<Lock className="w-4 h-4 text-muted-foreground" />}
              placeholder="Confirm your new password"
              iconRender={(visible) => (visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />)}
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
              Reset Password
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

export default ResetPasswordPage
