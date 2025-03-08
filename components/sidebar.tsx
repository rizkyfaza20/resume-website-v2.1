import { User, Code, Briefcase, Globe, Award } from "lucide-react"
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
      default:
        return null
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-30 w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="h-full flex flex-col py-6">
          <div className="flex-1 overflow-y-auto">
            <ul className="space-y-2 px-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start px-4 py-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    onClick={() => onSectionClick(section.id)}
                  >
                    <span className="inline-flex items-center">
                      {getIcon(section.icon)}
                      <span className="ml-3">{section.title}</span>
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

