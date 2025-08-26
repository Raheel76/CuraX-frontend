"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Bell, Shield, Calendar, MessageSquare, Video, Save, Camera, Key } from "lucide-react"
import { Card, Form, Input, Button, Switch, Select, TimePicker, Divider, Avatar, Upload, message } from "antd"
import dayjs from "dayjs"

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile")
  const [form] = Form.useForm()

  const settingsTabs = [
    { key: "profile", label: "Profile", icon: User },
    { key: "notifications", label: "Notifications", icon: Bell },
    { key: "security", label: "Security", icon: Shield },
    { key: "schedule", label: "Schedule", icon: Calendar },
    { key: "communication", label: "Communication", icon: MessageSquare },
    { key: "video", label: "Video Settings", icon: Video },
  ]

  const handleSave = (values) => {
    console.log("[v0] Saving settings:", values)
    message.success("Settings saved successfully!")
  }

  const handleAvatarChange = (info) => {
    if (info.file.status === "done") {
      console.log("[v0] Avatar uploaded successfully")
      message.success("Profile picture updated!")
    }
  }

  const renderProfileSettings = () => (
    <Card className="bg-gray-800 border-gray-700">
      <Form form={form} layout="vertical" onFinish={handleSave} className="space-y-4">
        <div className="flex items-center space-x-6 mb-6">
          <Avatar size={100} src="/placeholder-rvofa.png">
            DS
          </Avatar>
          <div>
            <h3 className="text-white text-lg font-medium mb-2">Profile Picture</h3>
            <Upload onChange={handleAvatarChange} showUploadList={false}>
              <Button className="bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700">
                Change Picture
              </Button>
            </Upload>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form.Item label={<span className="text-white">First Name</span>} name="firstName" initialValue="Sarah">
            <Input className="bg-gray-700 border-gray-600 text-white" />
          </Form.Item>
          <Form.Item label={<span className="text-white">Last Name</span>} name="lastName" initialValue="Smith">
            <Input className="bg-gray-700 border-gray-600 text-white" />
          </Form.Item>
          <Form.Item label={<span className="text-white">Email</span>} name="email" initialValue="dr.sarah@curax.com">
            <Input className="bg-gray-700 border-gray-600 text-white" />
          </Form.Item>
          <Form.Item label={<span className="text-white">Phone</span>} name="phone" initialValue="+1 234-567-8900">
            <Input className="bg-gray-700 border-gray-600 text-white" />
          </Form.Item>
          <Form.Item
            label={<span className="text-white">Specialization</span>}
            name="specialization"
            initialValue="cardiology"
          >
            <Select
              className="bg-gray-700"
              options={[
                { value: "cardiology", label: "Cardiology" },
                { value: "neurology", label: "Neurology" },
                { value: "orthopedics", label: "Orthopedics" },
                { value: "pediatrics", label: "Pediatrics" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label={<span className="text-white">License Number</span>}
            name="license"
            initialValue="MD123456789"
          >
            <Input className="bg-gray-700 border-gray-600 text-white" />
          </Form.Item>
        </div>

        <Form.Item label={<span className="text-white">Bio</span>} name="bio">
          <Input.TextArea
            rows={4}
            className="bg-gray-700 border-gray-600 text-white"
            placeholder="Tell patients about yourself..."
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="bg-emerald-600 hover:bg-emerald-700" icon={<Save />}>
          Save Profile
        </Button>
      </Form>
    </Card>
  )

  const renderNotificationSettings = () => (
    <Card className="bg-gray-800 border-gray-700">
      <div className="space-y-6">
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Email Notifications</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white">New Appointments</div>
                <div className="text-gray-400 text-sm">Get notified when patients book appointments</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white">Patient Messages</div>
                <div className="text-gray-400 text-sm">Receive email alerts for new patient messages</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white">Report Updates</div>
                <div className="text-gray-400 text-sm">Get notified when lab results are available</div>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        <Divider className="border-gray-600" />

        <div>
          <h3 className="text-white text-lg font-medium mb-4">Push Notifications</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white">Urgent Messages</div>
                <div className="text-gray-400 text-sm">Immediate alerts for urgent patient communications</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white">Appointment Reminders</div>
                <div className="text-gray-400 text-sm">Reminders 30 minutes before appointments</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <Button type="primary" className="bg-emerald-600 hover:bg-emerald-700" icon={<Save />}>
          Save Notification Settings
        </Button>
      </div>
    </Card>
  )

  const renderScheduleSettings = () => (
    <Card className="bg-gray-800 border-gray-700">
      <div className="space-y-6">
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Working Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white text-sm mb-2 block">Start Time</label>
              <TimePicker
                defaultValue={dayjs("09:00", "HH:mm")}
                format="HH:mm"
                className="w-full bg-gray-700 border-gray-600"
              />
            </div>
            <div>
              <label className="text-white text-sm mb-2 block">End Time</label>
              <TimePicker
                defaultValue={dayjs("17:00", "HH:mm")}
                format="HH:mm"
                className="w-full bg-gray-700 border-gray-600"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-medium mb-4">Working Days</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div key={day} className="flex justify-between items-center">
                <span className="text-white text-sm">{day}</span>
                <Switch defaultChecked={!["Saturday", "Sunday"].includes(day)} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-medium mb-4">Appointment Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="text-white text-sm mb-2 block">Default Appointment Duration</label>
              <Select
                defaultValue="30"
                className="w-full"
                options={[
                  { value: "15", label: "15 minutes" },
                  { value: "30", label: "30 minutes" },
                  { value: "45", label: "45 minutes" },
                  { value: "60", label: "1 hour" },
                ]}
              />
            </div>
            <div>
              <label className="text-white text-sm mb-2 block">Buffer Time Between Appointments</label>
              <Select
                defaultValue="10"
                className="w-full"
                options={[
                  { value: "0", label: "No buffer" },
                  { value: "5", label: "5 minutes" },
                  { value: "10", label: "10 minutes" },
                  { value: "15", label: "15 minutes" },
                ]}
              />
            </div>
          </div>
        </div>

        <Button type="primary" className="bg-emerald-600 hover:bg-emerald-700" icon={<Save />}>
          Save Schedule Settings
        </Button>
      </div>
    </Card>
  )

  const renderSecuritySettings = () => (
    <Card className="bg-gray-800 border-gray-700">
      <div className="space-y-6">
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Password & Security</h3>
          <div className="space-y-4">
            <Form layout="vertical">
              <Form.Item label={<span className="text-white">Current Password</span>}>
                <Input.Password className="bg-gray-700 border-gray-600 text-white" />
              </Form.Item>
              <Form.Item label={<span className="text-white">New Password</span>}>
                <Input.Password className="bg-gray-700 border-gray-600 text-white" />
              </Form.Item>
              <Form.Item label={<span className="text-white">Confirm New Password</span>}>
                <Input.Password className="bg-gray-700 border-gray-600 text-white" />
              </Form.Item>
              <Button type="primary" className="bg-emerald-600 hover:bg-emerald-700" icon={<Key />}>
                Update Password
              </Button>
            </Form>
          </div>
        </div>

        <Divider className="border-gray-600" />

        <div>
          <h3 className="text-white text-lg font-medium mb-4">Two-Factor Authentication</h3>
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-white">Enable 2FA</div>
              <div className="text-gray-400 text-sm">Add an extra layer of security to your account</div>
            </div>
            <Switch />
          </div>
        </div>

        <Divider className="border-gray-600" />

        <div>
          <h3 className="text-white text-lg font-medium mb-4">Login Activity</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
              <div>
                <div className="text-white text-sm">Current Session</div>
                <div className="text-gray-400 text-xs">Chrome on Windows • New York, NY</div>
              </div>
              <div className="text-emerald-400 text-xs">Active now</div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
              <div>
                <div className="text-white text-sm">Mobile App</div>
                <div className="text-gray-400 text-xs">iPhone • New York, NY</div>
              </div>
              <div className="text-gray-400 text-xs">2 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )

  const renderCommunicationSettings = () => (
    <Card className="bg-gray-800 border-gray-700">
      <div className="space-y-6">
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Chat Preferences</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white">Auto-reply when offline</div>
                <div className="text-gray-400 text-sm">Send automatic responses when you're unavailable</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white">Read receipts</div>
                <div className="text-gray-400 text-sm">Let patients know when you've read their messages</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white">Typing indicators</div>
                <div className="text-gray-400 text-sm">Show when you're typing a response</div>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        <Divider className="border-gray-600" />

        <div>
          <h3 className="text-white text-lg font-medium mb-4">Quick Response Templates</h3>
          <div className="space-y-3">
            <Input.TextArea
              rows={2}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="Thank you for your message. I'll review your case and get back to you shortly."
            />
            <Input.TextArea
              rows={2}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="Please schedule an appointment for a detailed consultation."
            />
            <Button type="primary" className="bg-emerald-600 hover:bg-emerald-700">
              Save Templates
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )

  const renderVideoSettings = () => (
    <Card className="bg-gray-800 border-gray-700">
      <div className="space-y-6">
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Video Quality</h3>
          <div className="space-y-4">
            <div>
              <label className="text-white text-sm mb-2 block">Default Video Quality</label>
              <Select
                defaultValue="hd"
                className="w-full"
                options={[
                  { value: "sd", label: "Standard Definition (480p)" },
                  { value: "hd", label: "High Definition (720p)" },
                  { value: "fhd", label: "Full HD (1080p)" },
                ]}
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white">Auto-adjust quality</div>
                <div className="text-gray-400 text-sm">Automatically adjust based on connection speed</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <Divider className="border-gray-600" />

        <div>
          <h3 className="text-white text-lg font-medium mb-4">Device Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="text-white text-sm mb-2 block">Default Camera</label>
              <Select
                defaultValue="front"
                className="w-full"
                options={[
                  { value: "front", label: "Front Camera" },
                  { value: "back", label: "Back Camera" },
                  { value: "external", label: "External Webcam" },
                ]}
              />
            </div>
            <div>
              <label className="text-white text-sm mb-2 block">Default Microphone</label>
              <Select
                defaultValue="default"
                className="w-full"
                options={[
                  { value: "default", label: "Default Microphone" },
                  { value: "headset", label: "Bluetooth Headset" },
                  { value: "external", label: "External Microphone" },
                ]}
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white">Test devices before calls</div>
                <div className="text-gray-400 text-sm">Automatically test camera and microphone</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <Button type="primary" className="bg-emerald-600 hover:bg-emerald-700" icon={<Camera />}>
          Test Camera & Microphone
        </Button>
      </div>
    </Card>
  )

  const renderCurrentTab = () => {
    switch (activeTab) {
      case "profile":
        return renderProfileSettings()
      case "notifications":
        return renderNotificationSettings()
      case "schedule":
        return renderScheduleSettings()
      case "security":
        return renderSecuritySettings()
      case "communication":
        return renderCommunicationSettings()
      case "video":
        return renderVideoSettings()
      default:
        return renderProfileSettings()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="bg-gray-800 border-gray-700">
            <div className="space-y-2">
              {settingsTabs.map((tab) => (
                <motion.div
                  key={tab.key}
                  whileHover={{ x: 4 }}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    activeTab === tab.key ? "bg-emerald-600 text-white" : "hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  <tab.icon className={`w-5 h-5 ${activeTab === tab.key ? "text-white" : "text-emerald-400"}`} />
                  <span>{tab.label}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">{renderCurrentTab()}</div>
      </div>
    </div>
  )
}

export default SettingsPage
