"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import profilePic from "./assets/profile.jpg"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"

export default function FullscreenDevOpsResume() {
  const [activeSection, setActiveSection] = useState("about")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const sections = [
    { id: "about", title: "About", icon: "User" },
    { id: "skillset", title: "Skillset", icon: "Code" },
    { id: "experiences", title: "Experiences", icon: "Briefcase" },
    { id: "contributions", title: "Contributions", icon: "Globe" },
    { id: "certifications", title: "Certifications", icon: "Award" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY
      const windowHeight = window.innerHeight
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          return currentPosition >= top - windowHeight / 2 && currentPosition < bottom - windowHeight / 2
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsSidebarOpen(false)
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="bg-gray-900 text-white font-sans">
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold">Rizky Faza - DevOps Engineer</h1>

            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700 z-30" onClick={toggleSidebar}>
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{isSidebarOpen ? "Close menu" : "Open menu"}</span>
            </Button>
          </div>
        </div>
      </nav>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      <main className="pt-16">
        <section id="about" className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl mx-auto text-center">
            <Image
              src={profilePic}
              alt="Rizky Faza"
              width={256}
              height={256}
              className="rounded-full mx-auto mb-8 object-cover"
              priority
            />
            <h2 className="text-4xl font-bold mb-4">Rizky Faza</h2>
            <p className="text-xl mb-8">
              Experienced DevOps Engineer and Site Reliability Engineer passionate about automating processes and improving system reliability.
              Skilled in cloud technologies, CI/CD pipelines, and infrastructure as code. Committed to fostering
              collaboration between development and operations teams.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Download CV
              </a>
              <a href="/contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="skillset" className="min-h-screen flex items-center justify-center p-4 bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Skillset</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {[
                "AWS / Azure / GCP",
                "Docker / Kubernetes",
                "Terraform / Pulumi",
                "Ansible / Azure Bicep",
                "EKS / GKE / RKE",
                "Azure DevOps / Github Actions",
                "Powershell / Bash scripting",
                "Prometheus / Grafana",
                "ELK Stack",
                "Git",
                "Agile / Scrum",
              ].map((skill) => (
                <div key={skill} className="bg-gray-700 p-4 rounded-lg">
                  <p className="font-semibold">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experiences" className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Experiences</h2>
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Site Reliability Engineer - Ordivo Teknologi Indonesia</h3>
                <p className="text-gray-400 mb-4">December 2023 - Present</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Led migration to AWS, resulting in 30% cost reduction</li>
                  <li>Implemented Kubernetes, improving deployment efficiency by 50%</li>
                  <li>Designed CI/CD pipelines, reducing deployment time by 70%</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Med. DevOps Engineer - Livecom B.V</h3>
                <p className="text-gray-400 mb-4">June 2021 - March 2023</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Automated infrastructure provisioning with Terraform</li>
                  <li>Implemented monitoring using Prometheus and Grafana</li>
                  <li>Optimized application performance and scalability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contributions" className="min-h-screen flex items-center justify-center p-4 bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Community Contributions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Open Source</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Initiave and contribute developing Unofficial Helm Chart for Documenso</li>
                  <li>Participated in Google Code-in 2018 to learn in contribute to Open Source Community</li>
                  
                </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>First speaker at iCCom-Talk in Bandung, West Java (Indonesia Cloud Community)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "AWS Certified DevOps Engineer - Professional",
                "Certified Kubernetes Administrator (CKA)",
                "HashiCorp Certified: Terraform Associate",
              ].map((cert) => (
                <div key={cert} className="bg-gray-800 p-6 rounded-lg text-center">
                  <p className="font-semibold">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

