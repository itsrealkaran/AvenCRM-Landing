"use client"

import { BarChart3, ArrowUpRight, CircleDot, TrendingUp, Calendar, Mail, Users, DollarSign } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const growthData = [
  { month: 'January', value: 120000 },
  { month: 'February', value: 140000 },
  { month: 'March', value: 160000 },
  { month: 'April', value: 850000 },
  { month: 'May', value: 450000 },
]

export function VideoSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Product Overview</h2>
                <p className="text-gray-500 mt-1">See how AvenCRM works in action</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                Live Demo
              </Badge>
            </div>
            
            <Card className="shadow-lg">
              <video
                className="w-full h-full rounded-lg"
                controls
                src="/intro.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </Card>

            <div className="grid sm:grid-cols-3 gap-4">
              <StatCard
                title="Active Users"
                value="2.4k"
                change="+12%"
                icon={CircleDot}
                color="blue"
              />
              <StatCard
                title="Deals Closed"
                value="845"
                change="+25%"
                icon={BarChart3}
                color="violet"
              />
              <StatCard
                title="Revenue"
                value="$8.1M"
                change="+18%"
                icon={TrendingUp}
                color="emerald"
              />
            </div>
          </div>

          {/* Side Content */}
          <div className="flex flex-col gap-6 justify-between">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Recent Activities</h3>
              <div className="space-y-4">
                <ActivityItem
                  icon={Calendar}
                  title="Product Demo"
                  subtitle="with Sarah Chen"
                  time="Today at 2:00 PM"
                  color="blue"
                />
                <ActivityItem
                  icon={Mail}
                  title="Follow-up Email"
                  subtitle="to Enterprise Clients"
                  time="Yesterday at 4:30 PM"
                  color="violet"
                />
                <ActivityItem
                  icon={Users}
                  title="Team Meeting"
                  subtitle="Quarterly Review"
                  time="Tomorrow at 10:00 AM"
                  color="emerald"
                />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-1">Company Growth</h3>
              <p className="text-sm text-gray-500 mb-4">Monthly registration analysis</p>
              <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                      width={60}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'white', 
                        border: 'none', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      dot={{ fill: '#10B981', strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: '#10B981' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, change, icon: Icon, color }: { title: string, value: string, change: string, icon: React.ElementType, color: string }) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className={`h-8 w-8 bg-${color}-100 rounded-full flex items-center justify-center`}>
          <Icon className={`text-${color}-500 w-5 h-5`} />
        </div>
      </div>
      <div className="flex items-center text-green-500 text-sm mt-2">
        <ArrowUpRight className="w-4 h-4" />
        <span>{change} this month</span>
      </div>
    </Card>
  )
}

  function ActivityItem({ icon: Icon, title, subtitle, time, color }: { icon: React.ElementType, title: string, subtitle: string, time: string, color: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`h-8 w-8 bg-${color}-100 rounded-full flex items-center justify-center shrink-0`}>
        <Icon className={`text-${color}-500 w-4 h-4`} />
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  )
}

