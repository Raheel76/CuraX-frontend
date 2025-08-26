"use client"

import { useState } from "react"
import { Drawer } from "antd"
import { motion } from "framer-motion"
import { Menu, X, Heart } from "lucide-react"
import { Icon } from "@iconify/react"
import Link from "next/link"

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false)

  const navItems = [
    { label: "Home", href: "/", icon: "material-symbols:home" },
    { label: "Services", href: "/services", icon: "material-symbols:medical-services" },
    { label: "Pharmacy", href: "/pharmacy", icon: "material-symbols:local-pharmacy" },
    { label: "Doctors", href: "/doctors", icon: "material-symbols:person" },
    { label: "About", href: "/about", icon: "material-symbols:info" },
    { label: "Contact", href: "/contact", icon: "material-symbols:contact-phone" },
  ]

  const showDrawer = () => {
    setDrawerVisible(true)
  }

  const onClose = () => {
    setDrawerVisible(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="bg-primary p-2 rounded-lg">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                Cura<span className="text-primary">X</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.label} href={item.href}>
                <motion.button
                  whileHover={{ scale: 1.05, color: "var(--primary)" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/80 transition-colors duration-300"
              >
                Login
              </motion.button>
            </Link>
            <Link href="/auth">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={showDrawer}
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Cura<span className="text-primary">X</span>
            </span>
          </div>
        }
        placement="right"
        onClose={onClose}
        open={drawerVisible}
        className="dark-drawer"
        styles={{
          body: { backgroundColor: "var(--card)", padding: 0 },
          header: { backgroundColor: "var(--card)", borderBottom: "1px solid var(--border)" },
        }}
        closeIcon={<X className="h-5 w-5 text-foreground" />}
      >
        <div className="flex flex-col h-full">
          <nav className="flex-1 py-6">
            {navItems.map((item, index) => (
              <Link key={item.label} href={item.href} onClick={onClose}>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 px-6 py-4 text-foreground hover:bg-secondary/50 hover:text-primary transition-all duration-300 w-full text-left"
                >
                  <Icon icon={item.icon} className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-border space-y-3">
            <Link href="/auth" onClick={onClose}>
              <button className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors duration-300">
                Login
              </button>
            </Link>
            <Link href="/auth" onClick={onClose}>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </Drawer>
    </motion.header>
  )
}

export default Header
