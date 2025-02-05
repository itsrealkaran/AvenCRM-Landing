import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="careers" />
      <main className="flex-grow py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Join Our Team</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Interested in working with us? Fill out the form below and we'll get back to you.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" required />
              </div>
              <div>
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" required />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
            </div>
            <div>
              <Label htmlFor="resume">Resume/CV</Label>
              <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
            </div>
            <div>
              <Label htmlFor="message">Cover Letter</Label>
              <Textarea id="message" placeholder="Tell us why you'd like to work with us" rows={5} required />
            </div>
            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

