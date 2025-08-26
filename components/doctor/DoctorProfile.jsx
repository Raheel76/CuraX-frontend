"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Award, Edit } from "lucide-react"
import { Avatar, Button } from "antd"

const DoctorProfile = ({ onEditProfile }) => {
  const doctorData = {
    name: "Dr. Sarah Smith",
    email: "dr.sarah@curax.com",
    phone: "+1 234-567-8900",
    specialization: "Cardiology",
    license: "MD123456789",
    avatar: "/placeholder-rvofa.png",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg p-4 border border-gray-700"
    >
      <div className="flex flex-col items-center text-center">
        <Avatar size={64} src={doctorData.avatar} className="mb-3">
          DS
        </Avatar>

        <h3 className="text-white font-semibold text-lg mb-1">{doctorData.name}</h3>
        <p className="text-emerald-400 text-sm mb-3">{doctorData.specialization}</p>

        <div className="w-full space-y-2 mb-4">
          <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs">
            <Mail className="w-3 h-3" />
            <span className="truncate">{doctorData.email}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs">
            <Phone className="w-3 h-3" />
            <span>{doctorData.phone}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs">
            <Award className="w-3 h-3" />
            <span>{doctorData.license}</span>
          </div>
        </div>

        <Button
          size="small"
          className="bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 w-full"
          icon={<Edit className="w-3 h-3" />}
          onClick={onEditProfile}
        >
          Edit Profile
        </Button>
      </div>
    </motion.div>
  )
}

export default DoctorProfile
