"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Sparkles, Mail, FileText, Calculator, Zap, Users } from 'lucide-react'
import Image from "next/image"

interface Feature {
  id: string
  icon: React.ElementType
  title: string
  description: string
  benefits: string[]
  image: string
}

const features: Feature[] = [
  {
    id: "task-generation",
    icon: Sparkles,
    title: "AI-Powered Task Generation",
    description: "Revolutionize your workflow with our AI-driven task generation. Transform meeting notes, emails, and ideas into actionable tasks instantly.",
    benefits: [
      "Save up to 3 hours per week on task management",
      "Ensure no action items slip through the cracks",
      "Prioritize tasks automatically based on urgency and impact"
    ],
    image: "https://v0.blob.com/task-generation.png"
  },
  {
    id: "email",
    icon: Mail,
    title: "Smart Email Composition",
    description: "Craft perfect emails in seconds with our AI-assisted email composer. From cold outreach to follow-ups, hit the right tone every time.",
    benefits: [
      "Reduce email writing time by up to 70%",
      "Improve response rates with optimized language",
      "Maintain consistent brand voice across all communications"
    ],
    image: "https://v0.blob.com/email-composition.png"
  },
  {
    id: "content",
    icon: FileText,
    title: "Dynamic Content Generation",
    description: "Create high-quality, SEO-optimized content for your marketing needs. Our AI analyzes your brand voice and target audience to deliver compelling copy.",
    benefits: [
      "Generate blog posts, social media content, and ad copy in minutes",
      "Ensure consistent messaging across all platforms",
      "Boost engagement with tailored content for different audience segments"
    ],
    image: "https://v0.blob.com/content-generation.png"
  },
  {
    id: "formula",
    icon: Calculator,
    title: "Intelligent Formula Builder",
    description: "Simplify complex calculations with our natural language formula builder. Turn your requirements into accurate formulas without any coding knowledge.",
    benefits: [
      "Reduce errors in financial and data analysis",
      "Save time on creating and maintaining complex spreadsheets",
      "Empower non-technical team members to work with data effectively"
    ],
    image: "https://v0.blob.com/formula-building.png"
  },
  {
    id: "automation",
    icon: Zap,
    title: "Workflow Automation",
    description: "Streamline your business processes with powerful, easy-to-setup automation. Connect your favorite tools and let AvenCRM do the heavy lifting.",
    benefits: [
      "Automate up to 80% of repetitive tasks",
      "Reduce human error in data entry and transfer",
      "Increase team productivity by focusing on high-value activities"
    ],
    image: "https://v0.blob.com/workflow-automation.png"
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Team Collaboration Hub",
    description: "Foster seamless teamwork with our integrated collaboration tools. Share insights, delegate tasks, and stay aligned on goals in real-time.",
    benefits: [
      "Improve team communication and reduce email overload",
      "Increase project visibility and accountability",
      "Enhance decision-making with centralized information"
    ],
    image: "https://v0.blob.com/team-collaboration.png"
  }
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string>(features[0].id)
  const [isChanging, setIsChanging] = useState(false)

  const handleFeatureChange = useCallback((id: string) => {
    if (id !== activeFeature) {
      setIsChanging(true)
      setTimeout(() => {
        setActiveFeature(id)
        setIsChanging(false)
      }, 300)
    }
  }, [activeFeature])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        const currentIndex = features.findIndex(f => f.id === activeFeature)
        let newIndex
        if (e.key === 'ArrowDown') {
          newIndex = (currentIndex + 1) % features.length
        } else {
          newIndex = (currentIndex - 1 + features.length) % features.length
        }
        handleFeatureChange(features[newIndex].id)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeFeature, handleFeatureChange])

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center text-gray-900">
          Powerful Features to Supercharge Your Workflow
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Discover how AvenCRM's cutting-edge features can transform your business operations, boost productivity, and drive growth.
        </p>
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-16 items-center">
          {/* Left Column - Feature List with Dropdowns */}
          <div className="space-y-4">
            {features.map((feature) => {
              const isActive = feature.id === activeFeature;
              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{ 
                    backgroundColor: isActive ? 'rgba(59, 130, 246, 0.02)' : 'transparent',
                  }}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <button
                    onClick={() => handleFeatureChange(feature.id)}
                    className="w-full py-6 px-6 flex items-center justify-between text-left focus:outline-none group"
                    aria-expanded={isActive}
                    aria-controls={`feature-description-${feature.id}`}
                  >
                    <h3 className={`text-xl font-semibold ${isActive ? 'text-gray-900' : 'text-gray-600'} group-hover:text-gray-900 transition-colors`}>
                      {feature.title}
                    </h3>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ease-out ${isActive ? 'rotate-90 text-gray-900' : 'text-gray-400'}`} />
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="px-6 pb-6 space-y-4"
                      >
                        <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                        <ul className="space-y-3">
                          {feature.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <svg 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                              >
                                <path 
                                  d="M20 6L9 17L4 12" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span className="text-gray-600 text-base">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column - Feature Preview */}
          <div className="lg:flex lg:items-center lg:justify-center">
            <AnimatePresence mode="wait">
              {!isChanging && (
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg"
                >
                  <Image
                    src={features.find(f => f.id === activeFeature)?.image || "/placeholder.svg"}
                    alt={`${activeFeature} preview`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 flex justify-center space-x-2">
          {features.map((feature, index) => (
            <motion.button
              key={feature.id}
              className={`h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
              initial={false}
              animate={{ 
                width: feature.id === activeFeature ? '2rem' : '0.75rem',
                backgroundColor: feature.id === activeFeature ? '#2563EB' : '#E5E7EB'
              }}
              transition={{ duration: 0.3 }}
              onClick={() => handleFeatureChange(feature.id)}
              aria-label={`View ${feature.title} feature`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

