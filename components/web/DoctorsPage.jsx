"use client"

import { motion } from "framer-motion"
import { Star, Calendar, Clock, MapPin, Video, Award, Users } from "lucide-react"
import { Icon } from "@iconify/react"
import { useState } from "react"

const DoctorsPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const specialties = [
    { id: "all", name: "All Specialties", icon: "material-symbols:medical-services" },
    { id: "cardiology", name: "Cardiology", icon: "material-symbols:cardiology" },
    { id: "dermatology", name: "Dermatology", icon: "material-symbols:dermatology" },
    { id: "pediatrics", name: "Pediatrics", icon: "material-symbols:pediatrics" },
    { id: "orthopedics", name: "Orthopedics", icon: "material-symbols:orthopedics" },
    { id: "neurology", name: "Neurology", icon: "material-symbols:neurology" },
    { id: "psychiatry", name: "Psychiatry", icon: "material-symbols:psychiatry" },
  ]

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      specialty: "Cardiology",
      experience: "15+ years",
      rating: 4.9,
      reviews: 245,
      image: "/woman-doctor.png",
      location: "New York, NY",
      languages: ["English", "Spanish"],
      education: "Harvard Medical School",
      consultationFee: "$150",
      availableToday: true,
      nextAvailable: "Today 2:00 PM",
      about: "Specialized in interventional cardiology with expertise in complex cardiac procedures.",
      achievements: ["Board Certified Cardiologist", "Fellow of American College of Cardiology"],
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "Dermatology",
      experience: "12+ years",
      rating: 4.8,
      reviews: 189,
      image: "/male-doctor.png",
      location: "Los Angeles, CA",
      languages: ["English", "French"],
      education: "Johns Hopkins University",
      consultationFee: "$120",
      availableToday: false,
      nextAvailable: "Tomorrow 10:00 AM",
      about: "Expert in cosmetic and medical dermatology with focus on skin cancer prevention.",
      achievements: ["Board Certified Dermatologist", "Published Researcher"],
    },
    {
      id: 3,
      name: "Dr. Maria Rodriguez",
      specialty: "Pediatrics",
      experience: "10+ years",
      rating: 4.9,
      reviews: 298,
      image: "/pharmacist-woman.png",
      location: "Chicago, IL",
      languages: ["English", "Spanish", "Portuguese"],
      education: "Stanford Medical School",
      consultationFee: "$100",
      availableToday: true,
      nextAvailable: "Today 4:30 PM",
      about: "Dedicated pediatrician with special interest in childhood development and immunizations.",
      achievements: ["Board Certified Pediatrician", "Child Development Specialist"],
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      specialty: "Orthopedics",
      experience: "18+ years",
      rating: 4.7,
      reviews: 156,
      image: "/male-doctor.png",
      location: "Houston, TX",
      languages: ["English", "Mandarin"],
      education: "Mayo Clinic",
      consultationFee: "$180",
      availableToday: true,
      nextAvailable: "Today 1:15 PM",
      about: "Orthopedic surgeon specializing in sports medicine and joint replacement.",
      achievements: ["Board Certified Orthopedic Surgeon", "Sports Medicine Fellowship"],
    },
    {
      id: 5,
      name: "Dr. Emily Johnson",
      specialty: "Neurology",
      experience: "14+ years",
      rating: 4.8,
      reviews: 167,
      image: "/woman-doctor.png",
      location: "Boston, MA",
      languages: ["English", "German"],
      education: "Yale Medical School",
      consultationFee: "$160",
      availableToday: false,
      nextAvailable: "Tomorrow 9:00 AM",
      about: "Neurologist with expertise in epilepsy, stroke, and neurodegenerative diseases.",
      achievements: ["Board Certified Neurologist", "Epilepsy Specialist"],
    },
    {
      id: 6,
      name: "Dr. David Park",
      specialty: "Psychiatry",
      experience: "11+ years",
      rating: 4.6,
      reviews: 134,
      image: "/male-doctor.png",
      location: "Seattle, WA",
      languages: ["English", "Korean"],
      education: "UCLA Medical School",
      consultationFee: "$140",
      availableToday: true,
      nextAvailable: "Today 3:45 PM",
      about: "Psychiatrist specializing in anxiety, depression, and cognitive behavioral therapy.",
      achievements: ["Board Certified Psychiatrist", "CBT Certified Therapist"],
    },
  ]

  const stats = [
    { number: "500+", label: "Expert Doctors", icon: "material-symbols:person" },
    { number: "50+", label: "Specialties", icon: "material-symbols:medical-services" },
    { number: "24/7", label: "Availability", icon: "material-symbols:schedule" },
    { number: "98%", label: "Satisfaction Rate", icon: "material-symbols:sentiment-satisfied" },
  ]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty.toLowerCase() === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

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
              Find Your <span className="text-primary">Doctor</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with certified healthcare professionals for consultations, treatments, and expert medical advice.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Icon
                icon="material-symbols:search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/30">
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

      {/* Specialties & Doctors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Specialties Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Browse by Specialty</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {specialties.map((specialty) => (
                <motion.button
                  key={specialty.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSpecialty(specialty.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedSpecialty === specialty.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-card/80 border border-border"
                  }`}
                >
                  <Icon icon={specialty.icon} className="h-5 w-5" />
                  <span>{specialty.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Doctors Grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {selectedSpecialty === "all"
                  ? "All Doctors"
                  : `${specialties.find((s) => s.id === selectedSpecialty)?.name} Specialists`}
              </h2>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>{filteredDoctors.length} doctors available</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{doctor.name}</h3>
                          <p className="text-primary font-medium">{doctor.specialty}</p>
                        </div>
                        {doctor.availableToday && (
                          <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                            Available Today
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>
                            {doctor.rating} ({doctor.reviews} reviews)
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="h-4 w-4" />
                          <span>{doctor.experience}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{doctor.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{doctor.nextAvailable}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{doctor.about}</p>

                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-foreground">
                          {doctor.consultationFee}
                          <span className="text-sm font-normal text-muted-foreground ml-1">consultation</span>
                        </div>

                        <div className="flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/80 transition-colors duration-300"
                          >
                            <Video className="h-4 w-4" />
                            <span>Video Call</span>
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                          >
                            <Calendar className="h-4 w-4" />
                            <span>Book Now</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to connect with your healthcare provider
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Doctor",
                description:
                  "Browse our network of certified healthcare professionals and select the right specialist for your needs.",
                icon: "material-symbols:person-search",
              },
              {
                step: "2",
                title: "Book Appointment",
                description:
                  "Schedule your consultation at a convenient time with flexible options for video calls or in-person visits.",
                icon: "material-symbols:calendar-add-on",
              },
              {
                step: "3",
                title: "Get Expert Care",
                description:
                  "Receive professional medical consultation, diagnosis, and treatment recommendations from qualified doctors.",
                icon: "material-symbols:medical-services",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                    <Icon icon={item.icon} className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorsPage
