"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import profilePic from "./assets/profile.jpg";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import { sectionTitles, content, type Lang } from "@/lib/translations";

export default function FullscreenDevOpsResume() {
  const [activeSection, setActiveSection] = useState("about");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");

  const sections = useMemo(
    () => sectionTitles[lang],
    [lang],
  );

  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          return (
            currentPosition >= top - windowHeight / 2 &&
            currentPosition < bottom - windowHeight / 2
          );
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-black text-zinc-300 font-mono min-h-screen selection:bg-zinc-800 selection:text-zinc-100 bg-grid">
      <nav className="pill-nav px-4 justify-center">
        <div
          className="flex items-center space-x-2 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-zinc-500 font-bold">$</span>
          <div className="flex items-center">
            <h1 className="text-sm font-bold tracking-tight text-zinc-100 uppercase">
              devopswithfaza.web.id
            </h1>
            <span className="ml-1 w-2 h-4 bg-zinc-100 animate-terminal-cursor"></span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-4 bg-zinc-800 mx-2" />

        {/* Language Toggle */}
        <div className="flex items-center gap-1">
          {(["en", "id"] as Lang[]).map((code) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded transition-all duration-300 ${
                lang === code
                  ? "text-black bg-zinc-100"
                  : "text-zinc-500 hover:text-zinc-100 bg-zinc-900/30"
              }`}
            >
              {code === "en" ? "EN" : "ID"}
            </button>
          ))}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-[9px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                activeSection === section.id
                  ? "text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-100"
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
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
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
              <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {t.about.heading}
              </h2>
              <h2 className="text-4xl font-bold text-zinc-100 mb-6 tracking-tight uppercase">
                {t.about.name}
              </h2>
              <div className="text-lg leading-relaxed mb-8 max-w-2xl text-zinc-300 font-medium space-y-4">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p className="text-sm text-zinc-500 italic">{t.about.p3}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skillset" className="py-24 border-b border-zinc-900">
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">
            {t.skillset.heading}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
            {t.skillset.skills.map((skill) => (
              <div
                key={skill}
                className="group cursor-default border-l border-zinc-900 hover:border-zinc-500 pl-4 transition-all duration-300"
              >
                <p className="text-xs font-semibold text-zinc-500 group-hover:text-zinc-100 transition-colors uppercase tracking-[0.1em] leading-tight">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="experiences" className="py-24 border-b border-zinc-900">
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-16">
            {t.experiences.heading}
          </h2>
          <div className="space-y-24">
            {t.experiences.jobs.map((job) => (
              <div key={job.title} className="group relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-zinc-900 group-hover:bg-zinc-500 transition-colors hidden md:block" />
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-tight">
                      {job.title}
                    </h3>
                    <span className="text-xs font-semibold text-zinc-400 mt-2 uppercase tracking-widest bg-zinc-900/30 px-2 py-1 rounded w-fit">
                      {job.location}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-500 md:mt-0 mt-2 uppercase tracking-widest bg-zinc-900/30 px-2 py-1 rounded">
                    {job.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-zinc-500 mb-8 italic tracking-wide uppercase border-b border-zinc-900 inline-block pb-1">
                  {job.role}
                </p>
                <ul className="space-y-4 max-w-3xl">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-4 items-start text-base leading-relaxed">
                      <span className="text-zinc-600 mt-1">»</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contributions" className="py-24 border-b border-zinc-900">
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-16">
            {t.contributions.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-zinc-400 text-xs font-bold mb-8 uppercase tracking-widest">
                {t.contributions.openSource}
              </h3>
              <ul className="space-y-12">
                <li className="group">
                  <p className="text-zinc-100 font-bold mb-4 uppercase tracking-tight text-base">
                    {t.contributions.helmContributor}
                  </p>
                  <a
                    href="https://artifacthub.io/packages/helm/documenso/documenso"
                    className="text-[10px] text-zinc-500 hover:text-zinc-100 flex items-center gap-2 transition-colors uppercase font-bold tracking-widest border-b border-zinc-900 inline-flex pb-1 group-hover:border-zinc-500"
                  >
                    <span>{t.contributions.artifactHub}</span>
                    <span className="text-xs">→</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-zinc-400 text-xs font-bold mb-8 uppercase tracking-widest">
                {t.contributions.community}
              </h3>
              <ul className="space-y-12">
                <li className="group">
                  <p className="text-zinc-100 font-bold mb-4 uppercase tracking-tight text-base">
                    {t.contributions.speaker}
                  </p>
                  <a
                    href="https://bit.ly/iccom-bdg"
                    className="text-[10px] text-zinc-500 hover:text-zinc-100 flex items-center gap-2 transition-colors uppercase font-bold tracking-widest border-b border-zinc-900 inline-flex pb-1 group-hover:border-zinc-500"
                  >
                    <span>{t.contributions.viewEventDetails}</span>
                    <span className="text-xs">→</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="blogs" className="py-24 border-b border-zinc-900">
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-16">
            {t.blogs.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <a
              href="https://medium.com/@wedusawan"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-zinc-900 hover:border-zinc-500 transition-all duration-300"
            >
              <h3 className="text-zinc-100 text-base font-bold mb-4 uppercase tracking-tight group-hover:translate-x-1 transition-transform inline-block">
                Medium
              </h3>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                {t.blogs.mediumDesc}
              </p>
              <div className="text-[10px] text-zinc-600 group-hover:text-zinc-100 uppercase font-bold tracking-widest flex items-center gap-2 border-b border-zinc-900 inline-flex pb-1 group-hover:border-zinc-500">
                <span>{t.blogs.readArticles}</span>
                <span>→</span>
              </div>
            </a>
            <a
              href="https://wedusawan.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-zinc-900 hover:border-zinc-500 transition-all duration-300"
            >
              <h3 className="text-zinc-100 text-base font-bold mb-4 uppercase tracking-tight group-hover:translate-x-1 transition-transform inline-block">
                Hashnode
              </h3>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                {t.blogs.hashnodeDesc}
              </p>
              <div className="text-[10px] text-zinc-600 group-hover:text-zinc-100 uppercase font-bold tracking-widest flex items-center gap-2 border-b border-zinc-900 inline-flex pb-1 group-hover:border-zinc-500">
                <span>{t.blogs.readArticles}</span>
                <span>→</span>
              </div>
            </a>
          </div>
        </section>

        <section id="training-certifications" className="py-24">
          <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">
            {t.certifications.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {t.certifications.items.map((cert) => (
              <div
                key={cert}
                className="flex gap-6 items-center border-l-2 border-zinc-900 pl-6 group hover:border-zinc-500 transition-colors"
              >
                <p className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-100 transition-colors tracking-wide uppercase leading-tight">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}