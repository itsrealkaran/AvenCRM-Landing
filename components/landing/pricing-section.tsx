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
      "All core features for 14 days",
      "Up to 100,000 tracked visits",
      "Basic email support",
      "Up to 3 team members"
    ],
    type: "trial"
  },
  {
    name: "Startup",
    description: "For small companies and teams",
    price: {
      monthly: 99,
      annually: 89
    },
    features: [
      "All analytics features",
      "Up to 500,000 tracked visits",
      "Normal support",
      "Up to 10 team members"
    ],
    type: "startup"
  },
  {
    name: "Growth",
    description: "For fast-growing businesses",
    price: {
      monthly: 199,
      annually: 179
    },
    features: [
      "Advanced analytics",
      "Up to 1,000,000 tracked visits",
      "Priority support",
      "Up to 25 team members"
    ],
    type: "growth",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: {
      monthly: 399,
      annually: 359
    },
    features: [
      "Custom analytics solutions",
      "Unlimited tracked visits",
      "24/7 dedicated support",
      "Unlimited team members"
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
      "Core features for 14 days",
      "Up to 50,000 tracked visits",
      "Email support",
      "1 user"
    ],
    type: "trial"
  },
  {
    name: "Basic",
    description: "For individual professionals",
    price: {
      monthly: 49,
      annually: 44
    },
    features: [
      "Essential analytics features",
      "Up to 100,000 tracked visits",
      "Email support",
      "1 user"
    ],
    type: "basic"
  },
  {
    name: "Pro",
    description: "For power users",
    price: {
      monthly: 99,
      annually: 89
    },
    features: [
      "Advanced analytics features",
      "Up to 500,000 tracked visits",
      "Priority email support",
      "1 user"
    ],
    type: "pro",
    popular: true
  },
  {
    name: "Team",
    description: "For small teams",
    price: {
      monthly: 199,
      annually: 179
    },
    features: [
      "All analytics features",
      "Up to 1,000,000 tracked visits",
      "24/7 phone support",
      "Up to 5 team members"
    ],
    type: "team"
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
            Simple, transparent pricing
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
                        {plan.type === 'trial' ? '' : isAnnual ? '/year' : '/month'}
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

