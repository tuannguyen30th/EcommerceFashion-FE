import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Info } from 'lucide-react'
import { Link } from "react-router-dom"

interface VoucherCardProps {
  id: string
  code: string
  discount: number
  minSpend: number
  validityDays: number
  usageLimit?: number
  onUse?: () => void
}

export function VoucherCard({
  id,
  code,
  discount,
  minSpend,
  validityDays,
  usageLimit,
  onUse
}: VoucherCardProps) {
  return (
    <Card className="flex overflow-hidden border-dashed">
      {/* Left Section - Free Ship */}
      <div className="relative w-40 bg-emerald-500 p-4 text-white flex flex-col justify-center items-center text-center">
        <h3 className="text-2xl font-bold mb-2">VOUCHER</h3>
        {/* Decorative circles */}
        <div className="absolute -right-3 top-1/3 h-6 w-6 rounded-full bg-white"></div>
        <div className="absolute -right-3 bottom-1/3 h-6 w-6 rounded-full bg-white"></div>
        <div className="absolute -right-3 bottom-2/3 h-6 w-6 rounded-full bg-white"></div>
        <div className="absolute -right-3 top-2/3 h-6 w-6 rounded-full bg-white"></div>
      </div>

      {/* Middle Section - Voucher Details */}
      <div className="flex-1 p-4 relative">
        {usageLimit && (
          <span className="absolute top-2 right-2 text-xs text-rose-500 bg-rose-50 px-2 py-1 rounded-full">
            x{usageLimit}
          </span>
        )}
        <div className="space-y-1">
          <h4 className="font-medium">Giảm tới đa {discount}</h4>
          <p className="text-sm text-muted-foreground">Đơn Tối Thiểu {minSpend}</p>
          <div className="inline-block bg-rose-50 text-rose-600 px-2 py-1 text-sm rounded mt-1">
            {code}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
            <Clock className="h-3 w-3" />
            <span>Có hiệu lực sau: {validityDays} ngày</span>
            <Link 
              to="#" 
              className="text-primary hover:underline inline-flex items-center"
            >
              <Info className="h-3 w-3 mr-1" />
              Điều Kiện
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Action Button */}
      <div className="flex items-center p-4">
        <Button 
          variant="outline" 
          className="text-emerald-600 border-emerald-600 hover:bg-emerald-50"
          onClick={onUse}
        >
          Dùng Sau
        </Button>
      </div>
    </Card>
  )
}

