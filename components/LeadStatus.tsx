'use client'

export default function LeadStatus() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-4">
        <input
          type="text"
          placeholder="ایجاد فعالیت"
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />
      </div>

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
            <span className="text-gray-700">مجدد فعال شده</span>
          </div>
          <span className="text-lg font-semibold text-gray-800">۲۸٪</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-700">از دست رفته</span>
          </div>
          <span className="text-lg font-semibold text-gray-800">۱۵٪</span>
        </div>
      </div>
    </div>
  )
}