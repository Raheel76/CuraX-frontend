"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Plus,
  MessageSquare,
  Calendar,
  Eye,
} from "lucide-react";
import {
  Table,
  Input,
  Button,
  Tag,
  Avatar,
  Select,
  Modal,
  Card,
  Statistic,
} from "antd";

const PatientsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patientsData = [
    {
      key: "1",
      id: "P001",
      name: "John Doe",
      age: 45,
      gender: "Male",
      phone: "+1 234-567-8901",
      email: "john.doe@email.com",
      condition: "Hypertension",
      lastVisit: "2024-03-10",
      nextAppointment: "2024-03-20",
      status: "active",
      avatar: "/placeholder-rvofa.png",
      bloodType: "O+",
      allergies: ["Penicillin"],
      medications: ["Lisinopril", "Metformin"],
    },
    {
      key: "2",
      id: "P002",
      name: "Jane Smith",
      age: 32,
      gender: "Female",
      phone: "+1 234-567-8902",
      email: "jane.smith@email.com",
      condition: "Diabetes Type 2",
      lastVisit: "2024-03-12",
      nextAppointment: "2024-03-18",
      status: "active",
      avatar: "/placeholder-rvofa.png",
      bloodType: "A+",
      allergies: ["None"],
      medications: ["Metformin", "Insulin"],
    },
    {
      key: "3",
      id: "P003",
      name: "Mike Johnson",
      age: 28,
      gender: "Male",
      phone: "+1 234-567-8903",
      email: "mike.johnson@email.com",
      condition: "Asthma",
      lastVisit: "2024-03-08",
      nextAppointment: "2024-03-25",
      status: "inactive",
      avatar: "/placeholder-rvofa.png",
      bloodType: "B+",
      allergies: ["Dust", "Pollen"],
      medications: ["Albuterol", "Fluticasone"],
    },
    {
      key: "4",
      id: "P004",
      name: "Sarah Wilson",
      age: 55,
      gender: "Female",
      phone: "+1 234-567-8904",
      email: "sarah.wilson@email.com",
      condition: "Arthritis",
      lastVisit: "2024-03-14",
      nextAppointment: "2024-03-22",
      status: "active",
      avatar: "/placeholder-rvofa.png",
      bloodType: "AB+",
      allergies: ["Aspirin"],
      medications: ["Ibuprofen", "Glucosamine"],
    },
  ];

  const patientStats = [
    { title: "Total Patients", value: 234, color: "#10b981" },
    { title: "Active Patients", value: 189, color: "#3b82f6" },
    { title: "New This Month", value: 12, color: "#f59e0b" },
    { title: "Follow-ups Due", value: 23, color: "#ef4444" },
  ];

  const columns = [
    {
      title: "Patient",
      dataIndex: "name",
      key: "name",
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
            <div className="text-gray-400 text-sm">ID: {record.id}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Contact",
      key: "contact",
      render: (_, record) => (
        <div>
          <div className="text-white text-sm">{record.phone}</div>
          <div className="text-gray-400 text-xs">{record.email}</div>
        </div>
      ),
    },
    {
      title: "Age/Gender",
      key: "demographics",
      render: (_, record) => (
        <div className="text-white">
          {record.age} years, {record.gender}
        </div>
      ),
    },
    {
      title: "Condition",
      dataIndex: "condition",
      key: "condition",
      render: (text) => <span className="text-gray-300">{text}</span>,
    },
    {
      title: "Last Visit",
      dataIndex: "lastVisit",
      key: "lastVisit",
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "active" ? "green" : "orange"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button
            size="small"
            icon={<Eye className="w-3 h-3" />}
            onClick={() => viewPatient(record)}
          >
            View
          </Button>
          <Button
            size="small"
            type="primary"
            className="bg-emerald-600"
            icon={<Calendar className="w-3 h-3" />}
          >
            Book
          </Button>
          <Button size="small" icon={<MessageSquare className="w-3 h-3" />}>
            Chat
          </Button>
        </div>
      ),
    },
  ];

  const viewPatient = (patient) => {
    setSelectedPatient(patient);
    setIsModalVisible(true);
  };

  const filteredPatients = patientsData.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchText.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchText.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchText.toLowerCase());

    const matchesFilter =
      selectedFilter === "all" || patient.status === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">My Patients</h1>
          <p className="text-gray-400 mt-1">Manage and monitor your patients</p>
        </div>
        <Button
          type="primary"
          className="bg-emerald-600 hover:bg-emerald-700"
          icon={<Plus className="w-4 h-4" />}
        >
          Add New Patient
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {patientStats.map((stat, index) => (
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
                valueStyle={{
                  color: stat.color,
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              />
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters and Search */}
      <Card className="bg-gray-800 border-gray-700">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Input
              placeholder="Search patients..."
              prefix={<Search className="w-4 h-4 text-gray-400" />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full md:w-80"
              style={{ backgroundColor: "#374151", borderColor: "#4B5563" }}
            />
            <Select
              value={selectedFilter}
              onChange={setSelectedFilter}
              className="w-full md:w-40"
              options={[
                { value: "all", label: "All Patients" },
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
            />
          </div>
          <div className="flex gap-2">
            <Button icon={<Filter className="w-4 h-4" />}>More Filters</Button>
          </div>
        </div>
      </Card>

      {/* Patients Table */}
      <Card className="bg-gray-800 border-gray-700">
        <Table
          columns={columns}
          dataSource={filteredPatients}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} patients`,
          }}
          className="doctor-patients-table"
        />
      </Card>

      {/* Patient Details Modal */}
      <Modal
        title={<span className="text-white">Patient Details</span>}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
          <Button key="edit" type="primary" className="bg-emerald-600">
            Edit Patient
          </Button>,
        ]}
        width={800}
        className="patient-details-modal"
      >
        {selectedPatient && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar src={selectedPatient.avatar} size={80}>
                {selectedPatient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </Avatar>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {selectedPatient.name}
                </h3>
                <p className="text-gray-400">
                  Patient ID: {selectedPatient.id}
                </p>
                <Tag
                  color={
                    selectedPatient.status === "active" ? "green" : "orange"
                  }
                >
                  {selectedPatient.status.toUpperCase()}
                </Tag>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-3">
                  Personal Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-400">Age:</span>{" "}
                    <span className="text-white">
                      {selectedPatient.age} years
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Gender:</span>{" "}
                    <span className="text-white">{selectedPatient.gender}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Blood Type:</span>{" "}
                    <span className="text-white">
                      {selectedPatient.bloodType}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Phone:</span>{" "}
                    <span className="text-white">{selectedPatient.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Email:</span>{" "}
                    <span className="text-white">{selectedPatient.email}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">
                  Medical Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-400">Primary Condition:</span>{" "}
                    <span className="text-white">
                      {selectedPatient.condition}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Last Visit:</span>{" "}
                    <span className="text-white">
                      {selectedPatient.lastVisit}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Next Appointment:</span>{" "}
                    <span className="text-white">
                      {selectedPatient.nextAppointment}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Allergies:</span>
                    <div className="mt-1">
                      {selectedPatient.allergies.map((allergy, index) => (
                        <Tag key={index} color="red" className="mb-1">
                          {allergy}
                        </Tag>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Current Medications:</span>
                    <div className="mt-1">
                      {selectedPatient.medications.map((medication, index) => (
                        <Tag key={index} color="blue" className="mb-1">
                          {medication}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PatientsPage;
