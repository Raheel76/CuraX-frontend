"use client"
import { motion } from "framer-motion"
import { Heart, Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react"
import { Icon } from "@iconify/react"

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Services", href: "#services" },
        { label: "Pharmacy", href: "#pharmacy" },
        { label: "Doctors", href: "#doctors" },
        { label: "About Us", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Online Consultation", href: "#consultation" },
        { label: "Prescription Delivery", href: "#delivery" },
        { label: "Health Checkups", href: "#checkups" },
        { label: "Lab Tests", href: "#lab-tests" },
        { label: "Emergency Care", href: "#emergency" },
        { label: "Mental Health", href: "#mental-health" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "FAQ", href: "#faq" },
        { label: "Insurance", href: "#insurance" },
        { label: "Careers", href: "#careers" },
      ],
    },
  ]

  const contactInfo = [
    { icon: Phone, label: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, label: "support@curax.com", href: "mailto:support@curax.com" },
    { icon: MapPin, label: "123 Healthcare Ave, Medical City, MC 12345", href: "#location" },
    { icon: Clock, label: "24/7 Emergency Support", href: "#emergency" },
  ]

  const socialLinks = [
    { icon: "mdi:facebook", href: "#facebook", label: "Facebook" },
    { icon: "mdi:twitter", href: "#twitter", label: "Twitter" },
    { icon: "mdi:instagram", href: "#instagram", label: "Instagram" },
    { icon: "mdi:linkedin", href: "#linkedin", label: "LinkedIn" },
    { icon: "mdi:youtube", href: "#youtube", label: "YouTube" },
  ]

  const certifications = [
    { icon: Shield, label: "HIPAA Compliant" },
    { icon: Award, label: "ISO 27001 Certified" },
    { icon: Heart, label: "FDA Approved" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                Cura<span className="text-primary">X</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted healthcare partner, providing comprehensive medical services, online consultations, and
              pharmacy solutions with cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ x: 5, color: "var(--primary)" }}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "var(--primary)" }}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-muted-foreground text-sm text-center lg:text-left"
            >
              © 2024 CuraX Healthcare. All rights reserved. | Designed with ❤️ for better health.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, color: "var(--primary)" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-1 text-xs text-muted-foreground"
                >
                  <cert.icon className="h-4 w-4 text-primary" />
                  <span>{cert.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
