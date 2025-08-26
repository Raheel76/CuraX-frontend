"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Clock, MessageSquare, Star, TrendingUp, Activity, Phone } from "lucide-react"
import { Card, Progress, Button, Table, Tag, Avatar } from "antd"

const DoctorDashboard = () => {
  const stats = [
    { title: "Today's Appointments", value: "8", icon: Calendar, color: "text-blue-400", change: "+2" },
    { title: "Total Patients", value: "234", icon: Users, color: "text-emerald-400", change: "+12" },
    { title: "Avg. Rating", value: "4.8", icon: Star, color: "text-yellow-400", change: "+0.2" },
    { title: "Consultations", value: "156", icon: MessageSquare, color: "text-purple-400", change: "+8" },
  ]

  const upcomingAppointments = [
    {
      key: "1",
      patient: "John Doe",
      time: "10:00 AM",
      type: "Consultation",
      status: "confirmed",
      avatar: "/placeholder-rvofa.png",
      phone: "+1 234-567-8901",
    },
    {
      key: "2",
      patient: "Jane Smith",
      time: "11:30 AM",
      type: "Follow-up",
      status: "pending",
      avatar: "/placeholder-rvofa.png",
      phone: "+1 234-567-8902",
    },
    {
      key: "3",
      patient: "Mike Johnson",
      time: "2:00 PM",
      type: "Check-up",
      status: "confirmed",
      avatar: "/placeholder-rvofa.png",
      phone: "+1 234-567-8903",
    },
    {
      key: "4",
      patient: "Sarah Wilson",
      time: "3:30 PM",
      type: "Consultation",
      status: "confirmed",
      avatar: "/placeholder-rvofa.png",
      phone: "+1 234-567-8904",
    },
  ]

  const recentActivities = [
    { action: "Completed consultation", patient: "Emma Davis", time: "2 hours ago" },
    { action: "Prescribed medication", patient: "Robert Brown", time: "4 hours ago" },
    { action: "Updated treatment plan", patient: "Lisa Garcia", time: "6 hours ago" },
    { action: "Scheduled follow-up", patient: "David Miller", time: "1 day ago" },
  ]

  const patientProgress = [
    { name: "Recovery Rate", percentage: 85, color: "#10b981" },
    { name: "Treatment Compliance", percentage: 92, color: "#3b82f6" },
    { name: "Patient Satisfaction", percentage: 96, color: "#f59e0b" },
    { name: "Follow-up Rate", percentage: 78, color: "#8b5cf6" },
  ]

  const appointmentColumns = [
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      render: (text, record) => (
        <div className="flex items-center space-x-3">
          <Avatar src={record.avatar} size={40}>
            {text
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Avatar>
          <div>
            <div className="text-white font-medium">{text}</div>
            <div className="text-gray-400 text-sm">{record.phone}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <span className="text-gray-300">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={status === "confirmed" ? "green" : "orange"}>{status.toUpperCase()}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button size="small" type="primary" className="bg-emerald-600">
            Start
          </Button>
          <Button size="small" icon={<Phone className="w-3 h-3" />}>
            Call
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome back, Dr. Smith</h1>
          <p className="text-gray-400 mt-1">Here's what's happening with your patients today</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Today, March 15, 2024</span>
          </div>
          <Button type="primary" className="bg-emerald-600 hover:bg-emerald-700">
            New Appointment
          </Button>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 text-emerald-400 mr-1" />
                    <span className="text-emerald-400 text-xs">{stat.change} from yesterday</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gray-700 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <div className="lg:col-span-2">
          <Card
            title={<span className="text-white text-lg font-semibold">Today's Appointments</span>}
            className="bg-gray-800 border-gray-700"
            extra={
              <Button type="link" className="text-emerald-400">
                View All
              </Button>
            }
          >
            <Table
              columns={appointmentColumns}
              dataSource={upcomingAppointments}
              pagination={false}
              className="doctor-appointments-table"
              size="middle"
            />
          </Card>
        </div>

        {/* Patient Progress */}
        <div>
          <Card
            title={<span className="text-white text-lg font-semibold">Patient Progress</span>}
            className="bg-gray-800 border-gray-700"
          >
            <div className="space-y-4">
              {patientProgress.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 text-sm">{item.name}</span>
                    <span className="text-white text-sm font-medium">{item.percentage}%</span>
                  </div>
                  <Progress percent={item.percentage} strokeColor={item.color} trailColor="#374151" showInfo={false} />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card
          title={<span className="text-white text-lg font-semibold">Recent Activities</span>}
          className="bg-gray-800 border-gray-700"
        >
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-gray-400 text-xs">Patient: {activity.patient}</p>
                </div>
                <span className="text-gray-500 text-xs">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card
          title={<span className="text-white text-lg font-semibold">Quick Actions</span>}
          className="bg-gray-800 border-gray-700"
        >
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="primary"
              className="bg-emerald-600 hover:bg-emerald-700 h-12"
              icon={<Calendar className="w-4 h-4" />}
            >
              Schedule Appointment
            </Button>
            <Button
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600 h-12"
              icon={<Users className="w-4 h-4" />}
            >
              Add Patient
            </Button>
            <Button
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600 h-12"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Send Message
            </Button>
            <Button
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600 h-12"
              icon={<Activity className="w-4 h-4" />}
            >
              View Reports
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DoctorDashboard
