"use client";

import DoctorLayout from "../../components/layouts/DoctorLayout"

export default function DoctorDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DoctorLayout>{children}</DoctorLayout>
}
