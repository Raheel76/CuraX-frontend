"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button, Input, Form, Checkbox, message } from "antd"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import Link from "next/link"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      message.success("Login successful!")
      console.log("Login values:", values)
    } catch (error) {
      message.error("Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h2>
          <p className="text-muted-foreground">Sign in to your CuraX account</p>
        </div>

        <Form name="login" onFinish={onFinish} layout="vertical" size="large" className="space-y-4">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<Mail className="w-4 h-4 text-muted-foreground" />}
              placeholder="Enter your email"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password
              prefix={<Lock className="w-4 h-4 text-muted-foreground" />}
              placeholder="Enter your password"
              iconRender={(visible) => (visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </Form.Item>

          <div className="flex items-center justify-between">
            <Form.Item required name="remember" valuePropName="checked" className="mb-0">
              <Checkbox className="!text-white">Remember me</Checkbox>
            </Form.Item>
            <Link href="/auth/forgot-password" className="text-primary hover:text-accent transition-colors">
              Forgot password?
            </Link>
          </div>

          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full h-12 bg-primary hover:bg-accent border-none text-primary-foreground font-semibold rounded-lg"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-primary hover:text-accent transition-colors font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage
