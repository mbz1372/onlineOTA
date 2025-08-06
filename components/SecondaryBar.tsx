'use client'

import { Plus } from 'lucide-react'

export default function SecondaryBar() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2 space-x-reverse">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 space-x-reverse hover:bg-blue-600 transition-colors">
          <Plus className="w-4 h-4" />
          <span>افزودن</span>
        </button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          گزینه ۱
        </button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          گزینه ۲
        </button>
      </div>

      <div className="flex items-center space-x-2 space-x-reverse">
        <span className="text-lg font-bold text-gray-800">JRL</span>
      </div>
    </div>
  )
}