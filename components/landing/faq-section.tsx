"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is AvenCRM?",
    answer:
      "AvenCRM is a comprehensive customer relationship management solution designed specifically for real estate professionals. It offers tools for lead management, contact organization, and task automation to streamline your real estate business operations.",
  },
  {
    question: "How does AvenCRM differ from other CRM systems?",
    answer:
      "AvenCRM is tailored for the real estate industry, offering specialized features like property listing management, client tracking, and automated marketing tools. Our platform focuses on the unique needs of real estate professionals, providing an integrated workflow that other general CRM systems may lack.",
  },
  {
    question: "Can I customize AvenCRM to fit my specific business needs?",
    answer:
      "Yes, AvenCRM offers customization options to adapt to your specific business processes. Depending on your plan, you can customize fields, workflows, and reports to align with your unique requirements.",
  },
  {
    question: "What kind of support does AvenCRM provide?",
    answer:
      "We offer various levels of support based on your plan. This ranges from email support for our basic plans to priority email and chat support for premium users. Our enterprise clients benefit from 24/7 phone, email, and chat support, ensuring you always have the assistance you need.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial that allows you to explore all of AvenCRM's core features. This gives you the opportunity to experience how our platform can benefit your real estate business before making a commitment.",
  },
]

export function FaqSection() {
  return (
    <section className="py-24 px-4 bg-[#ffffff]">
      <div className="max-3xl md:max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-medium text-[#141414] leading-tight max-w-2xl"
          >
            <div className="flex gap-4 items-end">
            COMMON
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex text-lg text-[#2e2e2e] mt-4 md:mt-0"
          >
            SOME QUESTIONS
            <br />
            PEOPLE USUALLY ASK
          </motion.p>
          </div>
            QUESTIONS
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-[#e5e5e5] px-0"
              >
                <AccordionTrigger className="text-lg font-medium text-[#141414] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#3e3e3e] pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

