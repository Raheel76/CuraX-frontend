"use client"

import Header from "../web/Header"
import Footer from "../web/Footer"

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background overflow-hidden text-foreground dark">
      <Header />
      <main className="transition-all duration-300 ease-in-out">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
