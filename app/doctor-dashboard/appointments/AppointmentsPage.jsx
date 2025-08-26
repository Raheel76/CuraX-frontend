"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Search, Phone, MessageSquare, Video } from "lucide-react"
import {
  Calendar as AntCalendar,
  Card,
  Button,
  Table,
  Tag,
  Avatar,
  Select,
  Input,
  Modal,
  Form,
  DatePicker,
  TimePicker,
  Statistic,
} from "antd"
import dayjs from "dayjs"

const AppointmentsPage = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [viewMode, setViewMode] = useState("list")
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const appointmentsData = [
    {
      key: "1",
      id: "A001",
      patient: "John Doe",
      patientId: "P001",
      date: "2024-03-15",
      time: "10:00 AM",
      duration: "30 min",
      type: "Consultation",
      status: "confirmed",
      notes: "Follow-up for hypertension treatment",
      avatar: "/placeholder-rvofa.png",
      phone: "+1 234-567-8901",
      isVideoCall: false,
    },
    {
      key: "2",
      id: "A002",
      patient: "Jane Smith",
      patientId: "P002",
      date: "2024-03-15",
      time: "11:30 AM",
      duration: "45 min",
      type: "Follow-up",
      status: "pending",
      notes: "Diabetes management review",
      avatar: "/placeholder-rvofa.png",
      phone: "+1 234-567-8902",
      isVideoCall: true,
    },
    {
      key: "3",
      id: "A003",
      patient: "Mike Johnson",
      patientId: "P003",
      date: "2024-03-15",
      time: "2:00 PM",
      duration: "30 min",
      type: "Check-up",
      status: "confirmed",
      notes: "Routine asthma check-up",
      avatar: "/placeholder-rvofa.png",
      phone: "+1 234-567-8903",
      isVideoCall: false,
    },
    {
      key: "4",
      id: "A004",
      patient: "Sarah Wilson",
      patientId: "P004",
      date: "2024-03-15",
      time: "3:30 PM",
      duration: "60 min",
      type: "Consultation",
      status: "completed",
      notes: "Arthritis treatment plan discussion",
      avatar: "/placeholder-rvofa.png",
      phone: "+1 234-567-8904",
      isVideoCall: false,
    },
  ]

  const appointmentStats = [
    { title: "Today's Appointments", value: 8, color: "#10b981" },
    { title: "This Week", value: 32, color: "#3b82f6" },
    { title: "Pending Confirmations", value: 5, color: "#f59e0b" },
    { title: "Completed Today", value: 3, color: "#8b5cf6" },
  ]

  const columns = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (text, record) => (
        <div>
          <div className="text-white font-medium">{text}</div>
          <div className="text-gray-400 text-sm">{record.duration}</div>
        </div>
      ),
    },
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
            <div className="text-gray-400 text-sm">ID: {record.patientId}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text, record) => (
        <div className="flex items-center space-x-2">
          <span className="text-gray-300">{text}</span>
          {record.isVideoCall && <Video className="w-4 h-4 text-blue-400" />}
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const colors = {
          confirmed: "green",
          pending: "orange",
          completed: "blue",
          cancelled: "red",
        }
        return <Tag color={colors[status]}>{status.toUpperCase()}</Tag>
      },
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
      render: (text) => <span className="text-gray-300 text-sm">{text}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex space-x-2">
          {record.status === "confirmed" && (
            <Button size="small" type="primary" className="bg-emerald-600">
              Start
            </Button>
          )}
          {record.isVideoCall ? (
            <Button
              size="small"
              icon={<Video className="w-3 h-3" />}
              className="bg-blue-600 text-white border-blue-600"
            >
              Join
            </Button>
          ) : (
            <Button size="small" icon={<Phone className="w-3 h-3" />}>
              Call
            </Button>
          )}
          <Button size="small" icon={<MessageSquare className="w-3 h-3" />}>
            Chat
          </Button>
        </div>
      ),
    },
  ]

  const filteredAppointments = appointmentsData.filter((appointment) => {
    const matchesSearch =
      appointment.patient.toLowerCase().includes(searchText.toLowerCase()) ||
      appointment.type.toLowerCase().includes(searchText.toLowerCase()) ||
      appointment.id.toLowerCase().includes(searchText.toLowerCase())

    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter
    const matchesDate = appointment.date === selectedDate.format("YYYY-MM-DD")

    return matchesSearch && matchesStatus && matchesDate
  })

  const onDateSelect = (date) => {
    setSelectedDate(date)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Appointments</h1>
          <p className="text-gray-400 mt-1">Manage your daily schedule</p>
        </div>
        <div className="flex space-x-3">
          <Button
            onClick={() => setViewMode(viewMode === "list" ? "calendar" : "list")}
            className="bg-gray-700 text-white border-gray-600"
          >
            {viewMode === "list" ? "Calendar View" : "List View"}
          </Button>
          <Button
            type="primary"
            className="bg-emerald-600 hover:bg-emerald-700"
            icon={<Plus className="w-4 h-4" />}
            onClick={() => setIsModalVisible(true)}
          >
            New Appointment
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {appointmentStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-gray-800 border-gray-700">
              <Statistic
                title={<span className="text-gray-400">{stat.title}</span>}
                value={stat.value}
                valueStyle={{ color: stat.color, fontSize: "24px", fontWeight: "bold" }}
              />
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-gray-800 border-gray-700">
            <AntCalendar fullscreen={false} value={selectedDate} onSelect={onDateSelect} className="doctor-calendar" />
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Filters */}
          <Card className="bg-gray-800 border-gray-700">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Input
                  placeholder="Search appointments..."
                  prefix={<Search className="w-4 h-4 text-gray-400" />}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full md:w-80"
                  style={{ backgroundColor: "#374151", borderColor: "#4B5563" }}
                />
                <Select
                  value={statusFilter}
                  onChange={setStatusFilter}
                  className="w-full md:w-40"
                  options={[
                    { value: "all", label: "All Status" },
                    { value: "confirmed", label: "Confirmed" },
                    { value: "pending", label: "Pending" },
                    { value: "completed", label: "Completed" },
                  ]}
                />
              </div>
              <div className="text-white">
                <span className="font-medium">
                  {selectedDate.format("MMMM DD, YYYY")} - {filteredAppointments.length} appointments
                </span>
              </div>
            </div>
          </Card>

          {/* Appointments List */}
          <Card className="bg-gray-800 border-gray-700">
            <Table
              columns={columns}
              dataSource={filteredAppointments}
              pagination={false}
              className="doctor-appointments-table"
            />
          </Card>
        </div>
      </div>

      {/* New Appointment Modal */}
      <Modal
        title={<span className="text-white">Schedule New Appointment</span>}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" className="bg-emerald-600">
            Schedule Appointment
          </Button>,
        ]}
        width={600}
      >
        <Form layout="vertical" className="space-y-4">
          <Form.Item label={<span className="text-white">Patient</span>}>
            <Select
              placeholder="Select patient"
              className="w-full"
              options={[
                { value: "P001", label: "John Doe" },
                { value: "P002", label: "Jane Smith" },
                { value: "P003", label: "Mike Johnson" },
                { value: "P004", label: "Sarah Wilson" },
              ]}
            />
          </Form.Item>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item label={<span className="text-white">Date</span>}>
              <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item label={<span className="text-white">Time</span>}>
              <TimePicker className="w-full" format="HH:mm" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item label={<span className="text-white">Type</span>}>
              <Select
                placeholder="Appointment type"
                options={[
                  { value: "consultation", label: "Consultation" },
                  { value: "follow-up", label: "Follow-up" },
                  { value: "check-up", label: "Check-up" },
                  { value: "emergency", label: "Emergency" },
                ]}
              />
            </Form.Item>
            <Form.Item label={<span className="text-white">Duration</span>}>
              <Select
                placeholder="Duration"
                options={[
                  { value: "30", label: "30 minutes" },
                  { value: "45", label: "45 minutes" },
                  { value: "60", label: "1 hour" },
                  { value: "90", label: "1.5 hours" },
                ]}
              />
            </Form.Item>
          </div>

          <Form.Item label={<span className="text-white">Notes</span>}>
            <Input.TextArea rows={3} placeholder="Additional notes or instructions..." />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default AppointmentsPage
