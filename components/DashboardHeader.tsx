'use client'

import { Edit } from 'lucide-react'

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-800">امروز داشبورد مدیریت</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 space-x-reverse hover:bg-blue-600 transition-colors">
        <Edit className="w-4 h-4" />
        <span>ویرایش داشبورد</span>
      </button>
    </div>
  )
}