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
import { Search, Tag } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { VoucherCard } from "@/components/local/voucher-card";

interface Voucher {
  id: string
  code: string;
  discount: number;
  minSpend: number;
  validityDays: number;
  usageLimit?: number;
}

const vouchers: Voucher[] = [
  {
    id: "1",
    code: "Freeship 15.12",
    discount: 15,
    minSpend: 0,
    validityDays: 2,
    usageLimit: 5,
  },
  {
    id: "2",
    code: "SUMMER50",
    discount: 20,
    minSpend: 200,
    validityDays: 7,
  },
  {
    id: "3",
    code: "NEWUSER",
    discount: 30,
    minSpend: 10000,
    validityDays: 30,
    usageLimit: 1,
  },
];

interface VoucherDialogProps {
  id: string;
  setPromoCode: (code: string) => void;
  setDiscount: (discount: number) => void;
}

export function VoucherDialog({
  id,
  setPromoCode,
  setDiscount
}: VoucherDialogProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleVoucherSelect = (code: string, discount: number) => {
    setPromoCode(code);
    setDiscount(discount)
    setOpen(false);
  };

  const filteredVouchers = vouchers.filter((voucher) =>
    `${voucher.code} ${voucher.discount} ${voucher.minSpend}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Apply Voucher</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 flex items-center">
            Available Vouchers <Tag className="h-6 w-6 ml-3" />
          </DialogTitle>
        </DialogHeader>
       
        <ScrollArea className="max-h-[400px] pr-4">
          <div className="space-y-4">
            {filteredVouchers.map((voucher) => (
              <VoucherCard
                key={voucher.code}
                {...voucher}
                onUse={() => handleVoucherSelect(voucher.code, voucher.discount)}
              />
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

