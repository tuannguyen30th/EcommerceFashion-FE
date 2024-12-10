'use client'

import { useState } from 'react'
import { Plus, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCompare } from "@/context/compare-context"

export function CompareDrawer() {
  const [isExpanded, setIsExpanded] = useState(true)
  const { compareItems, removeFromCompare, clearCompare } = useCompare()

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg transition-transform duration-300 ${isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-2.5rem)]'}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <span className="text-sm font-medium">So sánh ({compareItems.length})</span>
          <Button variant="ghost" size="sm">
            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </Button>
        </div>

        {/* Compare Panel */}
        <div className="grid grid-cols-[1fr,auto,1fr,auto] gap-4 items-center pb-4">
          {/* First Item */}
          <div className="border rounded-lg p-4 h-48 flex items-center justify-center">
            {compareItems[0] ? (
              <div className="relative w-full h-full">
                <img
                  src={compareItems[0].image}
                  alt={compareItems[0].name}
                  className="object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0"
                  onClick={() => removeFromCompare(compareItems[0].id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-2">
                  <p className="text-sm font-medium truncate">{compareItems[0].name}</p>
                  <p className="text-sm text-primary">${compareItems[0].price}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 text-gray-400">
                <Plus className="h-8 w-8" />
                <span className="text-sm">Chưa có chim</span>
              </div>
            )}
          </div>

          {/* VS Text */}
          <div className="text-2xl font-bold text-orange-500">VS</div>

          {/* Second Item */}
          <div className="border rounded-lg p-4 h-48 flex items-center justify-center">
            {compareItems[1] ? (
              <div className="relative w-full h-full">
                <img
                  src={compareItems[1].image}
                  alt={compareItems[1].name}
                  className="object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0"
                  onClick={() => removeFromCompare(compareItems[1].id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-2">
                  <p className="text-sm font-medium truncate">{compareItems[1].name}</p>
                  <p className="text-sm text-primary">${compareItems[1].price}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 text-gray-400">
                <Plus className="h-8 w-8" />
                <span className="text-sm">Chưa có chim</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <Button 
              className="whitespace-nowrap"
              disabled={compareItems.length !== 2}
            >
              So sánh ngay
            </Button>
            <Button 
              variant="outline" 
              className="whitespace-nowrap"
              onClick={clearCompare}
              disabled={compareItems.length === 0}
            >
              Xóa tất cả chim
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

