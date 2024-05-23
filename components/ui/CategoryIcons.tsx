import Image from "next/image"
import { Category } from "@prisma/client"
import Link from "next/link"

type CategoryIconsProps = {
  category: Category
}

export default function CategoryIcons({category}: CategoryIconsProps) {
  return (
    <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
      <div className="w-16 h-16 relative">
        <Image fill src={`/icon_${category.slug}.svg`} alt="icono de categoria" />
      </div>
      <Link href={`/order/${category.slug}`} className="text-xl font-bold">
        {category.name}
      </Link>
    </div>
  )
}
