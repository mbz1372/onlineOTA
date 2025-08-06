'use client'

export default function LeadByStatus() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">لید بر اساس وضعیت</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">جدید</span>
          </div>
          <span className="text-lg font-semibold text-gray-800">۲۵٪</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">تبدیل شده</span>
          </div>
          <span className="text-lg font-semibold text-gray-800">۲۸٪</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-700">در جریان</span>
          </div>
          <span className="text-lg font-semibold text-gray-800">۱۵٪</span>
        </div>
      </div>
    </div>
  )
}