"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Search, Phone, Video, MoreVertical, Paperclip, Smile, ImageIcon } from "lucide-react"
import { Input, Avatar, Button, Dropdown, Badge, Upload } from "antd"
import { MessageSquare } from "lucide-react" // Declare MessageSquare here

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState("1")
  const [message, setMessage] = useState("")
  const [searchText, setSearchText] = useState("")
  const messagesEndRef = useRef(null)

  const chatList = [
    {
      id: "1",
      name: "John Doe",
      lastMessage: "Thank you for the prescription, Doctor.",
      time: "2 min ago",
      unread: 2,
      avatar: "/placeholder-rvofa.png",
      online: true,
      patientId: "P001",
    },
    {
      id: "2",
      name: "Jane Smith",
      lastMessage: "When should I take the medication?",
      time: "15 min ago",
      unread: 0,
      avatar: "/placeholder-rvofa.png",
      online: false,
      patientId: "P002",
    },
    {
      id: "3",
      name: "Mike Johnson",
      lastMessage: "I'm feeling much better now.",
      time: "1 hour ago",
      unread: 1,
      avatar: "/placeholder-rvofa.png",
      online: true,
      patientId: "P003",
    },
    {
      id: "4",
      name: "Sarah Wilson",
      lastMessage: "Could we schedule a follow-up?",
      time: "3 hours ago",
      unread: 0,
      avatar: "/placeholder-rvofa.png",
      online: false,
      patientId: "P004",
    },
  ]

  const messages = {
    1: [
      {
        id: 1,
        sender: "patient",
        content: "Hello Doctor, I have some questions about my medication.",
        time: "10:30 AM",
        type: "text",
      },
      {
        id: 2,
        sender: "doctor",
        content: "Hello John! I'm here to help. What questions do you have?",
        time: "10:32 AM",
        type: "text",
      },
      {
        id: 3,
        sender: "patient",
        content: "Should I take the blood pressure medication with food?",
        time: "10:33 AM",
        type: "text",
      },
      {
        id: 4,
        sender: "doctor",
        content: "Yes, it's best to take it with food to avoid stomach upset. Take it at the same time each day.",
        time: "10:35 AM",
        type: "text",
      },
      {
        id: 5,
        sender: "patient",
        content: "Thank you for the prescription, Doctor.",
        time: "10:45 AM",
        type: "text",
      },
    ],
    2: [
      {
        id: 1,
        sender: "patient",
        content: "Hi Dr. Smith, I received my test results.",
        time: "9:15 AM",
        type: "text",
      },
      {
        id: 2,
        sender: "doctor",
        content: "Great! Let me review them. How are you feeling overall?",
        time: "9:20 AM",
        type: "text",
      },
      {
        id: 3,
        sender: "patient",
        content: "When should I take the medication?",
        time: "9:25 AM",
        type: "text",
      },
    ],
  }

  const currentChat = chatList.find((chat) => chat.id === selectedChat)
  const currentMessages = messages[selectedChat] || []

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [currentMessages])

  const sendMessage = () => {
    if (message.trim()) {
      console.log(`[v0] Sending message: ${message}`)
      setMessage("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const chatActions = [
    {
      key: "call",
      label: (
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>Voice Call</span>
        </div>
      ),
    },
    {
      key: "video",
      label: (
        <div className="flex items-center space-x-2">
          <Video className="w-4 h-4" />
          <span>Video Call</span>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "patient-info",
      label: "View Patient Info",
    },
    {
      key: "appointment",
      label: "Schedule Appointment",
    },
  ]

  const filteredChats = chatList.filter((chat) => chat.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-gray-900">
      {/* Chat List Sidebar */}
      <div className="w-1/3 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Search Header */}
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white mb-3">Messages</h2>
          <Input
            placeholder="Search conversations..."
            prefix={<Search className="w-4 h-4 text-gray-400" />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-gray-700 border-gray-600"
          />
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <motion.div
              key={chat.id}
              whileHover={{ backgroundColor: "#374151" }}
              onClick={() => setSelectedChat(chat.id)}
              className={`p-4 cursor-pointer border-b border-gray-700 transition-colors ${
                selectedChat === chat.id ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar src={chat.avatar} size={48}>
                    {chat.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium truncate">{chat.name}</h3>
                    <span className="text-gray-400 text-xs">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-400 text-sm truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && <Badge count={chat.unread} size="small" className="bg-emerald-500" />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {currentChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-gray-800 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar src={currentChat.avatar} size={40}>
                    {currentChat.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>
                  {currentChat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-white font-medium">{currentChat.name}</h3>
                  <p className="text-gray-400 text-sm">{currentChat.online ? "Online" : "Last seen 2 hours ago"}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button type="text" icon={<Phone className="w-4 h-4" />} className="text-gray-400 hover:text-white" />
                <Button type="text" icon={<Video className="w-4 h-4" />} className="text-gray-400 hover:text-white" />
                <Dropdown menu={{ items: chatActions }} trigger={["click"]}>
                  <Button
                    type="text"
                    icon={<MoreVertical className="w-4 h-4" />}
                    className="text-gray-400 hover:text-white"
                  />
                </Dropdown>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {currentMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "doctor" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === "doctor" ? "bg-emerald-600 text-white" : "bg-gray-700 text-white"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "doctor" ? "text-emerald-100" : "text-gray-400"}`}>
                      {msg.time}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <Upload>
                  <Button
                    type="text"
                    icon={<Paperclip className="w-4 h-4" />}
                    className="text-gray-400 hover:text-white"
                  />
                </Upload>
                <Button
                  type="text"
                  icon={<ImageIcon className="w-4 h-4" />} // Update Image to ImageIcon
                  className="text-gray-400 hover:text-white"
                />
                <div className="flex-1">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-gray-700 border-gray-600"
                    suffix={
                      <Button
                        type="text"
                        icon={<Smile className="w-4 h-4" />}
                        className="text-gray-400 hover:text-white"
                      />
                    }
                  />
                </div>
                <Button
                  type="primary"
                  icon={<Send className="w-4 h-4" />}
                  onClick={sendMessage}
                  className="bg-emerald-600 hover:bg-emerald-700"
                  disabled={!message.trim()}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" /> // Use MessageSquare here
              <h3 className="text-xl font-medium text-gray-400 mb-2">Select a conversation</h3>
              <p className="text-gray-500">Choose a patient from the list to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatPage
