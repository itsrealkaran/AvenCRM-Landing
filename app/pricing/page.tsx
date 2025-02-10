"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, X, HelpCircle, Zap } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

interface Feature {
  name: string
  description?: string
  free: boolean | string
  basic: boolean | string
  premium: boolean | string
  enterprise: boolean | string
}

const features: { category: string; items: Feature[] }[] = [
  {
    category: "Core Features",
    items: [
      {
        name: "Task Manager & Calendar",
        description: "Manage tasks and schedule appointments",
        free: true,
        basic: true,
        premium: true,
        enterprise: true
      },
      {
        name: "Team Management",
        description: "Collaborate with team members",
        free: "Limited (2)",
        basic: "Up to 5",
        premium: "Unlimited",
        enterprise: "Unlimited + Advanced"
      },
      {
        name: "Client Management",
        description: "Track and manage client relationships",
        free: "Up to 3",
        basic: "Up to 50",
        premium: "Unlimited",
        enterprise: "Unlimited + VIP"
      }
    ]
  },
  {
    category: "Property Management",
    items: [
      {
        name: "Properties per User",
        description: "Number of properties you can manage",
        free: "2",
        basic: "5",
        premium: "15",
        enterprise: "Unlimited"
      },
      {
        name: "Property Analytics",
        description: "Detailed property performance metrics",
        free: false,
        basic: "Basic",
        premium: "Advanced",
        enterprise: "Enterprise"
      }
    ]
  },
  {
    category: "Marketing Tools",
    items: [
      {
        name: "Marketing Builder",
        description: "Create marketing materials and campaigns",
        free: false,
        basic: "Basic",
        premium: "Advanced",
        enterprise: "Enterprise + AI"
      },
      {
        name: "WhatsApp Campaigns",
        description: "Send WhatsApp messages to clients",
        free: false,
        basic: false,
        premium: false,
        enterprise: true
      },
      {
        name: "Meta Ads Integration",
        description: "Integrate with Meta Ads",
        free: false,
        basic: false,
        premium: false,
        enterprise: true
      },
      {
        name: "Email Campaigns",
        description: "Send bulk emails to clients",
        free: false,
        basic: "100/month",
        premium: "Non-attachment",
        enterprise: "500/month"
      },
      {
        name: "Page Builder",
        description: "Create landing pages for properties",
        free: false,
        basic: false,
        premium: false,
        enterprise: true
      }
    ]
  },
  {
    category: "AI Features",
    items: [
      {
        name: "AI Context Aware Search",
        description: "Smart property and client search",
        free: false,
        basic: false,
        premium: false,
        enterprise: true
      },
      {
        name: "AI Email Writer",
        description: "AI-powered email content generation",
        free: false,
        basic: false,
        premium: false,
        enterprise: true
      },
      {
        name: "AI Page Builder",
        description: "AI-assisted landing page creation",
        free: false,
        basic: false,
        premium: false,
        enterprise: true
      }
    ]
  }
]

const getUserLocation = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    const middleEastCountries = ['AE', 'SA', 'BH', 'OM', 'QA', 'KW', 'IN'];
    const northAmericaCountries = ['CA'];
    
    if (middleEastCountries.includes(data.country_code)) {
      return 'AED';
    } else if (northAmericaCountries.includes(data.country_code)) {
      return 'CAD';
    }
    
    return 'USD';
  } catch (error) {
    console.error('Error fetching location:', error);
    return 'USD';
  }
};

const getCurrencySymbol = (currency: string) => {
  switch(currency) {
    case 'CAD':
      return 'C$';
    case 'AED':
      return 'AED';
    default:
      return '$';
  }
};

export default function Page() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [isIndividual, setIsIndividual] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [currencySymbol, setCurrencySymbol] = useState('$')

  const prices = {
    individual: {
      basic: { 
        monthly: { USD: 11, CAD: 15, AED: 40 },
        annually: { USD: 7, CAD: 10, AED: 26 }
      },
      premium: { 
        monthly: { USD: 22, CAD: 30, AED: 70 },
        annually: { USD: 16, CAD: 22, AED: 52 }
      },
      enterprise: { 
        monthly: { USD: 35, CAD: 50, AED: 120 },
        annually: { USD: 26, CAD: 35, AED: 85 }
      }
    },
    company: {
      basic: { 
        monthly: { USD: 14, CAD: 20, AED: 51 },
        annually: { USD: 9, CAD: 13, AED: 33 }
      },
      premium: { 
        monthly: { USD: 26, CAD: 37, AED: 95 },
        annually: { USD: 19, CAD: 27, AED: 70 }
      },
      enterprise: { 
        monthly: { USD: 41, CAD: 59, AED: 150 },
        annually: { USD: 29, CAD: 42, AED: 105 }
      }
    }
  }

  useEffect(() => {
    const detectLocation = async () => {
      const detectedCurrency = await getUserLocation();
      setCurrency(detectedCurrency);
      setCurrencySymbol(getCurrencySymbol(detectedCurrency));
    };

    detectLocation();
  }, []);

  const currentPrices = isIndividual ? prices.individual : prices.company

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-[#DAFFED] to-blue-100">
    <Header currentPage="pricing"/>
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#222222] mb-2 tracking-tight"
            >
              Choose Your Perfect Plan
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#6f6c90] max-w-2xl mx-auto mb-8"
            >
              Simple, transparent pricing that grows with you.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center items-center gap-4 mb-8"
            >
              <Button 
                variant={isIndividual ? "outline" : "default"}
                onClick={() => setIsIndividual(false)}
                className="px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                For Companies
              </Button>
              <Button 
                variant={isIndividual ? "default" : "outline"}
                onClick={() => setIsIndividual(true)}
                className="px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                For Individuals
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="bg-gray-200 data-[state=checked]:bg-gradient-to-r from-blue-500 to-cyan-500"
              />
              <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Annually
              </span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left p-8 min-w-[200px]">Features</th>
                    <th className="p-8 text-center w-[200px]">
                      <div className="mb-2 text-lg font-medium">Free Trial</div>
                      <div className="text-4xl font-bold mb-2">NA</div>
                      <div className="text-sm text-gray-500 mb-6">14 days</div>
                    </th>
                    <th className="p-8 text-center w-[200px]">
                      <div className="mb-2 text-lg font-medium">Basic</div>
                      <div className="text-4xl font-bold mb-2">
                        {currencySymbol}{isAnnual 
                          ? currentPrices.basic.annually[currency] 
                          : currentPrices.basic.monthly[currency]}
                      </div>
                      <div className="text-sm text-gray-500 mb-6">per agent/month</div>
                    </th>
                    <th className="p-8 text-center w-[200px] relative bg-gradient-to-br from-blue-50 to-cyan-50">
                      <div className="mb-2 text-lg font-medium">Premium</div>
                      <div className="text-4xl font-bold mb-2 text-blue-600">
                        {currencySymbol}{isAnnual 
                          ? currentPrices.premium.annually[currency] 
                          : currentPrices.premium.monthly[currency]}
                      </div>
                      <div className="text-sm text-gray-500 mb-6">per agent/month</div>
                    </th>
                    <th className="p-8 text-center w-[200px]">
                      <div className="mb-2 text-lg font-medium">Enterprise</div>
                      <div className="text-4xl font-bold mb-2">
                        {currencySymbol}{isAnnual 
                          ? currentPrices.enterprise.annually[currency] 
                          : currentPrices.enterprise.monthly[currency]}
                      </div>
                      <div className="text-sm text-gray-500 mb-6">per agent/month</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((section, sectionIndex) => (
                    <>
                      <tr key={`section-${sectionIndex}`} className="bg-gray-50/50">
                        <td colSpan={5} className="p-6 font-semibold text-[#6f6c90] tracking-wide">
                          {section.category}
                        </td>
                      </tr>
                      {section.items.map((feature, featureIndex) => (
                        <tr key={`feature-${sectionIndex}-${featureIndex}`} className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors duration-150">
                          <td className="p-6">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="flex items-center gap-2 text-[#6f6c90] hover:text-gray-900 transition-colors duration-150">
                                  {feature.name}
                                  {feature.description && (
                                    <HelpCircle className="w-4 h-4 text-gray-400" />
                                  )}
                                </TooltipTrigger>
                                {feature.description && (
                                  <TooltipContent className="bg-white/90 backdrop-blur-sm border border-gray-100">
                                    <p>{feature.description}</p>
                                  </TooltipContent>
                                )}
                              </Tooltip>
                            </TooltipProvider>
                          </td>
                          <td className="p-6 text-center">
                            {renderFeatureValue(feature.free)}
                          </td>
                          <td className="p-6 text-center">
                            {renderFeatureValue(feature.basic)}
                          </td>
                          <td className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50">
                            {renderFeatureValue(feature.premium)}
                          </td>
                          <td className="p-6 text-center">
                            {renderFeatureValue(feature.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-blue-600 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer">
              <Zap className="w-5 h-5" />
              <span className="font-medium">Need a custom plan? Contact our sales team</span>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function renderFeatureValue(value: boolean | string) {
  if (typeof value === 'string') {
    return <span className="text-sm text-[#6f6c90] font-medium">{value}</span>
  }
  
  if (value === true) {
    return <Check className="w-5 h-5 text-green-500 mx-auto" />
  }
  
  return <X className="w-5 h-5 text-red-500 mx-auto" />
}