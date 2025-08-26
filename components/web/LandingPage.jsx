"use client"
import { motion } from "framer-motion"
import {
  Heart,
  Shield,
  Clock,
  Stethoscope,
  Pill,
  Calendar,
  Phone,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Icon } from "@iconify/react"
import { useState, useEffect } from "react"

const LandingPage = () => {
  const [currentDoctorSlide, setCurrentDoctorSlide] = useState(0)
  const [currentMedicineSlide, setCurrentMedicineSlide] = useState(0)

  const featuredDoctors = [
    {
      name: "Dr. Sarah Mitchell",
      specialty: "Cardiology",
      experience: "15+ years",
      rating: 4.9,
      reviews: 245,
      image: "/woman-doctor.png",
      nextAvailable: "Today 2:00 PM",
    },
    {
      name: "Dr. James Wilson",
      specialty: "Dermatology",
      experience: "12+ years",
      rating: 4.8,
      reviews: 189,
      image: "/male-doctor.png",
      nextAvailable: "Tomorrow 10:00 AM",
    },
    {
      name: "Dr. Maria Rodriguez",
      specialty: "Pediatrics",
      experience: "10+ years",
      rating: 4.9,
      reviews: 298,
      image: "/pharmacist-woman.png",
      nextAvailable: "Today 4:30 PM",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Orthopedics",
      experience: "18+ years",
      rating: 4.7,
      reviews: 156,
      image: "/male-doctor.png",
      nextAvailable: "Today 1:15 PM",
    },
  ]

  const featuredMedicines = [
    {
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      price: "$12.99",
      originalPrice: "$15.99",
      image: "/paracetamol-tablets.png",
      rating: 4.8,
      inStock: true,
    },
    {
      name: "Vitamin D3 1000 IU",
      category: "Vitamins",
      price: "$18.99",
      originalPrice: "$22.99",
      image: "/placeholder-h0i77.png",
      rating: 4.9,
      inStock: true,
    },
    {
      name: "Omega-3 Fish Oil",
      category: "Supplements",
      price: "$24.99",
      originalPrice: "$29.99",
      image: "/omega-3-capsules.png",
      rating: 4.6,
      inStock: true,
    },
    {
      name: "Blood Pressure Monitor",
      category: "Medical Devices",
      price: "$89.99",
      originalPrice: "$109.99",
      image: "/digital-blood-pressure-monitor.png",
      rating: 4.7,
      inStock: true,
    },
  ]

  useEffect(() => {
    const doctorInterval = setInterval(() => {
      setCurrentDoctorSlide((prev) => (prev + 1) % featuredDoctors.length)
    }, 4000)

    const medicineInterval = setInterval(() => {
      setCurrentMedicineSlide((prev) => (prev + 1) % featuredMedicines.length)
    }, 5000)

    return () => {
      clearInterval(doctorInterval)
      clearInterval(medicineInterval)
    }
  }, [])

  const features = [
    {
      icon: Stethoscope,
      title: "Expert Doctors",
      description: "Connect with certified healthcare professionals for consultations and treatments.",
      color: "text-blue-400",
    },
    {
      icon: Pill,
      title: "Online Pharmacy",
      description: "Order medicines online with fast delivery and authentic products.",
      color: "text-green-400",
    },
    {
      icon: Calendar,
      title: "Easy Appointments",
      description: "Book appointments with your preferred doctors at your convenience.",
      color: "text-purple-400",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security.",
      color: "text-red-400",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency support and customer service.",
      color: "text-yellow-400",
    },
    {
      icon: Phone,
      title: "Telemedicine",
      description: "Virtual consultations from the comfort of your home.",
      color: "text-indigo-400",
    },
  ]

  const stats = [
    { number: "50K+", label: "Happy Patients", icon: "material-symbols:sentiment-satisfied" },
    { number: "500+", label: "Expert Doctors", icon: "material-symbols:person" },
    { number: "100+", label: "Hospitals", icon: "material-symbols:local-hospital" },
    { number: "24/7", label: "Support", icon: "material-symbols:support-agent" },
  ]

  const services = [
    {
      title: "Patient Portal",
      description: "Access your medical records, test results, and appointment history.",
      icon: "material-symbols:person-book",
      features: ["Medical Records", "Test Results", "Prescription History", "Appointment Booking"],
    },
    {
      title: "Doctor Dashboard",
      description: "Comprehensive tools for healthcare professionals to manage patients.",
      icon: "material-symbols:medical-information",
      features: ["Patient Management", "Prescription Tools", "Appointment Scheduling", "Medical Records"],
    },
    {
      title: "Pharmacy Store",
      description: "Complete online pharmacy with prescription and OTC medications.",
      icon: "material-symbols:local-pharmacy",
      features: ["Prescription Drugs", "OTC Medications", "Health Supplements", "Fast Delivery"],
    },
    {
      title: "Admin Panel",
      description: "Advanced administration tools for healthcare facility management.",
      icon: "material-symbols:admin-panel-settings",
      features: ["User Management", "Analytics Dashboard", "System Configuration", "Reports"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content:
        "CuraX has revolutionized how I manage my healthcare. The online consultations are convenient and the doctors are excellent.",
      rating: 5,
      avatar: "/woman-doctor.png",
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      content:
        "The doctor dashboard is intuitive and helps me provide better care to my patients. Highly recommended platform.",
      rating: 5,
      avatar: "/male-doctor.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Pharmacy Manager",
      content:
        "Managing our online pharmacy through CuraX has streamlined our operations and improved customer satisfaction.",
      rating: 5,
      avatar: "/pharmacist-woman.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Your Health, <span className="text-primary">Our Priority</span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Experience the future of healthcare with CuraX. Connect with expert doctors, manage prescriptions, and
                access comprehensive medical services all in one platform.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/80 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex items-center space-x-6 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>FDA Approved</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-primary" />
                  <span>4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="/modern-healthcare-dashboard.png"
                  alt="CuraX Healthcare Platform"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-primary p-4 rounded-xl shadow-lg z-20"
              >
                <Heart className="h-8 w-8 text-primary-foreground" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-xl shadow-lg z-20"
              >
                <Stethoscope className="h-8 w-8 text-accent-foreground" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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

      {/* Featured Doctors Swiper Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-primary">Doctors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our top-rated healthcare professionals ready to provide expert care
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentDoctorSlide * 100}%)` }}
              >
                {featuredDoctors.map((doctor, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-card p-8 rounded-2xl border border-border mx-4">
                      <div className="flex items-center space-x-6">
                        <img
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          className="w-24 h-24 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-foreground mb-2">{doctor.name}</h3>
                          <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                          <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span>
                                {doctor.rating} ({doctor.reviews} reviews)
                              </span>
                            </div>
                            <span>{doctor.experience}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-green-400 font-medium">Next: {doctor.nextAvailable}</span>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                            >
                              Book Appointment
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setCurrentDoctorSlide((prev) => (prev - 1 + featuredDoctors.length) % featuredDoctors.length)
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-border p-3 rounded-full hover:bg-card transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={() => setCurrentDoctorSlide((prev) => (prev + 1) % featuredDoctors.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-border p-3 rounded-full hover:bg-card transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredDoctors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDoctorSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentDoctorSlide === index ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Healthcare <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our range of healthcare services designed to provide you with the best medical care and
              convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                    <feature.icon
                      className={`h-8 w-8 ${feature.color} group-hover:text-primary transition-colors duration-300`}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Medicines Swiper Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-primary">Medicines</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quality medications and health products available for quick delivery
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentMedicineSlide * 100}%)` }}
              >
                {featuredMedicines.map((medicine, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-card p-8 rounded-2xl border border-border mx-4">
                      <div className="flex items-center space-x-6">
                        <img
                          src={medicine.image || "/placeholder.svg"}
                          alt={medicine.name}
                          className="w-32 h-32 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-semibold text-foreground mb-2">{medicine.name}</h3>
                              <p className="text-primary font-medium mb-2">{medicine.category}</p>
                              <div className="flex items-center space-x-1 mb-3">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="text-muted-foreground text-sm">{medicine.rating} rating</span>
                              </div>
                            </div>
                            {medicine.inStock && (
                              <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                                In Stock
                              </span>
                            )}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-foreground">{medicine.price}</span>
                              <span className="text-muted-foreground line-through">{medicine.originalPrice}</span>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 flex items-center space-x-2"
                            >
                              <Pill className="h-4 w-4" />
                              <span>Add to Cart</span>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setCurrentMedicineSlide((prev) => (prev - 1 + featuredMedicines.length) % featuredMedicines.length)
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-border p-3 rounded-full hover:bg-card transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={() => setCurrentMedicineSlide((prev) => (prev + 1) % featuredMedicines.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-border p-3 rounded-full hover:bg-card transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredMedicines.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMedicineSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentMedicineSlide === index ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card/30">
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
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Icon icon={service.icon} className="h-10 w-10 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              What Our <span className="text-primary">Users</span> Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from patients, doctors, and healthcare professionals who trust CuraX for their healthcare needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-card p-8 rounded-2xl border border-border"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
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
              Ready to Transform Your <span className="text-primary">Healthcare Experience</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of patients and healthcare professionals who trust CuraX for comprehensive, secure, and
              convenient healthcare solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/80 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Sales</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
