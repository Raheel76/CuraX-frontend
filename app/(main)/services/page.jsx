"use client"

import { motion } from "framer-motion"
import { Stethoscope, Pill, Calendar, Shield, Clock, Phone, Heart, Users, Award } from "lucide-react"
import { Icon } from "@iconify/react"
import Link from "next/link"

const ServicesPage = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Expert Doctor Consultations",
      description: "Connect with certified healthcare professionals for virtual and in-person consultations.",
      features: ["Video Consultations", "In-Person Appointments", "Second Opinions", "Specialist Referrals"],
      color: "text-blue-400",
      href: "/doctors",
    },
    {
      icon: Pill,
      title: "Online Pharmacy Services",
      description: "Order authentic medications and health products with fast, secure delivery.",
      features: ["Prescription Drugs", "OTC Medications", "Health Supplements", "Medical Devices"],
      color: "text-green-400",
      href: "/pharmacy",
    },
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "Easy scheduling system with reminders and calendar integration.",
      features: ["Online Booking", "Appointment Reminders", "Calendar Sync", "Rescheduling"],
      color: "text-purple-400",
      href: "/doctors",
    },
    {
      icon: Shield,
      title: "Secure Health Records",
      description: "HIPAA-compliant platform for storing and managing your medical information.",
      features: ["Medical History", "Test Results", "Prescriptions", "Vaccination Records"],
      color: "text-red-400",
      href: "/auth",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency assistance and customer service.",
      features: ["Emergency Hotline", "Live Chat Support", "Urgent Care", "Crisis Intervention"],
      color: "text-yellow-400",
      href: "/contact",
    },
    {
      icon: Phone,
      title: "Telemedicine Solutions",
      description: "Remote healthcare services for convenient access to medical care.",
      features: ["Virtual Consultations", "Remote Monitoring", "Digital Prescriptions", "Health Apps"],
      color: "text-indigo-400",
      href: "/doctors",
    },
  ]

  const stats = [
    { number: "50K+", label: "Happy Patients", icon: "material-symbols:sentiment-satisfied" },
    { number: "500+", label: "Expert Doctors", icon: "material-symbols:person" },
    { number: "100+", label: "Partner Pharmacies", icon: "material-symbols:local-pharmacy" },
    { number: "24/7", label: "Support Available", icon: "material-symbols:support-agent" },
  ]

  const platforms = [
    {
      title: "Patient Portal",
      description: "Comprehensive patient dashboard for managing health records and appointments.",
      icon: "material-symbols:person-book",
      features: ["Medical Records", "Appointment History", "Prescription Management", "Health Analytics"],
      href: "/auth",
    },
    {
      title: "Doctor Dashboard",
      description: "Advanced tools for healthcare professionals to manage patients and practice.",
      icon: "material-symbols:medical-information",
      features: ["Patient Management", "Prescription Tools", "Schedule Management", "Medical Records"],
      href: "/doctor-dashboard",
    },
    {
      title: "Pharmacy Management",
      description: "Complete pharmacy management system for medication dispensing and inventory.",
      icon: "material-symbols:local-pharmacy",
      features: ["Inventory Management", "Prescription Processing", "Patient Records", "Delivery Tracking"],
      href: "/pharmacy",
    },
    {
      title: "Admin Panel",
      description: "Comprehensive administration tools for healthcare facility management.",
      icon: "material-symbols:admin-panel-settings",
      features: ["User Management", "Analytics Dashboard", "System Configuration", "Reports"],
      href: "/admin",
    },
  ]

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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare solutions designed to provide you with the best medical care, convenience, and
              peace of mind.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon icon={stat.icon} className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Core <span className="text-primary">Healthcare</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our range of healthcare services designed to provide you with comprehensive medical care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon
                      className={`h-8 w-8 ${service.color} group-hover:text-primary transition-colors duration-300`}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={service.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Integrated <span className="text-primary">Platform</span> Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform serves patients, doctors, pharmacies, and administrators with specialized tools
              and interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Icon icon={platform.icon} className="h-10 w-10 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-foreground">{platform.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{platform.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={platform.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                  >
                    Access Platform
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Experience <span className="text-primary">Better Healthcare</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of patients and healthcare professionals who trust CuraX for comprehensive, secure, and
              convenient healthcare solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/80 transition-colors duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
