"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Sparkles, Mail, Facebook } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
    id: "meta-ads",
    icon: Facebook,
    title: "Meta Ads Integration",
    description:
      "Seamlessly manage your Facebook and Instagram ad campaigns directly from AvenCRM. Target the right audience and track performance in real-time.",
    benefits: [
      "Increase ROI with smart audience targeting",
      "Track and optimize ad performance in real-time",
      "Manage multiple campaigns from a single dashboard",
    ],
    image: "/features/meta-ads.png",
  },
  {
    id: "whatsapp",
    icon: FaWhatsapp,
    title: "WhatsApp Campaign System",
    description:
      "Leverage WhatsApp Business API for powerful marketing campaigns and automated customer communication with detailed analytics.",

    benefits: [
      "Reach 2 billion+ WhatsApp users directly",
      "Automate responses and follow-ups",
      "Track message delivery and engagement rates",
    ],
    image: "/features/whatsapp-campaigns.png",
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Campaign System",
    description:
      "Create, automate, and track email campaigns with our powerful email marketing platform. From simple newsletters to complex drip campaigns.",
    benefits: [
      "Increase open rates with AI-optimized subject lines",
      "Automate personalized email sequences",
      "Track campaign performance with detailed analytics",
    ],
    image: "/features/email-campaigns.png",
  },
  {
    id: "ai-tools",
    icon: Sparkles,
    title: "AI-Powered Tools Suite",
    description:
      "Transform your business with our comprehensive AI tools including smart search, email writing, and page building capabilities.",
    benefits: [
      "Save hours with AI-generated content",
      "Improve search accuracy by 90%",
      "Create optimized landing pages in minutes",
    ],
    image: "/features/ai-tools.png",
  },
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string>(features[0].id)
  const [isChanging, setIsChanging] = useState(false)

  const handleFeatureChange = useCallback(
    (id: string) => {
      if (id !== activeFeature) {
        setIsChanging(true)
        setTimeout(() => {
          setActiveFeature(id)
          setIsChanging(false)
        }, 300)
      }
    },
    [activeFeature],
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault()
        const currentIndex = features.findIndex((f) => f.id === activeFeature)
        let newIndex
        if (e.key === "ArrowDown") {
          newIndex = (currentIndex + 1) % features.length
        } else {
          newIndex = (currentIndex - 1 + features.length) % features.length
        }
        handleFeatureChange(features[newIndex].id)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeFeature, handleFeatureChange])

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div className="flex mb-4 items-center justify-center">
          <span className="text-sm font-medium text-[#6f6c90] tracking-tight">FEATURES</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center text-gray-900">
          Features, supercharge workflow
        </h2>
        {/* <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Discover how AvenCRM's cutting-edge features can transform your business operations, boost productivity, and drive growth.
        </p> */}
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-16 items-center">
          {/* Left Column - Feature List with Dropdowns */}
          <div className="space-y-4">
            {features.map((feature) => {
              const isActive = feature.id === activeFeature
              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    backgroundColor: isActive ? "rgba(59, 130, 246, 0.02)" : "transparent",
                  }}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <button
                    onClick={() => handleFeatureChange(feature.id)}
                    className="w-full py-6 px-6 flex items-center justify-between text-left focus:outline-none group"
                    aria-expanded={isActive}
                    aria-controls={`feature-description-${feature.id}`}
                  >
                    <h3
                      className={`text-xl font-semibold ${isActive ? "text-gray-900" : "text-gray-600"} group-hover:text-gray-900 transition-colors`}
                    >
                      {feature.title}
                    </h3>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ease-out ${isActive ? "rotate-90 text-gray-900" : "text-gray-400"}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="px-6 pb-6 space-y-4"
                      >
                        <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                        <div className="lg:hidden lg:items-center lg:justify-center">
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
                                  src={features.find((f) => f.id === activeFeature)?.image || "/placeholder.svg"}
                                  alt={`${activeFeature} preview`}
                                  fill
                                  className="object-cover"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        {/* <ul className="space-y-3">
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
                        </ul> */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column - Feature Preview */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
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
                    src={features.find((f) => f.id === activeFeature)?.image || "/placeholder.svg"}
                    alt={`${activeFeature} preview`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4 flex justify-center lg:justify-end">
          <Button onClick={() => {
            window.location.href = '/features';
          }} variant="outline" size="lg" className="rounded-full">
            View All Features
          </Button>
        </div>

      </div>
    </section>
  )
}

