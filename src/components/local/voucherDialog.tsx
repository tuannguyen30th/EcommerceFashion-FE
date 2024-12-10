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
import { Badge } from "@/components/ui/badge";

interface Voucher {
  id: string;
  code: string;
  description: string;
  discount: number;
  icon: "tag" | "percent" | "truck";
}

const vouchers: Voucher[] = [
  {id: "1", code: "SUMMER10", description: "10% off summer collection", discount: 10, icon: "percent" },
  {id: "2", code: "FREESHIP", description: "Free shipping on orders over $50", discount: 15, icon: "truck" },
  {id: "3", code: "NEWCUST20", description: "20% off for new customers", discount: 20, icon: "tag" },
];

interface VoucherDialogProps {
  promoCode: string;
  setPromoCode: (code: string) => void;
  setDiscount: (discount: number) => void;
}

export function VoucherDialog({ promoCode, setPromoCode, setDiscount }: VoucherDialogProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleVoucherSelect = (code: string, discount: number) => {
    setPromoCode(code);
    setDiscount(discount);
    setOpen(false);
  };

  const filteredVouchers = vouchers.filter((voucher) =>
    `${voucher.code} ${voucher.description}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIcon = (icon: Voucher["icon"]) => {
    const iconMap = {
      tag: <Tag className="h-6 w-6" />,
      percent: <Percent className="h-6 w-6" />,
      truck: <Truck className="h-6 w-6" />,
    };
    return iconMap[icon];
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
        <ScrollArea className="max-h-[300px]">
          {filteredVouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:border-primary transition my-3"
              onClick={() => handleVoucherSelect(voucher.code, voucher.discount)}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                {getIcon(voucher.icon)}
              </div>
              <div className="flex-grow">
                <h3 className="font-bold">{voucher.code}</h3>
                <p className="text-sm text-gray-500">{voucher.description}</p>
              </div>
              <Badge className="bg-green-600 px-2 py-1">{voucher.discount}%</Badge>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
