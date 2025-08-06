'use client'

import { 
  LayoutDashboard, 
  Building, 
  User, 
  Lightbulb, 
  Star, 
  FileText, 
  Package,
  Briefcase,
  CheckSquare,
  Calendar,
  Phone
} from 'lucide-react'

export default function Sidebar() {
  return (
    <div className="w-64 bg-purple-800 h-screen fixed right-0 top-0 p-6 text-white">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">امروز</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <LayoutDashboard className="w-5 h-5" />
            <span>داشبورد پشتیبانی</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <LayoutDashboard className="w-5 h-5" />
            <span>داشبورد مدیریت</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">فعالیت ها</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <Briefcase className="w-5 h-5" />
            <span>خدمت ها</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <CheckSquare className="w-5 h-5" />
            <span>وظیفه ها</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <Calendar className="w-5 h-5" />
            <span>جلسه ها</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <Phone className="w-5 h-5" />
            <span>تماس ها</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">ارتباطات</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer relative">
            <div className="absolute right-2 w-2 h-2 bg-purple-400 rounded-full"></div>
            <Building className="w-5 h-5" />
            <span>حساب ها</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <User className="w-5 h-5" />
            <span>مخاطبان</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <Lightbulb className="w-5 h-5" />
            <span>سرنخ ها</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <Star className="w-5 h-5" />
            <span>فرصت ها</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">فروش</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <FileText className="w-5 h-5" />
            <span>قراردادها</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <FileText className="w-5 h-5" />
            <span>فاکتور ها</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
            <Package className="w-5 h-5" />
            <span>محصولات</span>
          </div>
        </div>
      </div>
    </div>
  )
}