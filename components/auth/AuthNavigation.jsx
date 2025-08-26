"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const AuthNavigation = () => {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <div className="flex justify-center space-x-6 mb-8">
      <Link
        href="/auth"
        className={`px-4 py-2 rounded-lg transition-colors ${
          isActive("/auth")
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Sign In
      </Link>
      <Link
        href="/auth/signup"
        className={`px-4 py-2 rounded-lg transition-colors ${
          isActive("/auth/signup")
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Sign Up
      </Link>
    </div>
  )
}

export default AuthNavigation
