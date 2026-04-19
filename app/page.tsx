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
    { id: "blogs", title: "Blogs", icon: "BookOpen" },
    { id: "training-certifications", title: "Certifications", icon: "Award" },
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
    <div className="bg-black text-zinc-300 font-mono min-h-screen selection:bg-zinc-800 selection:text-zinc-100 bg-grid">
      <nav className="pill-nav px-4 justify-center">
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="text-zinc-500 font-bold">$</span>
          <div className="flex items-center">
            <h1 className="text-sm font-bold tracking-tight text-zinc-100 uppercase">devopswithfaza.web.id</h1>
            <span className="ml-1 w-2 h-4 bg-zinc-100 animate-terminal-cursor"></span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-4 bg-zinc-800 mx-2" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-[9px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${activeSection === section.id ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-100"
                }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Floating Action Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-8 right-8 z-50">
        <Button
          onClick={toggleSidebar}
          className="w-14 h-14 rounded-full bg-zinc-100 text-black shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <section id="about" className="py-24 border-b border-zinc-900">
          <div className="flex flex-col md:flex-row gap-12 items-start text-left">
            <div className="w-48 h-48 relative shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src={profilePic}
                alt="Rizky Faza"
                fill
                className="object-cover border border-zinc-800"
                priority
              />
            </div>
            <div className="flex-1">
              <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">/ about</h2>
              <h2 className="text-4xl font-bold text-zinc-100 mb-6 tracking-tight uppercase">Rizky Faza</h2>
              <div className="text-lg leading-relaxed mb-8 max-w-2xl text-zinc-300 font-medium space-y-4">
                <p>
                  DevOps and Site Reliability Engineer with approximately three years of hands-on experience across <span className="text-zinc-100 underline decoration-zinc-800 underline-offset-4">Azure, AWS, and GCP</span>.
                </p>
                <p>
                  Focusing on <span className="text-zinc-100 underline decoration-zinc-800 underline-offset-4">automation, scalability, and reliability</span>. Highly adaptable, currently operating in an Azure-centric environment while maintaining cross-cloud competency.
                </p>
                <p className="text-sm text-zinc-500 italic">
                  Currently expanding capabilities toward system design and backend engineering following a structured T-shaped learning approach.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://bit.ly/getresume-rizkyfaza" className="border border-zinc-800 px-6 py-2 text-sm font-bold text-zinc-100 hover:bg-zinc-100 hover:text-black transition-all duration-300 uppercase tracking-widest">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skillset" className="py-24 border-b border-zinc-900">
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">/ skillset</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
            {[
              "Azure / AWS / GCP",
              "Kubernetes / Docker",
              "Terraform",
              "Ansible",
              "Pulumi",
              "ArgoCD",
              "FluxCD",
              "Helm Charts",
              "Monitoring & Observability Stacks",
              "CI/CD Governance",
              "Cloudflare / DNS",
              "Infrastructure Automation",
              "System Reliability",
              "Troubleshooting",
              "Mentoring"
            ].map((skill) => (
              <div key={skill} className="group cursor-default border-l border-zinc-900 hover:border-zinc-500 pl-4 transition-all duration-300">
                <p className="text-xs font-semibold text-zinc-500 group-hover:text-zinc-100 transition-colors uppercase tracking-[0.1em] leading-tight">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experiences" className="py-24 border-b border-zinc-900">
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-16">/ experiences</h2>
          <div className="space-y-24">
            {/* Sensoneo */}
            <div className="group relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-zinc-900 group-hover:bg-zinc-500 transition-colors hidden md:block" />
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-tight">Sensoneo j.s.a (Contract)</h3>
                <span className="text-[10px] font-semibold text-zinc-500 mt-2 uppercase tracking-widest bg-zinc-900/30 px-2 py-1 rounded">May 2025 - Present</span>
              </div>
              <p className="text-xs font-semibold text-zinc-500 mb-8 italic tracking-wide uppercase border-b border-zinc-900 inline-block pb-1">L2 DevOps Engineer</p>
              <ul className="space-y-4 max-w-3xl">
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Optimized monitoring and incident escalation flows, <b className="text-zinc-100 underline decoration-zinc-800">reducing service downtime by ~10%</b> and accelerating response.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Automated <b className="text-zinc-100 underline decoration-zinc-800">FluxCD PAT rotation</b> for Azure DevOps, improving security posture and reducing overhead by ~20%.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Diagnosed and resolved <b className="text-zinc-100 underline decoration-zinc-800">authentication/client registration</b> issues, stabilizing onboarding flows.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Collaborated with engineering to troubleshoot complex infrastructure, <b className="text-zinc-100 underline decoration-zinc-800">reducing recurring incidents by ~15%</b>.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Designed and implemented <b className="text-zinc-100 underline decoration-zinc-800">CI-based Terraform validation</b> pipelines for error prevention.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Refactored Terraform into <b className="text-zinc-100 underline decoration-zinc-800">modular, environment-separated structures</b> for better scalability.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Authored an RFC for <b className="text-zinc-100 underline decoration-zinc-800">Kubernetes API Gateway adoption</b> to support platform standardization.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Provided production support and monitored <b className="text-zinc-100 underline decoration-zinc-800">multi-environment deployments</b> for stable releases.</span>
                </li>
              </ul>
            </div>

            {/* Ordivo */}
            <div className="group relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-zinc-900 group-hover:bg-zinc-500 transition-colors hidden md:block" />
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-tight">Ordivo Teknologi Indonesia (Contract)</h3>
                <span className="text-[10px] font-semibold text-zinc-500 mt-2 uppercase tracking-widest bg-zinc-900/30 px-2 py-1 rounded">Dec 2023 - May 2025</span>
              </div>
              <p className="text-xs font-semibold text-zinc-500 mb-8 italic tracking-wide uppercase border-b border-zinc-900 inline-block pb-1">Site Reliability Engineer</p>
              <ul className="space-y-4 max-w-3xl">
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Optimized <b className="text-zinc-100 underline decoration-zinc-800">Kubernetes networking</b> (ingress/egress), reducing cloud costs by ~16%.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Analyzed resource utilization to <b className="text-zinc-100 underline decoration-zinc-800">resolve cluster bottlenecks</b>, improving performance by ~10%.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Led <b className="text-zinc-100 underline decoration-zinc-800">DNS migration</b> from AWS Route53 to Cloudflare, optimizing cost and latency.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Developed <b className="text-zinc-100 underline decoration-zinc-800">Terraform-based IaC</b> for AWS services including ECS, ALB, and CodePipeline.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Re-architected Helm charts and implemented <b className="text-zinc-100 underline decoration-zinc-800">GitOps workflows</b> with ArgoCD.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Defined incident response guidelines and implemented an <b className="text-zinc-100 underline decoration-zinc-800">observability stack</b> with Prometheus and Grafana.</span>
                </li>
              </ul>
            </div>

            {/* Cargo */}
            <div className="group relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-zinc-900 group-hover:bg-zinc-500 transition-colors hidden md:block" />
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-tight">Cargo Community Network (Remote)</h3>
                <span className="text-[10px] font-semibold text-zinc-500 mt-2 uppercase tracking-widest bg-zinc-900/30 px-2 py-1 rounded">May 2023 - Aug 2023</span>
              </div>
              <p className="text-xs font-semibold text-zinc-500 mb-8 italic tracking-wide uppercase border-b border-zinc-900 inline-block pb-1">Software Engineer – DevOps Analyst</p>
              <ul className="space-y-4 max-w-3xl">
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Optimized usage of <b className="text-zinc-100 underline decoration-zinc-800">Azure DevOps Server REST API</b> to improve workflow efficiency.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Enhanced <b className="text-zinc-100 underline decoration-zinc-800">Nagios XI monitoring</b> and automated Azure WAF rules using Terraform.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Authored <b className="text-zinc-100 underline decoration-zinc-800">DevOps governance documentation</b> to standardize enterprise processes.</span>
                </li>
              </ul>
            </div>

            {/* Livecom */}
            <div className="group relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-zinc-900 group-hover:bg-zinc-500 transition-colors hidden md:block" />
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-tight">Livecom B.V (Hybrid)</h3>
                <span className="text-[10px] font-semibold text-zinc-500 mt-2 uppercase tracking-widest bg-zinc-900/30 px-2 py-1 rounded">Jul 2022 - Mar 2023</span>
              </div>
              <p className="text-xs font-semibold text-zinc-500 mb-8 italic tracking-wide uppercase border-b border-zinc-900 inline-block pb-1">DevOps Engineer</p>
              <ul className="space-y-4 max-w-3xl">
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Improved monitoring with Prometheus/Grafana, enabling <b className="text-zinc-100 underline decoration-zinc-800">actionable performance insights</b>.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Automated log management and <b className="text-zinc-100 underline decoration-zinc-800">Docker orchestration</b> using Bash scripts.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Managed <b className="text-zinc-100 underline decoration-zinc-800">Elasticsearch clusters</b> and integrated Keycloak authentication.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Resolved CI/CD issues across React.js, .NET, and Java applications.</span>
                </li>
              </ul>
            </div>

            {/* D-Shore */}
            <div className="group relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-zinc-900 group-hover:bg-zinc-500 transition-colors hidden md:block" />
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-tight">D-Shore B.V (Hybrid)</h3>
                <span className="text-[10px] font-semibold text-zinc-500 mt-2 uppercase tracking-widest bg-zinc-900/30 px-2 py-1 rounded">Jun 2021 - Sep 2022</span>
              </div>
              <p className="text-xs font-semibold text-zinc-500 mb-8 italic tracking-wide uppercase border-b border-zinc-900 inline-block pb-1">Jr. DevOps Engineer</p>
              <ul className="space-y-4 max-w-3xl">
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Built end-to-end <b className="text-zinc-100 underline decoration-zinc-800">CI/CD pipelines</b> using Azure DevOps.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Developed Azure IaC using <b className="text-zinc-100 underline decoration-zinc-800">Bicep and ARM Templates</b>.</span>
                </li>
                <li className="flex gap-4 items-start text-base leading-relaxed">
                  <span className="text-zinc-600 mt-1">»</span>
                  <span>Integrated code quality and security tools to improve <b className="text-zinc-100 underline decoration-zinc-800">deployment reliability</b>.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contributions" className="py-24 border-b border-zinc-900">
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-16">/ contributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-zinc-400 text-xs font-bold mb-8 uppercase tracking-widest">Open Source</h3>
              <ul className="space-y-12">
                <li className="group">
                  <p className="text-zinc-100 font-bold mb-4 uppercase tracking-tight text-base">Helm Chart Contributor – Documenso</p>
                  <a href="https://artifacthub.io/packages/helm/documenso/documenso" className="text-[10px] text-zinc-500 hover:text-zinc-100 flex items-center gap-2 transition-colors uppercase font-bold tracking-widest border-b border-zinc-900 inline-flex pb-1 group-hover:border-zinc-500">
                    <span>Artifact Hub</span>
                    <span className="text-xs">→</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-zinc-400 text-xs font-bold mb-8 uppercase tracking-widest">Community</h3>
              <ul className="space-y-12">
                <li className="group">
                  <p className="text-zinc-100 font-bold mb-4 uppercase tracking-tight text-base">Speaker at iCCom-MeetHub Bandung</p>
                  <a href="https://bit.ly/iccom-bdg" className="text-[10px] text-zinc-500 hover:text-zinc-100 flex items-center gap-2 transition-colors uppercase font-bold tracking-widest border-b border-zinc-900 inline-flex pb-1 group-hover:border-zinc-500">
                    <span>View Event Details</span>
                    <span className="text-xs">→</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="blogs" className="py-24 border-b border-zinc-900">
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-16">/ blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <a href="https://medium.com/@wedusawan" target="_blank" rel="noopener noreferrer" className="group p-8 border border-zinc-900 hover:border-zinc-500 transition-all duration-300">
              <h3 className="text-zinc-100 text-base font-bold mb-4 uppercase tracking-tight group-hover:translate-x-1 transition-transform inline-block">Medium</h3>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">My main blog, where I write about DevOps, SRE, and other technical topics.</p>
              <div className="text-[10px] text-zinc-600 group-hover:text-zinc-100 uppercase font-bold tracking-widest flex items-center gap-2 border-b border-zinc-900 inline-flex pb-1 group-hover:border-zinc-500">
                <span>Read Articles</span>
                <span>→</span>
              </div>
            </a>
            <a href="https://wedusawan.hashnode.dev" target="_blank" rel="noopener noreferrer" className="group p-8 border border-zinc-900 hover:border-zinc-500 transition-all duration-300">
              <h3 className="text-zinc-100 text-base font-bold mb-4 uppercase tracking-tight group-hover:translate-x-1 transition-transform inline-block">Hashnode</h3>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">I also publish the writings here, but not as often as on Medium.</p>
              <div className="text-[10px] text-zinc-600 group-hover:text-zinc-100 uppercase font-bold tracking-widest flex items-center gap-2 border-b border-zinc-900 inline-flex pb-1 group-hover:border-zinc-500">
                <span>Read Articles</span>
                <span>→</span>
              </div>
            </a>
          </div>
        </section>

        <section id="training-certifications" className="py-24">
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">/ certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              "AWS Academy Cloud Developing",
              "AWS Cloud Quest - Cloud Practitioner",
              "LFS169: Introduction to GitOps"
            ].map((cert) => (
              <div key={cert} className="flex gap-6 items-center border-l-2 border-zinc-900 pl-6 group hover:border-zinc-500 transition-colors">
                <p className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-100 transition-colors tracking-wide uppercase leading-tight">{cert}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

