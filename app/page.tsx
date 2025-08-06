import TopBar from '@/components/TopBar'
import SecondaryBar from '@/components/SecondaryBar'
import Sidebar from '@/components/Sidebar'
import DashboardHeader from '@/components/DashboardHeader'
import SummaryCards from '@/components/SummaryCards'
import SalesChart from '@/components/SalesChart'
import NextMeeting from '@/components/NextMeeting'
import SalesFunnel from '@/components/SalesFunnel'
import LeadStatus from '@/components/LeadStatus'
import LeadByStatus from '@/components/LeadByStatus'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <SecondaryBar />
      <Sidebar />
      
      <main className="mr-64 p-6">
        <DashboardHeader />
        <SummaryCards />
        <SalesChart />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <NextMeeting />
          <SalesFunnel />
          <LeadStatus />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div></div>
          <div></div>
          <LeadByStatus />
        </div>
      </main>
    </div>
  )
}