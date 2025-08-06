'use client'

import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

export default function NextMeeting() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">جلسه بعدی</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3 space-x-reverse">
          <Calendar className="w-5 h-5 text-purple-600" />
          <span className="text-gray-700">جلسه مذاکره با گلرنگ</span>
        </div>
        
        <div className="flex items-center space-x-3 space-x-reverse">
          <Clock className="w-5 h-5 text-purple-600" />
          <span className="text-gray-700">۱۰:۰۰ - ۱۲:۳۰</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div className="bg-blue-500 h-1 rounded-full" style={{ width: '60%' }}></div>
        </div>
        
        <div className="flex items-center justify-center space-x-4 space-x-reverse">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
          <div className="flex space-x-1 space-x-reverse">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}