"use client"

import { motion } from "framer-motion"
import { Package, ShoppingCart, AlertTriangle, DollarSign } from "lucide-react"

const PharmacyStore = () => {
  const stats = [
    { title: "Total Products", value: "1,234", icon: Package, color: "text-purple-400" },
    { title: "Orders Today", value: "45", icon: ShoppingCart, color: "text-green-400" },
    { title: "Revenue", value: "$12,345", icon: DollarSign, color: "text-emerald-400" },
    { title: "Low Stock Items", value: "23", icon: AlertTriangle, color: "text-red-400" },
  ]

  const recentOrders = [
    { id: "#ORD-001", customer: "John Doe", items: "Paracetamol, Vitamin D", total: "$45.99", status: "processing" },
    { id: "#ORD-002", customer: "Jane Smith", items: "Blood pressure monitor", total: "$89.99", status: "shipped" },
    { id: "#ORD-003", customer: "Mike Johnson", items: "Omega-3, Multivitamin", total: "$67.50", status: "delivered" },
    { id: "#ORD-004", customer: "Sarah Wilson", items: "Insulin, Test strips", total: "$156.00", status: "processing" },
  ]

  const lowStockItems = [
    { name: "Paracetamol 500mg", stock: 5, reorderLevel: 50 },
    { name: "Vitamin D3", stock: 12, reorderLevel: 30 },
    { name: "Blood Pressure Monitor", stock: 3, reorderLevel: 10 },
    { name: "Insulin Pen", stock: 8, reorderLevel: 20 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Pharmacy Dashboard</h1>
          <p className="text-gray-400 mt-1">Manage your inventory and orders</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg bg-gray-700 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{order.id}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "delivered"
                        ? "bg-green-500/20 text-green-400"
                        : order.status === "shipped"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{order.customer}</p>
                <p className="text-gray-300 text-sm">{order.items}</p>
                <p className="text-white font-medium mt-1">{order.total}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
            Low Stock Alert
          </h2>
          <div className="space-y-4">
            {lowStockItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-red-500/20 bg-red-500/5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">Reorder level: {item.reorderLevel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-400 font-bold">{item.stock} left</p>
                    <button className="text-xs bg-red-500 text-white px-2 py-1 rounded mt-1 hover:bg-red-600 transition-colors">
                      Reorder
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PharmacyStore
