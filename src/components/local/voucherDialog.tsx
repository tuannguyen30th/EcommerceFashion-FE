import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Tag, Percent, Truck } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from '@/components/ui/badge';

interface Voucher {
  code: string;
  description: string;
  discount: string;
  icon: "tag" | "percent" | "truck";
}

const vouchers: Voucher[] = [
  {
    code: "SUMMER10",
    description: "10% off summer collection",
    discount: "10% OFF",
    icon: "percent",
  },
  {
    code: "FREESHIP",
    description: "Free shipping on orders over $50",
    discount: "FREE SHIPPING",
    icon: "truck",
  },
  {
    code: "NEWCUST20",
    description: "20% off for new customers",
    discount: "20% OFF",
    icon: "tag",
  },
];

interface VoucherDialogProps {
  promoCode: string;
  setPromoCode: (code: string) => void;
}

export function VoucherDialog({ promoCode, setPromoCode }: VoucherDialogProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleVoucherSelect = (code: string) => {
    setPromoCode(code);
    setOpen(false);
  };

  const filteredVouchers = vouchers.filter(
    (voucher) =>
      voucher.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      voucher.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIcon = (icon: "tag" | "percent" | "truck") => {
    switch (icon) {
      case "tag":
        return <Tag className="h-6 w-6" />;
      case "percent":
        return <Percent className="h-6 w-6" />;
      case "truck":
        return <Truck className="h-6 w-6" />;
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Apply Voucher</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 flex">
            Available Vouchers <Tag className="h-6 w-6 mt-2 ml-3" />
          </DialogTitle>
        </DialogHeader>
      
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
          <ScrollArea className="h-[300px]">
            {filteredVouchers.map((voucher) => (
              <div
                key={voucher.code}
                className="flex my-2 items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-primary transition-colors cursor-pointer"
                onClick={() => handleVoucherSelect(voucher.code)}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {getIcon(voucher.icon)}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg">{voucher.code}</h3>
                  <p className="text-sm text-gray-500">{voucher.description}</p>
                </div>
                <div className="flex-shrink-0  text-primary text-sm font-semibold py-1 px-2 rounded">
                 <Badge className="bg-green-600">{voucher.discount}</Badge> 
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
