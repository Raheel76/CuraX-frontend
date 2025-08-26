"use client"

import { motion } from "framer-motion"
import { Pill, Shield, Truck, Clock, Search, Filter, ShoppingCart, Star } from "lucide-react"
import { Icon } from "@iconify/react"
import { useState } from "react"

const PharmacyPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products", icon: "material-symbols:medication" },
    { id: "prescription", name: "Prescription", icon: "material-symbols:prescription" },
    { id: "otc", name: "Over-the-Counter", icon: "material-symbols:pill" },
    { id: "vitamins", name: "Vitamins & Supplements", icon: "material-symbols:vitamin" },
    { id: "personal-care", name: "Personal Care", icon: "material-symbols:self-care" },
    { id: "medical-devices", name: "Medical Devices", icon: "material-symbols:medical-mask" },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Over-the-Counter",
      price: "$12.99",
      originalPrice: "$15.99",
      image: "/paracetamol-tablets.png",
      rating: 4.8,
      reviews: 245,
      inStock: true,
      description: "Fast-acting pain relief and fever reducer",
    },
    {
      id: 2,
      name: "Vitamin D3 1000 IU",
      category: "Vitamins & Supplements",
      price: "$18.99",
      originalPrice: "$22.99",
      image: "/placeholder-h0i77.png",
      rating: 4.9,
      reviews: 189,
      inStock: true,
      description: "Essential vitamin for bone health and immunity",
    },
    {
      id: 3,
      name: "Blood Pressure Monitor",
      category: "Medical Devices",
      price: "$89.99",
      originalPrice: "$109.99",
      image: "/digital-blood-pressure-monitor.png",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      description: "Digital automatic blood pressure monitor",
    },
    {
      id: 4,
      name: "Omega-3 Fish Oil",
      category: "Vitamins & Supplements",
      price: "$24.99",
      originalPrice: "$29.99",
      image: "/omega-3-capsules.png",
      rating: 4.6,
      reviews: 298,
      inStock: true,
      description: "High-quality omega-3 fatty acids for heart health",
    },
    {
      id: 5,
      name: "Antiseptic Hand Sanitizer",
      category: "Personal Care",
      price: "$8.99",
      originalPrice: "$11.99",
      image: "/placeholder-giwqz.png",
      rating: 4.5,
      reviews: 412,
      inStock: true,
      description: "70% alcohol-based hand sanitizer",
    },
    {
      id: 6,
      name: "Digital Thermometer",
      category: "Medical Devices",
      price: "$19.99",
      originalPrice: "$24.99",
      image: "/digital-thermometer.png",
      rating: 4.8,
      reviews: 167,
      inStock: false,
      description: "Fast and accurate digital thermometer",
    },
  ]

  const services = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Free delivery on orders over $50",
      color: "text-green-400",
    },
    {
      icon: Shield,
      title: "Authentic Products",
      description: "100% genuine medications from licensed suppliers",
      color: "text-blue-400",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock pharmacy support",
      color: "text-purple-400",
    },
    {
      icon: Pill,
      title: "Expert Consultation",
      description: "Free consultation with licensed pharmacists",
      color: "text-red-400",
    },
  ]

  const filteredProducts = featuredProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || product.category.toLowerCase().includes(selectedCategory.replace("-", " "))
    return matchesSearch && matchesCategory
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
              CuraX <span className="text-primary">Pharmacy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted online pharmacy with authentic medications, expert consultation, and convenient delivery to
              your doorstep.
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
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for medications, vitamins, or health products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Shop by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-card/80 border border-border"
                  }`}
                >
                  <Icon icon={category.icon} className="h-5 w-5" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {selectedCategory === "all"
                  ? "Featured Products"
                  : `${categories.find((c) => c.id === selectedCategory)?.name} Products`}
              </h2>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Filter className="h-5 w-5" />
                <span>{filteredProducts.length} products found</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Out of Stock
                      </div>
                    )}
                    {product.originalPrice !== product.price && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Sale
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-medium">{product.category}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-foreground">{product.price}</span>
                        {product.originalPrice !== product.price && (
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!product.inStock}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                          product.inStock
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-muted text-muted-foreground cursor-not-allowed"
                        }`}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        <span>{product.inStock ? "Add to Cart" : "Out of Stock"}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prescription Upload */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Upload Your <span className="text-primary">Prescription</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Upload your prescription and we'll prepare your medications for quick pickup or delivery.
            </p>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="border-2 border-dashed border-border rounded-xl p-12 hover:border-primary/50 transition-colors duration-300 cursor-pointer">
                <Icon icon="material-symbols:upload" className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Upload Prescription</h3>
                <p className="text-muted-foreground mb-4">
                  Drag and drop your prescription image or PDF, or click to browse
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  Choose File
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PharmacyPage
