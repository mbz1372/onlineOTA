'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
  { stage: 'سرنخ', value: 100 },
  { stage: 'مشاوره', value: 65 },
  { stage: 'پیشنهاد', value: 52 },
  { stage: 'مذاکره', value: 35 },
  { stage: 'بستن', value: 28 },
]

export default function SalesFunnel() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">فایل فروش بر اساس لید</h3>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="ایجاد فعالیت"
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="horizontal" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis 
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <YAxis 
              dataKey="stage"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">سرنخ → مشاوره</span>
          <span className="text-pink-500 font-semibold">۶۵٪</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">مشاوره → پیشنهاد</span>
          <span className="text-pink-500 font-semibold">۸۰٪</span>
        </div>
      </div>
    </div>
  )
}