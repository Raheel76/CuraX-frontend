"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, Form, Select, Checkbox, message } from "antd";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Calendar,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const { Option } = Select;

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    agreeToTerms: "",
  });

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim()) {
      newErrors.name = "Name is required!";
    }
    if (formData.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    setErrors(newErrors)
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-primary mb-2"
          >
            CuraX
          </motion.h1>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Create Your Account
          </h2>
          <p className="text-muted-foreground">
            Join thousands of patients and healthcare professionals
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col auth-input gap-6"
        >
          <div className=" flex flex-col gap-2">
            <span className="text-foreground">First Name</span>
            <Input
              prefix={<User className="w-4 h-4 text-muted-foreground" />}
              placeholder="Enter your first name"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <span className="text-foreground">Email</span>
            <Input
              prefix={<Mail className="w-4 h-4 text-muted-foreground" />}
              placeholder="Enter your email"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className=" flex flex-col gap-2">
            <span className="text-foreground">Select Role</span>
            <Select
              placeholder="Select your user type"
              className="bg-input border-border text-foreground"
            >
              <Option value="patient">Patient</Option>
              <Option value="doctor">Doctor</Option>
            </Select>
          </div>

          <div className=" flex flex-col gap-2">
            <span className="text-foreground">Password</span>
            <Input.Password
              prefix={<Lock className="w-4 h-4 text-muted-foreground" />}
              placeholder="Create a strong password"
              iconRender={(visible) =>
                visible ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )
              }
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className=" !w-full">
            <Checkbox className="!text-white">
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:text-accent">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:text-accent">
                Privacy Policy
              </Link>
            </Checkbox>
          </div>

          <Form.Item className="md:col-span-2 mb-0">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full h-12 bg-primary hover:bg-accent border-none text-primary-foreground font-semibold rounded-lg"
            >
              Create Account
            </Button>
          </Form.Item>
        </form>

        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/auth"
              className="text-primary hover:text-accent transition-colors font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
