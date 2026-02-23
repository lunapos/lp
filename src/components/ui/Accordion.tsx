import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.ts'

interface AccordionProps {
  question: string
  answer: string
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()

  return (
    <div className="border border-[#2e2e50] rounded-xl overflow-hidden transition-colors duration-300">
      <button
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer transition-colors duration-300 hover:bg-white/5"
        style={isOpen ? { color: theme.accent } : { color: '#ffffff' }}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg pr-4">{question}</span>
        <ChevronDown
          className="shrink-0 transition-transform duration-300"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: isOpen ? theme.accent : '#9090bb',
          }}
          size={20}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
        }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[#9090bb] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}
