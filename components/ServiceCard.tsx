"use client"
import Image from "next/image"
import { useBookingModal } from "./BookingModalProvider"

type Props = {
  title: string
  desc: string
  duration: string
  price: string
  image: string
}

export default function ServiceCard({ title, desc, duration, price, image }: Props) {
  const { openBooking } = useBookingModal()
  return (
    <div className="card overflow-hidden group">
      <div className="relative h-48 sm:h-56">
        <Image src={image} alt={`${title} treatment image`} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-900/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-olive-700 font-medium">{price}</span>
        </div>
        <p className="mt-2 text-olive-800/80">{desc}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-olive-700">
          <span>{duration}</span>
          <button onClick={openBooking} className="btn btn-primary px-4 py-2 text-sm" aria-haspopup="dialog">Κράτηση</button>
        </div>
      </div>
    </div>
  )
}
