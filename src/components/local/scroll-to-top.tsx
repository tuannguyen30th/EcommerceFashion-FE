'use client'

import { useState, useEffect } from 'react'
import { ArrowUp10Icon, ArrowUpDownIcon, ArrowUpIcon, ChevronUp, MoveUpIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Button
      variant="secondary"
      size="lg"
      className={cn(
        "fixed right-5 bottom-5 z-50 rounded-full shadow-lg transition-all duration-300",
        "bg-black text-white hover:bg-slate-100 hover:text-black rounded-full",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
        "animate-bounce",
        "w-16 h-16"
      )}
      onClick={scrollToTop}
    >
      <MoveUpIcon className="h-10 w-10" />
      <span className="sr-only">Scroll to top</span>
    </Button>
  )
}

