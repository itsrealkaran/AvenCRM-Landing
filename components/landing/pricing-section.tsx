"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Zap } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PricingPlan {
  name: string
  description: string
  price: {
    monthly: number
    annually: number
  }
  features: string[]
  type: string
  popular?: boolean
}

const companyPlans: PricingPlan[] = [
  {
    name: "Free Trial",
    description: "Perfect for testing the waters",
    price: {
      monthly: 0,
      annually: 0
    },
    features: [
      "Task Manager & Calendar",
      "Basic Team Management",
      "Client Management (Limited to 5)",
      "Basic Monitoring Tools",
      "Property Management (2 properties)",
      "Basic Lead Management",
      "14-day trial period"
    ],
    type: "trial"
  },
  {
    name: "Basic",
    description: "For small companies and teams",
    price: {
      monthly: 14,
      annually: 9
    },
    features: [
      "Task Manager & Calendar",
      "Team Management (up to 5 members)",
      "Client Management",
      "Advanced Monitoring Dashboard",
      "Property Management (5 per user)",
      "Lead Management System",
      "Basic Marketing Tools"
    ],
    type: "basic"
  },
  {
    name: "Premium",
    description: "For growing businesses",
    price: {
      monthly: 26,
      annually: 19
    },
    features: [
      "All Basic features",
      "Advanced Team Management",
      "Unlimited Client Management",
      "Real-time Monitoring",
      "Property Management (15 per user)",
      "Advanced Lead Management",
      "Marketing Builder (Content Builder)",
      "Email Campaigns (Non-attachment)"
    ],
    type: "premium",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: {
      monthly: 41,
      annually: 29
    },
    features: [
      "All Premium features",
      "Unlimited Team Management",
      "Enterprise Client Management",
      "Advanced Monitoring & Reporting",
      "Unlimited Property Management",
      "Enterprise Lead Management",
      "Email Campaigns (500/monthly)",
      "AI Page Builder",
      "Meta Ads Integration",
      "AI Context Aware Search",
      "AI Email Writer"
    ],
    type: "enterprise"
  }
]

const individualPlans: PricingPlan[] = [
  {
    name: "Free Trial",
    description: "Try all features risk-free",
    price: {
      monthly: 0,
      annually: 0
    },
    features: [
      "Task Manager & Calendar",
      "Basic Team Management",
      "Client Management (Limited to 3)",
      "Basic Monitoring Tools",
      "Property Management (1 property)",
      "Basic Lead Management",
      "14-day trial period"
    ],
    type: "trial"
  },
  {
    name: "Basic",
    description: "For individual professionals",
    price: {
      monthly: 11,
      annually: 7
    },
    features: [
      "Task Manager & Calendar",
      "Basic Team Management",
      "Client Management",
      "Standard Monitoring",
      "Property Management (5 properties)",
      "Lead Management"
    ],
    type: "basic"
  },
  {
    name: "Premium",
    description: "For power users",
    price: {
      monthly: 22,
      annually: 16
    },
    features: [
      "All Basic features",
      "Advanced Team Management",
      "Enhanced Client Management",
      "Advanced Monitoring",
      "Property Management (10 properties)",
      "Advanced Lead Management",
      "Marketing Builder",
      "Basic Email Campaigns"
    ],
    type: "premium",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For high-volume agents",
    price: {
      monthly: 35,
      annually: 26
    },
    features: [
      "All Premium features",
      "Enterprise Team Management",
      "Unlimited Client Management",
      "Premium Monitoring Suite",
      "Unlimited Property Management",
      "Enterprise Lead Management",
      "Advanced Marketing Builder",
      "Email Campaigns (500/monthly)",
      "Page Builder",
      "Meta Ads Integration",
      "AI Context Aware Search",
      "AI Email Writer",
      "AI Page Builder"
    ],
    type: "enterprise"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [isIndividual, setIsIndividual] = useState(false)

  const plans = isIndividual ? individualPlans : companyPlans

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-14">
          <motion.div variants={itemVariants} className="flex mb-4 items-center justify-center">
            <span className="text-sm font-medium text-[#6f6c90] tracking-tight">PRICING</span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#222222] mb-6"
          >
            Simple & Transparent Pricing
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-[#6f6c90] max-w-2xl mx-auto mb-8"
          >
            Choose the plan that's right for you with our clear, competitive pricing. Perfect for individuals and businesses alike.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center items-center gap-8 mb-8">
            <Button 
              variant={isIndividual ? "outline" : "default"}
              onClick={() => setIsIndividual(false)}
              className="px-6 py-2 rounded-full"
            >
              For Companies
            </Button>
            <Button 
              variant={isIndividual ? "default" : "outline"}
              onClick={() => setIsIndividual(true)}
              className="px-6 py-2 rounded-full"
            >
              For Individuals
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="bg-gray-200 data-[state=checked]:bg-blue-600"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annually
            </span>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={isIndividual ? 'individual' : 'company'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.type}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className={`p-8 h-full flex flex-col rounded-3xl shadow-lg ${
                  plan.type === 'trial'
                    ? 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white'
                    : plan.popular 
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white' 
                      : 'bg-white'
                }`}>
                  {plan.popular && plan.type !== 'trial' && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.type === 'trial' || plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold">
                        ${isAnnual ? plan.price.annually : plan.price.monthly}
                      </span>
                      <span className={`text-lg ${plan.type === 'trial' || plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                        {plan.type === 'trial' ? '' : isAnnual ? '/month(equivalent)' : '/month'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 mt-0.5 ${
                            plan.type === 'trial'
                              ? 'text-yellow-300'
                              : plan.popular ? 'text-cyan-300' : 'text-green-500'
                          }`} />
                          <span className={plan.type === 'trial' || plan.popular ? 'text-white/90' : 'text-gray-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => {
                      window.location.href = 'https://crm.avencrm.com/signup';
                    }}
                    className={`mt-8 w-full h-12 rounded-full text-lg font-semibold transition-all duration-300 ${
                      plan.type === 'trial'
                        ? 'bg-white text-purple-700 hover:bg-purple-100'
                        : plan.popular
                          ? 'bg-white text-blue-600 hover:bg-blue-50'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {plan.type === 'trial' ? 'Start Free Trial' : 'Get started'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="flex justify-center items-center space-x-2 text-blue-600">
            <Zap className="w-5 h-5" />
            <span className="font-medium">Need a custom plan? Contact our sales team</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

