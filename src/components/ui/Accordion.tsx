import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.ts'
import { useColorMode } from '../../hooks/useColorMode.ts'

interface AccordionProps {
  question: string
  answer: string
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const { colors } = useColorMode()

  return (
    <div className="border border-[var(--mode-border)] rounded-xl overflow-hidden transition-colors duration-300">
      <button
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer transition-colors duration-300 hover:bg-[var(--mode-text-primary)]/5"
        style={isOpen ? { color: theme.accent } : { color: colors.textPrimary }}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg pr-4">{question}</span>
        <ChevronDown
          className="shrink-0 transition-transform duration-300"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: isOpen ? theme.accent : colors.textSecondary,
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
          <p className="px-5 pb-5 text-[var(--mode-text-secondary)] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}
