"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { Icon } from "@iconify/react"
import { useState } from "react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "text-blue-400",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@curax.com", "info@curax.com"],
      color: "text-green-400",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Healthcare Ave", "Medical District, NY 10001"],
      color: "text-red-400",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8AM-8PM", "Sat-Sun: 9AM-5PM"],
      color: "text-purple-400",
    },
  ]

  const departments = [
    {
      name: "General Support",
      email: "support@curax.com",
      phone: "+1 (555) 123-4567",
      icon: "material-symbols:support-agent",
    },
    {
      name: "Medical Inquiries",
      email: "medical@curax.com",
      phone: "+1 (555) 234-5678",
      icon: "material-symbols:medical-information",
    },
    {
      name: "Pharmacy",
      email: "pharmacy@curax.com",
      phone: "+1 (555) 345-6789",
      icon: "material-symbols:local-pharmacy",
    },
    {
      name: "Technical Support",
      email: "tech@curax.com",
      phone: "+1 (555) 456-7890",
      icon: "material-symbols:settings",
    },
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're here to help you with any questions about our healthcare services. Reach out to us anytime.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="medical">Medical Question</option>
                      <option value="pharmacy">Pharmacy Support</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">Interactive Map</p>
                    <p className="text-muted-foreground text-sm">123 Healthcare Ave, Medical District</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-destructive mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">Emergency Contact</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  For medical emergencies, please call 911 or visit your nearest emergency room.
                </p>
                <p className="text-foreground font-medium">24/7 Emergency Line: +1 (555) 911-HELP</p>
              </div>

              {/* Live Chat */}
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">Live Chat Support</h3>
                </div>
                <p className="text-muted-foreground mb-4">Get instant help from our support team through live chat.</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  Start Chat
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Department <span className="text-primary">Contacts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reach out to specific departments for specialized assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon icon={dept.icon} className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">{dept.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{dept.email}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{dept.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
