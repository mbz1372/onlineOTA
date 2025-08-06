'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'اسفند ۱۴۰۰', value: 45 },
  { month: 'بهمن ۱۴۰۰', value: 38 },
  { month: 'دی ۱۴۰۰', value: 42 },
  { month: 'آذر ۱۴۰۰', value: 35 },
  { month: 'آبان ۱۴۰۰', value: 28 },
  { month: 'مهر ۱۴۰۰', value: 32 },
  { month: 'شهریور ۱۴۰۰', value: 25 },
  { month: 'مرداد ۱۴۰۰', value: 30 },
  { month: 'تیر ۱۴۰۰', value: 22 },
  { month: 'خرداد ۱۴۰۰', value: 18 },
  { month: 'اردیبهشت ۱۴۰۰', value: 15 },
  { month: 'فروردین ۱۴۰۰', value: 12 },
]

const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props
  const isHighlighted = payload.month === 'مهر ۱۴۰۰'
  
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={isHighlighted ? '#ec4899' : '#3b82f6'}
      rx={4}
    />
  )
}

export default function SalesChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">میزان فروش</h3>
        <div className="flex space-x-2 space-x-reverse">
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            امروز
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            این هفته
          </button>
          <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded-md">
            امسال
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            همیشه
          </button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              domain={[0, 50]}
              ticks={[0, 10, 20, 30, 40, 50]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="value" shape={<CustomBar />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}