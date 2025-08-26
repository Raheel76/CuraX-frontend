"use client"

import { motion } from "framer-motion"
import { Heart, Shield, Users, Award, Target, Eye } from "lucide-react"

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We believe healthcare should be delivered with empathy, understanding, and genuine care for every patient.",
      color: "text-red-400",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your health data and privacy are our top priorities, protected by enterprise-grade security measures.",
      color: "text-blue-400",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We bring together patients, doctors, and healthcare professionals in a unified platform.",
      color: "text-green-400",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in healthcare delivery and technological innovation.",
      color: "text-purple-400",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      image: "/woman-doctor.png",
      description: "15+ years in healthcare innovation and patient care excellence.",
    },
    {
      name: "Dr. James Wilson",
      role: "Head of Technology",
      image: "/male-doctor.png",
      description: "Expert in healthcare technology and digital transformation.",
    },
    {
      name: "Maria Rodriguez",
      role: "Pharmacy Director",
      image: "/pharmacist-woman.png",
      description: "Leading pharmaceutical operations and medication safety protocols.",
    },
  ]

  const milestones = [
    { year: "2020", event: "CuraX Founded", description: "Started with a vision to revolutionize healthcare" },
    { year: "2021", event: "First 1000 Patients", description: "Reached our first major milestone in patient care" },
    { year: "2022", event: "Pharmacy Integration", description: "Launched comprehensive online pharmacy services" },
    { year: "2023", event: "50K+ Users", description: "Expanded to serve over 50,000 patients nationwide" },
    { year: "2024", event: "AI Integration", description: "Introduced AI-powered diagnostic assistance" },
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
              About <span className="text-primary">CuraX</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make quality healthcare accessible, affordable, and convenient for everyone through
              innovative technology and compassionate care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                CuraX was born from the vision of making healthcare more accessible and efficient. Founded by a team of
                healthcare professionals and technology experts, we recognized the need for a comprehensive platform
                that bridges the gap between patients and healthcare providers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve thousands of patients, work with hundreds of doctors, and partner with numerous
                pharmacies to deliver seamless healthcare experiences. Our platform continues to evolve, incorporating
                the latest technologies while maintaining our core focus on patient care and safety.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img
                src="/modern-healthcare-dashboard.png"
                alt="CuraX Platform"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground ml-4">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To democratize healthcare by providing a comprehensive, secure, and user-friendly platform that connects
                patients with quality medical care, medications, and health management tools, regardless of their
                location or circumstances.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground ml-4">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted healthcare platform, where every individual has seamless access to
                personalized, high-quality medical care and health management solutions powered by cutting-edge
                technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at CuraX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The dedicated professionals behind CuraX's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-card p-6 rounded-2xl border border-border text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">Key milestones in CuraX's growth and development</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex items-center space-x-6"
              >
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.event}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
