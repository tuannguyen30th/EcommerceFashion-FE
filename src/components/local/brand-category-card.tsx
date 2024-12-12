import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { BrandCategoryCardProps } from "@/types/product"


export function BrandCategoryCard({ name, image, href }: BrandCategoryCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to="/cate">Explore</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

