"use client"

import { motion } from "framer-motion"
import { Users, Calendar, TrendingUp, Activity, Clock } from "lucide-react"

const AdminDashboard = () => {
  const stats = [
    { title: "Total Patients", value: "12,543", change: "+12%", icon: Users, color: "text-blue-400" },
    { title: "Appointments Today", value: "89", change: "+5%", icon: Calendar, color: "text-green-400" },
    { title: "Active Doctors", value: "156", change: "+3%", icon: Activity, color: "text-purple-400" },
    { title: "Revenue", value: "$45,678", change: "+18%", icon: TrendingUp, color: "text-emerald-400" },
  ]

  const recentActivities = [
    { action: "New patient registered", time: "2 minutes ago", type: "success" },
    { action: "Appointment scheduled", time: "5 minutes ago", type: "info" },
    { action: "Doctor added to system", time: "10 minutes ago", type: "success" },
    { action: "Payment processed", time: "15 minutes ago", type: "success" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <div className="flex items-center space-x-2 text-gray-400">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Last updated: 2 minutes ago</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                <p className="text-green-400 text-sm mt-1">{stat.change} from last month</p>
              </div>
              <div className={`p-3 rounded-lg bg-gray-700 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-2 h-2 rounded-full ${activity.type === "success" ? "bg-green-400" : "bg-blue-400"}`}
                />
                <span className="text-gray-300">{activity.action}</span>
              </div>
              <span className="text-gray-500 text-sm">{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
