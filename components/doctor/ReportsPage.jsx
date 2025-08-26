"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Download, Eye, Filter, TrendingUp, Activity } from "lucide-react"
import { Card, Table, Button, Select, DatePicker, Statistic, Progress, Tag } from "antd"
import dayjs from "dayjs"

const ReportsPage = () => {
  const [dateRange, setDateRange] = useState([dayjs().subtract(30, "day"), dayjs()])
  const [reportType, setReportType] = useState("all")

  const reportStats = [
    { title: "Total Reports", value: 156, change: "+12%", color: "#10b981" },
    { title: "Patients Treated", value: 89, change: "+8%", color: "#3b82f6" },
    { title: "Success Rate", value: "94%", change: "+2%", color: "#f59e0b" },
    { title: "Avg. Treatment Time", value: "45min", change: "-5%", color: "#8b5cf6" },
  ]

  const reportsData = [
    {
      key: "1",
      id: "R001",
      patient: "John Doe",
      type: "Lab Results",
      date: "2024-03-15",
      status: "completed",
      priority: "normal",
      findings: "Blood pressure within normal range",
    },
    {
      key: "2",
      id: "R002",
      patient: "Jane Smith",
      type: "X-Ray",
      date: "2024-03-14",
      status: "pending",
      priority: "high",
      findings: "Awaiting radiologist review",
    },
    {
      key: "3",
      id: "R003",
      patient: "Mike Johnson",
      type: "Blood Test",
      date: "2024-03-13",
      status: "completed",
      priority: "normal",
      findings: "Glucose levels elevated, recommend follow-up",
    },
    {
      key: "4",
      id: "R004",
      patient: "Sarah Wilson",
      type: "MRI Scan",
      date: "2024-03-12",
      status: "completed",
      priority: "urgent",
      findings: "No abnormalities detected",
    },
  ]

  const treatmentOutcomes = [
    { condition: "Hypertension", success: 95, total: 45 },
    { condition: "Diabetes", success: 88, total: 32 },
    { condition: "Asthma", success: 92, total: 28 },
    { condition: "Arthritis", success: 85, total: 20 },
  ]

  const columns = [
    {
      title: "Report ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <span className="text-emerald-400 font-mono">{text}</span>,
    },
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      render: (text) => <span className="text-white font-medium">{text}</span>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <span className="text-gray-300">{text}</span>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority) => {
        const colors = { normal: "blue", high: "orange", urgent: "red" }
        return <Tag color={colors[priority]}>{priority.toUpperCase()}</Tag>
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const colors = { completed: "green", pending: "orange", reviewing: "blue" }
        return <Tag color={colors[status]}>{status.toUpperCase()}</Tag>
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button size="small" icon={<Eye className="w-3 h-3" />}>
            View
          </Button>
          <Button size="small" icon={<Download className="w-3 h-3" />}>
            Download
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Medical Reports</h1>
          <p className="text-gray-400 mt-1">View and manage patient reports and analytics</p>
        </div>
        <div className="flex space-x-3">
          <Button icon={<Filter className="w-4 h-4" />} className="bg-gray-700 text-white border-gray-600">
            Advanced Filters
          </Button>
          <Button
            type="primary"
            className="bg-emerald-600 hover:bg-emerald-700"
            icon={<FileText className="w-4 h-4" />}
          >
            Generate Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportStats.map((stat, index) => (
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
                suffix={
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 text-emerald-400 mr-1" />
                    <span className="text-emerald-400 text-xs">{stat.change}</span>
                  </div>
                }
              />
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reports Table */}
        <div className="lg:col-span-2">
          <Card
            title={<span className="text-white text-lg font-semibold">Recent Reports</span>}
            className="bg-gray-800 border-gray-700"
            extra={
              <div className="flex space-x-2">
                <Select
                  value={reportType}
                  onChange={setReportType}
                  className="w-32"
                  options={[
                    { value: "all", label: "All Types" },
                    { value: "lab", label: "Lab Results" },
                    { value: "imaging", label: "Imaging" },
                    { value: "pathology", label: "Pathology" },
                  ]}
                />
                <DatePicker.RangePicker
                  value={dateRange}
                  onChange={setDateRange}
                  className="bg-gray-700 border-gray-600"
                />
              </div>
            }
          >
            <Table
              columns={columns}
              dataSource={reportsData}
              pagination={{ pageSize: 10 }}
              className="doctor-reports-table"
            />
          </Card>
        </div>

        {/* Treatment Outcomes */}
        <div>
          <Card
            title={<span className="text-white text-lg font-semibold">Treatment Outcomes</span>}
            className="bg-gray-800 border-gray-700"
          >
            <div className="space-y-4">
              {treatmentOutcomes.map((outcome, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{outcome.condition}</span>
                    <span className="text-white text-sm font-medium">
                      {outcome.success}/{outcome.total} ({Math.round((outcome.success / outcome.total) * 100)}%)
                    </span>
                  </div>
                  <Progress
                    percent={Math.round((outcome.success / outcome.total) * 100)}
                    strokeColor="#10b981"
                    trailColor="#374151"
                    showInfo={false}
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card
          title={<span className="text-white text-lg font-semibold">Monthly Report Trends</span>}
          className="bg-gray-800 border-gray-700"
        >
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <Activity className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Chart visualization would be implemented here</p>
              <p className="text-gray-500 text-sm">Integration with charting library needed</p>
            </div>
          </div>
        </Card>

        <Card
          title={<span className="text-white text-lg font-semibold">Patient Demographics</span>}
          className="bg-gray-800 border-gray-700"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Age 18-30</span>
              <span className="text-white">25%</span>
            </div>
            <Progress percent={25} strokeColor="#3b82f6" trailColor="#374151" showInfo={false} />

            <div className="flex justify-between items-center">
              <span className="text-gray-300">Age 31-50</span>
              <span className="text-white">45%</span>
            </div>
            <Progress percent={45} strokeColor="#10b981" trailColor="#374151" showInfo={false} />

            <div className="flex justify-between items-center">
              <span className="text-gray-300">Age 51+</span>
              <span className="text-white">30%</span>
            </div>
            <Progress percent={30} strokeColor="#f59e0b" trailColor="#374151" showInfo={false} />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ReportsPage
