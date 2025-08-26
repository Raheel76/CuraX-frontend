"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Video, VideoOff, Mic, MicOff, Phone, PhoneOff, MessageSquare, Share, MoreVertical } from "lucide-react"
import { Button, Card, Avatar, Badge, Dropdown, Input, Drawer } from "antd"

const VideoCallPage = () => {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isCallActive, setIsCallActive] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [participants, setParticipants] = useState([])
  const videoRef = useRef(null)

  const upcomingCalls = [
    {
      id: "1",
      patient: "John Doe",
      time: "10:00 AM",
      duration: "30 min",
      status: "scheduled",
      avatar: "/placeholder-rvofa.png",
      patientId: "P001",
    },
    {
      id: "2",
      patient: "Jane Smith",
      time: "11:30 AM",
      duration: "45 min",
      status: "in-progress",
      avatar: "/placeholder-rvofa.png",
      patientId: "P002",
    },
    {
      id: "3",
      patient: "Mike Johnson",
      time: "2:00 PM",
      duration: "30 min",
      status: "scheduled",
      avatar: "/placeholder-rvofa.png",
      patientId: "P003",
    },
  ]

  const chatMessages = [
    { id: 1, sender: "patient", content: "Can you hear me clearly?", time: "10:32 AM" },
    { id: 2, sender: "doctor", content: "Yes, I can hear you perfectly. How are you feeling today?", time: "10:33 AM" },
    { id: 3, sender: "patient", content: "Much better, thank you!", time: "10:34 AM" },
  ]

  const callActions = [
    {
      key: "record",
      label: "Record Call",
    },
    {
      key: "share-screen",
      label: "Share Screen",
    },
    {
      key: "invite",
      label: "Invite Participant",
    },
    {
      type: "divider",
    },
    {
      key: "settings",
      label: "Call Settings",
    },
  ]

  const startCall = (callId) => {
    console.log(`[v0] Starting call with ID: ${callId}`)
    setIsCallActive(true)
    // Initialize video stream
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch((err) => {
          console.log("[v0] Error accessing media devices:", err)
        })
    }
  }

  const endCall = () => {
    console.log("[v0] Ending call")
    setIsCallActive(false)
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks()
      tracks.forEach((track) => track.stop())
    }
  }

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn)
    console.log(`[v0] Video ${!isVideoOn ? "enabled" : "disabled"}`)
  }

  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn)
    console.log(`[v0] Audio ${!isAudioOn ? "enabled" : "disabled"}`)
  }

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      console.log(`[v0] Sending chat message: ${chatMessage}`)
      setChatMessage("")
    }
  }

  if (isCallActive) {
    return (
      <div className="h-[calc(100vh-8rem)] bg-gray-900 relative">
        {/* Main Video Area */}
        <div className="h-full relative">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="w-full h-full object-cover bg-gray-800"
            style={{ transform: "scaleX(-1)" }}
          />

          {/* Patient Video (Picture-in-Picture) */}
          <div className="absolute top-4 right-4 w-64 h-48 bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-600">
            <div className="w-full h-full flex items-center justify-center">
              <Avatar size={80} src="/placeholder-rvofa.png">
                JD
              </Avatar>
            </div>
            <div className="absolute bottom-2 left-2 text-white text-sm font-medium">John Doe</div>
          </div>

          {/* Call Controls */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-4 bg-gray-800/90 backdrop-blur-sm rounded-full px-6 py-3">
              <Button
                type={isAudioOn ? "default" : "primary"}
                danger={!isAudioOn}
                shape="circle"
                size="large"
                icon={isAudioOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                onClick={toggleAudio}
              />
              <Button
                type={isVideoOn ? "default" : "primary"}
                danger={!isVideoOn}
                shape="circle"
                size="large"
                icon={isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                onClick={toggleVideo}
              />
              <Button
                type="primary"
                danger
                shape="circle"
                size="large"
                icon={<PhoneOff className="w-5 h-5" />}
                onClick={endCall}
              />
              <Button
                type="default"
                shape="circle"
                size="large"
                icon={<MessageSquare className="w-5 h-5" />}
                onClick={() => setShowChat(true)}
              />
              <Button type="default" shape="circle" size="large" icon={<Share className="w-5 h-5" />} />
              <Dropdown menu={{ items: callActions }} trigger={["click"]}>
                <Button type="default" shape="circle" size="large" icon={<MoreVertical className="w-5 h-5" />} />
              </Dropdown>
            </div>
          </div>

          {/* Call Info */}
          <div className="absolute top-4 left-4 bg-gray-800/90 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="text-white font-medium">Video Consultation</div>
            <div className="text-gray-300 text-sm">Duration: 05:23</div>
          </div>
        </div>

        {/* Chat Drawer */}
        <Drawer
          title="Chat"
          placement="right"
          onClose={() => setShowChat(false)}
          open={showChat}
          width={400}
          className="video-call-chat"
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "doctor" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.sender === "doctor" ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <p>{msg.content}</p>
                    <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input
                placeholder="Type a message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onPressEnter={sendChatMessage}
              />
              <Button type="primary" onClick={sendChatMessage} className="bg-emerald-600">
                Send
              </Button>
            </div>
          </div>
        </Drawer>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Video Consultations</h1>
          <p className="text-gray-400 mt-1">Manage your video appointments</p>
        </div>
        <Button type="primary" className="bg-emerald-600 hover:bg-emerald-700" icon={<Video className="w-4 h-4" />}>
          Start Instant Call
        </Button>
      </div>

      {/* Upcoming Calls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {upcomingCalls.map((call) => (
          <motion.div
            key={call.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
          >
            <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <Avatar src={call.avatar} size={60}>
                    {call.patient
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>
                  {call.status === "in-progress" && (
                    <Badge status="processing" className="absolute -top-1 -right-1" color="green" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium text-lg">{call.patient}</h3>
                  <p className="text-gray-400 text-sm">Patient ID: {call.patientId}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-emerald-400 text-sm">{call.time}</span>
                    <span className="text-gray-400 text-sm">{call.duration}</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                {call.status === "scheduled" ? (
                  <Button
                    type="primary"
                    className="bg-emerald-600 hover:bg-emerald-700 flex-1"
                    icon={<Video className="w-4 h-4" />}
                    onClick={() => startCall(call.id)}
                  >
                    Start Call
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    className="bg-blue-600 hover:bg-blue-700 flex-1"
                    icon={<Phone className="w-4 h-4" />}
                    onClick={() => startCall(call.id)}
                  >
                    Join Call
                  </Button>
                )}
                <Button icon={<MessageSquare className="w-4 h-4" />}>Chat</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call History */}
      <Card
        title={<span className="text-white text-lg font-semibold">Recent Video Calls</span>}
        className="bg-gray-800 border-gray-700"
      >
        <div className="space-y-4">
          {[
            { patient: "Emma Davis", date: "March 14, 2024", duration: "25 min", status: "completed" },
            { patient: "Robert Brown", date: "March 13, 2024", duration: "40 min", status: "completed" },
            { patient: "Lisa Garcia", date: "March 12, 2024", duration: "30 min", status: "completed" },
          ].map((call, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Avatar size={40}>
                  {call.patient
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </Avatar>
                <div>
                  <div className="text-white font-medium">{call.patient}</div>
                  <div className="text-gray-400 text-sm">{call.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white text-sm">{call.duration}</div>
                <Badge status="success" text={<span className="text-gray-400 text-xs">Completed</span>} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default VideoCallPage
