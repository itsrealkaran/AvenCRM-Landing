"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Header } from "./header"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
}

export function Hero() {
  return (
    <section>
      <Header />
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-3xl text-[#1a1a1b] sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight tracking-tight"
          variants={itemVariants}
        >
          CRM that empowers your real estate success
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg sm:text-xl text-[#4a4a4b] max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Streamline your property deals, boost client relationships, and skyrocket your real estate business.
        </motion.p>
        
        <motion.div 
          className="mt-10"
          variants={itemVariants}
        >
          <Button 
            size="lg" 
            className="bg-black hover:bg-black/90 text-white text-lg px-8 rounded-full h-14"
          >
            Get Started →
          </Button>
        </motion.div>
        
        <motion.p 
          className="mt-4 text-sm text-[#6a6a6b]"
          variants={itemVariants}
        >
          Get full access • No credit card needed
        </motion.p>
      </motion.section>
    </section>
  )
}

