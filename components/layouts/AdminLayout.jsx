"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, Home, Users, Calendar, FileText, Settings, LogOut } from "lucide-react"
import { Drawer } from "antd"

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { key: "dashboard", label: "Dashboard", icon: Home },
    { key: "patients", label: "Patients", icon: Users },
    { key: "appointments", label: "Appointments", icon: Calendar },
    { key: "reports", label: "Reports", icon: FileText },
    { key: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Sidebar */}
      <Drawer
        title="Admin Panel"
        placement="left"
        onClose={() => setSidebarOpen(false)}
        open={sidebarOpen}
        className="admin-drawer"
        width={280}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-emerald-400">CuraX Admin</h2>
          </div>
          <nav className="flex-1 p-4">
            {menuItems.map((item) => (
              <motion.div
                key={item.key}
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer mb-2"
              >
                <item.icon className="w-5 h-5 text-emerald-400" />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-700">
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-600 cursor-pointer"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </motion.div>
          </div>
        </div>
      </Drawer>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-gray-800 overflow-y-auto">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400">CuraX Admin</h2>
          </div>
          <nav className="flex-1 p-4">
            {menuItems.map((item) => (
              <motion.div
                key={item.key}
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer mb-2"
              >
                <item.icon className="w-5 h-5 text-emerald-400" />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-700">
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-600 cursor-pointer"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <div className="bg-gray-800 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Welcome, Admin</span>
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout
