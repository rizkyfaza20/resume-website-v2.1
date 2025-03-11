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
    { id: "training-certifications", title: "Training & Certifications", icon: "Award" },
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
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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
            <h1 className="text-xl font-bold">WedusAwan - DevOps Engineer</h1>

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
            <h2 className="text-3xl font-bold mb-8 text-center sticky top-0 bg-gray-900 py-4">Experiences</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Site Reliability Engineer - Ordivo Teknologi Indonesia</h3>
                <p className="text-gray-400 mb-4">December 2023 - Present</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><b>Optimized Kubernetes</b>, reducing cloud costs by <b>16%</b> and improving performance by <b>10%</b>.</li>
                  <li><b>Automated infrastructure</b> using Terraform, managing AWS services and migrating DNS.</li>
                  <li><b>Enhanced deployments</b> with Helm charts and ArgoCD for GitOps.</li>
                  <li><b>Improved monitoring</b> with Grafana & Prometheus, creating faster incident responses.</li>
                  <li><b>Led infrastructure research</b>, reducing project costs in <b>3 months</b>.</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">DevOps Analyst - Cargo Community Network Pte. Ltd.</h3>
                <p className="text-gray-400 mb-4">May 2023 - August 2023</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><b>Optimized DevOps workflows</b> using Azure DevOps Server REST API.</li>
                  <li><b>Enhanced monitoring</b> with Nagios XI for better operational visibility.</li>
                  <li><b>Automated WAF security</b> using Terraform.</li>
                  <li><b>Established DevOps governance</b> standards.</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Med. DevOps Engineer - Livecom B.V</h3>
                <p className="text-gray-400 mb-4">July 2022 - March 2023</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><b>Improved server monitoring</b> using Grafana + Prometheus, optimizing performance by <b>5%</b>.</li>
                  <li><b>Automated log management & Docker orchestration</b> with Bash scripts, saving <b>2 hours/week</b>.</li>
                  <li><b>Managed Elasticsearch clusters</b> via Docker Compose, improving Java search performance and reducing index search time by <b>5-15 minutes</b>.</li>
                  <li><b>Resolved CI/CD pipeline issues</b> in React.js, .NET, and Java projects, enhancing deployment efficiency.</li>
                  <li><b>Implemented Keycloak authentication</b> for web applications, increasing security in the First Project.</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Jr. DevOps Engineer - D-Shore B.V</h3>
                <p className="text-gray-400 mb-4">June 2021 - September 2022</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><b>Built CI/CD pipelines</b> with Azure DevOps.</li>
                  <li><b>Automated cloud deployments</b> with Bicep & ARM Templates.</li>
                  <li><b>Improved code quality</b> by integrating third-party scanning tools.</li>
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
          <ul className="list-disc list-inside space-y-4">
            <li>
              Helm Chart Contributor – Documenso (Community Contribution) (2024 - Present)
              <br />
              <a href="https://artifacthub.io/packages/helm/documenso/documenso" className="text-blue-500 hover:underline">View Contribution</a>
            </li>
            <li>
              Participated in Google Code-in 2018 to learn and contribute to Open Source Community (2018)
              <br />
              <a href="https://codein.withgoogle.com/archive/" className="text-blue-500 hover:underline">View Archive</a>
            </li>
          </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
          <ul className="list-disc list-inside space-y-4">
            <li>
              First speaker at iCCom-MeetHub in Bandung, West Java (Indonesia Cloud Community)
              <br />
              <a href="https://bit.ly/iccom-bdg" className="text-blue-500 hover:underline">View Event</a>
            </li>
          </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="training-certifications" className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Training & Certifications</h2>
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

