"use client"

import { useState } from "react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface Feature {
  id: string
  title: string
  longDescription: string
  benefits: string[]
  image: string
}

const features: Feature[] = [
  {
    id: "feature1",
    title: "Task Manager & Calendar",
    longDescription: "Comprehensive task and calendar management system designed for real estate professionals.",
    benefits: [
      "Smart task prioritization",
      "Team calendar synchronization",
      "Automated reminders",
      "Meeting scheduling",
      "Task dependencies tracking"
    ],
    image: "/features/task-calendar.jpg"
  },
  {
    id: "feature2",
    title: "Team Management",
    longDescription: "Advanced team collaboration and management tools to streamline operations.",
    benefits: [
      "Role-based access control",
      "Team performance metrics",
      "Workflow automation",
      "Resource allocation",
      "Team communication tools"
    ],
    image: "/features/team-management.jpg"
  },
  {
    id: "feature3",
    title: "Client Management",
    longDescription: "Complete client relationship management system with advanced tracking capabilities.",
    benefits: [
      "Client profile management",
      "Interaction history",
      "Document management",
      "Client segmentation",
      "Communication tracking"
    ],
    image: "/features/client-management.jpg"
  },
  {
    id: "feature4",
    title: "Property Management Suite",
    longDescription: "Comprehensive property management tools to streamline operations and improve efficiency.",
    benefits: [
      "Property listing management",
      "Maintenance tracking",
      "Document organization",
      "Automated rent collection",
      "Property analytics"
    ],
    image: "/features/property-management.jpg"
  },
  {
    id: "feature5",
    title: "Lead Management System",
    longDescription: "Intelligent lead management with automated workflows and tracking.",
    benefits: [
      "Lead capture automation",
      "Lead scoring",
      "Pipeline management",
      "Follow-up automation",
      "Conversion tracking"
    ],
    image: "/features/lead-management.jpg"
  },
  {
    id: "feature6",
    title: "Marketing Builder",
    longDescription: "Create and manage marketing materials with AI-assisted tools.",
    benefits: [
      "Template library",
      "Brand management",
      "Content personalization",
      "Multi-channel campaigns",
      "Performance tracking"
    ],
    image: "/features/marketing-builder.jpg"
  },
  {
    id: "feature7",
    title: "Email Campaign System",
    longDescription: "Powerful email marketing platform with advanced automation capabilities.",
    benefits: [
      "Email template builder",
      "Campaign automation",
      "A/B testing",
      "Analytics dashboard",
      "List management"
    ],
    image: "/features/email-campaigns.jpg"
  },
  {
    id: "feature8",
    title: "Page Builder",
    longDescription: "Create professional property listings and landing pages effortlessly.",
    benefits: [
      "Drag-and-drop interface",
      "Mobile optimization",
      "SEO tools",
      "Custom domains",
      "Form builder"
    ],
    image: "/features/page-builder.jpg"
  },
  {
    id: "feature9",
    title: "Meta Ads Integration",
    longDescription: "Seamless integration with Meta (Facebook) advertising platform.",
    benefits: [
      "Ad campaign management",
      "Audience targeting",
      "Budget optimization",
      "Performance tracking",
      "ROI analysis"
    ],
    image: "/features/meta-ads.jpg"
  },
  {
    id: "feature15",
    title: "WhatsApp Campaign System",
    longDescription: "Powerful WhatsApp marketing platform with business API integration and automation capabilities.",
    benefits: [
      "Bulk message campaigns",
      "Template message library",
      "Automated responses",
      "Campaign analytics",
      "Contact list management"
    ],
    image: "/features/whatsapp-campaigns.jpg"
  },
  {
    id: "feature10",
    title: "AI Context Aware Search",
    longDescription: "Intelligent search system that understands context and user intent.",
    benefits: [
      "Natural language processing",
      "Smart filters",
      "Quick search",
      "Recent searches",
      "Search analytics"
    ],
    image: "/features/ai-search.jpg"
  },
  {
    id: "feature11",
    title: "AI Email Writer",
    longDescription: "AI-powered email content generation for effective communication.",
    benefits: [
      "Content suggestions",
      "Tone adjustment",
      "Template generation",
      "Personalization",
      "Multi-language support"
    ],
    image: "/features/ai-email.jpg"
  },
  {
    id: "feature12",
    title: "AI Page Builder",
    longDescription: "Create professional pages with AI-assisted design and content suggestions.",
    benefits: [
      "Smart layouts",
      "Content optimization",
      "Design suggestions",
      "SEO recommendations",
      "Conversion optimization"
    ],
    image: "/features/ai-page-builder.jpg"
  },
  {
    id: "feature13",
    title: "Monitoring Dashboard",
    longDescription: "Comprehensive monitoring system for tracking business performance.",
    benefits: [
      "Real-time metrics",
      "Custom dashboards",
      "Alert system",
      "Data visualization",
      "Export capabilities"
    ],
    image: "/features/monitoring.jpg"
  }
]

export default function FeaturesPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)

  const toggleFeature = (id: string) => {
    setExpandedFeature(expandedFeature === id ? null : id)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="features" />
      <main className="flex-grow">
        <section className="pt-24 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="container pt-4 mx-auto max-w-6xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Powerful Features for Your Business
            </motion.h1>
            <motion.p
              className="text-xl text-center text-gray-600 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover how AvenCRM's cutting-edge features can transform your business operations, boost productivity,
              and drive growth.
            </motion.p>
          </div>
        </section>

        <section className="py-6 px-4">
          <div className="container mx-auto max-w-6xl">
            {features.map((feature, index) => (
              <AnimatePresence key={feature.id}>
                {(expandedFeature === feature.id || expandedFeature === null) && (
                  <motion.div
                    initial={expandedFeature === null ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="w-full md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-600 mb-6">{feature.longDescription}</p>
                      <h4 className="font-semibold mb-2">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the power of AvenCRM and take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-[#5932EA] hover:bg-[#4A2BC2] text-white">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
