"use client"

import { motion } from "framer-motion"
import { Calendar, Users, FileText, MessageSquare, Settings, LogOut, Home, Video } from "lucide-react"
import DoctorProfile from "./DoctorProfile"

const DoctorSidebar = ({ currentPage, onPageChange, onLogout }) => {
  const menuItems = [
    { key: "dashboard", label: "Dashboard", icon: Home },
    { key: "patients", label: "My Patients", icon: Users },
    { key: "appointments", label: "Appointments", icon: Calendar },
    { key: "consultations", label: "Consultations", icon: MessageSquare },
    { key: "video-calls", label: "Video Calls", icon: Video },
    { key: "reports", label: "Reports", icon: FileText },
    { key: "settings", label: "Settings", icon: Settings },
  ]

  const handleMenuClick = (key) => {
    console.log(`[v0] Navigating to: ${key}`)
    if (onPageChange) {
      onPageChange(key)
    }
  }

  const handleEditProfile = () => {
    console.log("[v0] Opening profile edit")
    onPageChange("settings")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold text-emerald-400">CuraX Doctor</h2>
        <p className="text-sm text-gray-400 mt-1">Medical Dashboard</p>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <motion.div
            key={item.key}
            whileHover={{ x: 4 }}
            onClick={() => handleMenuClick(item.key)}
            className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer mb-2 transition-colors ${
              currentPage === item.key ? "bg-emerald-600 text-white" : "hover:bg-gray-700 text-gray-300"
            }`}
          >
            <item.icon className={`w-5 h-5 ${currentPage === item.key ? "text-white" : "text-emerald-400"}`} />
            <span>{item.label}</span>
          </motion.div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <DoctorProfile onEditProfile={handleEditProfile} />
      </div>

      <div className="p-4 border-t border-gray-700">
        <motion.div
          whileHover={{ x: 4 }}
          onClick={onLogout}
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-600 cursor-pointer transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </motion.div>
      </div>
    </div>
  )
}

export default DoctorSidebar
