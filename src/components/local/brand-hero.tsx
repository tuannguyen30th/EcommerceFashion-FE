import { BrandHeroProps } from "@/types/product";



export function BrandHero({ name, description, logo, coverImage }: BrandHeroProps) {
  return (
    <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
      <img
        src={coverImage}
        alt={`${name} cover`}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
        <img
          src={logo}
          alt={`${name} logo`}
          width={120}
          height={120}
          className="mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{name}</h1>
        <p className="text-xl text-center max-w-2xl">{description}</p>
      </div>
    </div>
  )
}

