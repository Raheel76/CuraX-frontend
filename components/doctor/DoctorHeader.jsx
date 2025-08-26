"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Settings, User, LogOut, HelpCircle } from "lucide-react"
import { Dropdown, Avatar, Badge, Input, Button } from "antd"

const DoctorHeader = ({ currentPage = "dashboard" }) => {
  const [searchValue, setSearchValue] = useState("")

  const profileMenuItems = [
    {
      key: "profile",
      label: (
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span>View Profile</span>
        </div>
      ),
    },
    {
      key: "settings",
      label: (
        <div className="flex items-center space-x-2">
          <Settings className="w-4 h-4" />
          <span>Account Settings</span>
        </div>
      ),
    },
    {
      key: "help",
      label: (
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-4 h-4" />
          <span>Help & Support</span>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: (
        <div className="flex items-center space-x-2 text-red-500">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </div>
      ),
      danger: true,
    },
  ]

  const notificationItems = [
    {
      key: "1",
      label: (
        <div className="p-2">
          <div className="font-medium">New appointment request</div>
          <div className="text-sm text-gray-500">John Doe - 2:00 PM today</div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="p-2">
          <div className="font-medium">Patient uploaded reports</div>
          <div className="text-sm text-gray-500">Sarah Wilson - Lab results</div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="p-2">
          <div className="font-medium">Upcoming video call</div>
          <div className="text-sm text-gray-500">Mike Johnson in 30 minutes</div>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "view-all",
      label: (
        <div className="text-center p-2">
          <Button type="link" className="text-emerald-500">
            View All Notifications
          </Button>
        </div>
      ),
    },
  ]

  const handleProfileMenuClick = ({ key }) => {
    console.log(`[v0] Profile menu clicked: ${key}`)
    if (key === "logout") {
      // Handle logout logic
      console.log("[v0] Logging out...")
    }
  }

  const handleSearch = (value) => {
    console.log(`[v0] Searching for: ${value}`)
    // Handle search logic
  }

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-800 shadow-lg border-b border-gray-700 sticky top-0 z-20"
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Page Title and Search */}
        <div className="flex items-center space-x-6">
          <div>
            <h1 className="text-xl font-semibold text-white capitalize">{currentPage.replace("-", " ")}</h1>
            <p className="text-sm text-gray-400">
              {currentPage === "dashboard" && "Welcome back, Dr. Smith"}
              {currentPage === "patients" && "Manage your patients"}
              {currentPage === "appointments" && "Today's schedule"}
              {currentPage === "consultations" && "Patient consultations"}
              {currentPage === "video-calls" && "Video conferences"}
              {currentPage === "reports" && "Medical reports and analytics"}
            </p>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <Input.Search
              placeholder="Search patients, appointments..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onSearch={handleSearch}
              className="w-80"
              style={{
                backgroundColor: "#374151",
                borderColor: "#4B5563",
              }}
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Quick Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button type="primary" className="bg-emerald-600 hover:bg-emerald-700 border-emerald-600">
              New Appointment
            </Button>
          </div>

          {/* Notifications */}
          <Dropdown
            menu={{ items: notificationItems }}
            placement="bottomRight"
            trigger={["click"]}
            overlayClassName="notification-dropdown"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors relative"
            >
              <Badge count={3} size="small" offset={[-2, 2]}>
                <Bell className="w-5 h-5" />
              </Badge>
            </motion.button>
          </Dropdown>

          {/* Profile Dropdown */}
          <Dropdown
            menu={{ items: profileMenuItems, onClick: handleProfileMenuClick }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-lg p-2 transition-colors"
            >
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-white">Dr. Sarah Smith</div>
                <div className="text-xs text-emerald-400">Cardiologist</div>
              </div>
              <Avatar size={40} src="/placeholder-rvofa.png" className="bg-emerald-500 border-2 border-emerald-400">
                DS
              </Avatar>
            </motion.div>
          </Dropdown>
        </div>
      </div>
    </motion.div>
  )
}

export default DoctorHeader
