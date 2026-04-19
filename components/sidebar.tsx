import { User, Code, Briefcase, Globe, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  sections: { id: string; title: string; icon: string }[]
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export function Sidebar({ isOpen, onClose, sections, activeSection, onSectionClick }: SidebarProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "User":
        return <User size={20} />
      case "Code":
        return <Code size={20} />
      case "Briefcase":
        return <Briefcase size={20} />
      case "Globe":
        return <Globe size={20} />
      case "Award":
        return <Award size={20} />
      case "BookOpen":
        return <BookOpen size={20} />
      default:
        return null
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-full md:w-80 bg-black/95 backdrop-blur-2xl border-l border-zinc-900 transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) font-mono ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="h-full flex flex-col py-8">
          <div className="px-6 mb-8 uppercase tracking-widest text-xs text-zinc-500 font-bold">
            Navigation
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul className="space-y-1 px-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start px-4 py-2 text-sm transition-all duration-200 ${activeSection === section.id
                      ? "text-zinc-100 bg-zinc-800/50"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
                      }`}
                    onClick={() => onSectionClick(section.id)}
                  >
                    <span className="inline-flex items-center">
                      <span className="opacity-50 mr-3">{getIcon(section.icon)}</span>
                      <span>{section.title}</span>
                    </span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

