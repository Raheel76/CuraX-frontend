"use client"

import { motion } from "framer-motion"
import { Heart, ArrowLeft, Stethoscope } from "lucide-react"
import Link from "next/link"
import AuthNavigation from "../auth/AuthNavigation"

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground dark flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex justify-center items-center lg:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/medical-pattern.png')] min-h-screen bg-cover bg-no-repeat opacity-10"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="bg-primary p-4 rounded-2xl mb-4 mx-auto w-fit">
              <Stethoscope className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Cura<span className="text-primary">X</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Your trusted healthcare platform connecting patients, doctors, and pharmacies in one seamless experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground">Patients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Pharmacies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex overflow-y-auto overflow-x-hidden h-[calc(100vh-10px)]  flex-col">
        {/* Back Button */}
        <div className="p-6 ">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Website</span>
            </motion.button>
          </Link>
        </div>

        {/* Auth Navigation */}
        {/* <AuthNavigation /> */}

        {/* Auth Content */}
        <div className="flex-1  flex items-center justify-center py-6 px-10">
          <div className="w-full ">{children}</div>
        </div>

        {/* Mobile Branding */}
        <div className="lg:hidden p-6 text-center border-t border-border">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="bg-primary p-2 rounded-lg">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
              Cura<span className="text-primary">X</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">Trusted by 50K+ patients worldwide</p>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
