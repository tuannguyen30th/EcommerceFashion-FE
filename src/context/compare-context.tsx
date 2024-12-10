'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import type { Product } from "@/types/product"

interface CompareContextType {
  compareItems: Product[]
  addToCompare: (product: Product) => void
  removeFromCompare: (productId: string) => void
  clearCompare: () => void
  isInCompare: (productId: string) => boolean
}

const CompareContext = createContext<CompareContextType | undefined>(undefined)

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareItems, setCompareItems] = useState<Product[]>([])

  const addToCompare = useCallback((product: Product) => {
    setCompareItems(prev => {
      if (prev.length >= 2) return prev
      if (prev.find(item => item.id === product.id)) return prev
      return [...prev, product]
    })
  }, [])

  const removeFromCompare = useCallback((productId: string) => {
    setCompareItems(prev => prev.filter(item => item.id !== productId))
  }, [])

  const clearCompare = useCallback(() => {
    setCompareItems([])
  }, [])

  const isInCompare = useCallback((productId: string) => {
    return compareItems.some(item => item.id === productId)
  }, [compareItems])

  return (
    <CompareContext.Provider 
      value={{ 
        compareItems, 
        addToCompare, 
        removeFromCompare, 
        clearCompare,
        isInCompare
      }}
    >
      {children}
    </CompareContext.Provider>
  )
}

export function useCompare() {
  const context = useContext(CompareContext)
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider')
  }
  return context
}

