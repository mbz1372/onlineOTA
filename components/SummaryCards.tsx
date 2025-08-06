'use client'

import { Lightbulb, FileText } from 'lucide-react'

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">سرنخ جدید</span>
            </div>
            <div className="text-3xl font-bold text-gray-800">+۳۵</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">معامله جدید</span>
            </div>
            <div className="text-3xl font-bold text-gray-800">+۲۲</div>
          </div>
        </div>
      </div>
    </div>
  )
}