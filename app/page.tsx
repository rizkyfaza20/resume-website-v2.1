"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import profilePic from "./assets/profile.jpg"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"

export default function FullscreenDevOpsResume() {
  const [activeSection, setActiveSection] = useState("about")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const sections = useMemo(() => [
    { id: "about", title: "About", icon: "User" },
    { id: "skillset", title: "Skillset", icon: "Code" },
    { id: "experiences", title: "Experiences", icon: "Briefcase" },
    { id: "contributions", title: "Contributions", icon: "Globe" },
    { id: "certifications", title: "Certifications", icon: "Award" },
  ], [])

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
                "Docker / Kubernetes / Podman",
                "Terraform / Pulumi",
                "Ansible / Azure Bicep",
                "EKS / GKE / RKE",
                "ArgoCD",
                "Helm",
                "Azure DevOps / Github Actions",
                "Drone CI",
                "SQL / NoSQL Databases",
                "Powershell / Bash scripting",
                "Prometheus / Grafana",
                "Vault / Azure Key Vault / Google KMS",
                "ELK Stack / Sentry",
                "SonarQube",
                "Crowdsec",
                "Oauth2 Proxy / Keycloak",
                "Cloudflare",
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
                <p className="text-sm text-gray-400 mb-4">Bandung, Indonesia - Fulltime Contract</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Optimized Kubernetes clusters by improving networking (ingress/egress) and resource utilization, reducing cloud costs by <b>16% and increasing performance by 10%.</b></li>
                  <li>Automated infrastructure provisioning with Terraform, managing AWS services (ECS, ALB, CodePipeline) and migrating DNS from Route53 to Cloudflare based on cost-performance analysis.</li>
                  <li>Enhanced deployment efficiency by restructuring Helm charts and implementing ArgoCD for GitOps-driven Kubernetes service management.</li>
                  <li>Improved monitoring & incident response by integrating Grafana & Prometheus for real-time observability and creating response guidelines for faster outage resolution.</li>
                  <li>Initiate and Involved in performing research for independent infrastructure development to reduce costs for whole projects in <b>3 months</b></li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">DevOps Analyst - Cargo Community Network Pte. Ltd.</h3>
                <p className="text-gray-400 mb-4">May 2023 - August 2023</p>
                <p className="text-sm text-gray-400 mb-4">Singapore - Freelance</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Initiave research to optimize Azure DevOps Server REST API, improving DevOps workflows.</li>
                  <li>Enhanced Nagios XI monitoring system for improved operational visibility</li>
                  <li>Implemented automated WAF rules in Azure using Terraform for security compliance</li>
                  <li>Established and documented DevOps governance standards</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Med. DevOps Engineer - Livecom B.V</h3>
                <p className="text-gray-400 mb-4">July 2022 - March 2023</p>
                <p className="text-sm text-gray-400 mb-4">Netherland - Fulltime (Remote from Indonesia)</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Automated deployments & monitoring using Terraform, Bash scripts, and Grafana + Prometheus, cutting manual effort by 2 hours per week and improving system insights by 5%.</li>
                  <li>Enhanced search & authentication by managing Elasticsearch clusters for Java applications (reducing index search time by 5-15 minutes) and integrating Keycloak for secure authentication.</li>
                  <li>Improved CI/CD & system efficiency by resolving pipeline issues in React.js, .NET, and Java projects and orchestrating Docker-based log management.</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Jr. DevOps Engineer - D-Shore B.V</h3>
                <p className="text-gray-400 mb-4">June 2021 - September 2022</p>
                <p className="text-sm text-gray-400 mb-4">Netherland - Fulltime (Remote from Indonesia)</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Built and managed end-to-end CI/CD pipelines using Azure DevOps, supporting a diverse range of applications.</li>
                  <li>Developed Infrastructure-as-Code solutions using Bicep and ARM Templates, automating cloud deployments in Azure.</li>
                  <li>Implemented third-party tools for code scanning and version control, improving code quality and reducing deployment errors.</li>
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
                  <li>Helm Chart Contributor – Documenso (Community Contribution) (2024 - Present)</li>
                  <li>Participated in Google Code-in 2018 to learn in contribute to Open Source Community (2018)</li>
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
                "AWS Cloud Developing - AWS Academy",
                "AWS Cloud Quest - Cloud Practicioner",
                "Cisco CyberOps Associate"
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

