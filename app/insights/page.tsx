"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Clock, Bell } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9BF3F0] via-[#DAFFED] to-[#FFC2B4]">
      <Header currentPage="insights"/>
      <div className="py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div

            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100"
          >
            <div className="flex justify-center mb-6">
              <Clock className="w-16 h-16 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4 tracking-tight">
              Coming Soon
            </h2>
            <p className="text-lg text-[#6f6c90] mb-8">
              We're working on bringing you valuable insights and resources about real estate management.
              Stay tuned!
            </p>
            <Button 
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-8 py-6"
            >
              <Bell className="w-5 h-5 mr-2" />
              Get notified when we launch
            </Button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
