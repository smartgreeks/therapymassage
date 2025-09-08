"use client"
import { useEffect, useState } from "react"
import { useT } from "@/lib/TProvider"

function getRemaining(end: Date) {
  const diff = +end - +new Date()
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)
  return { d, h, m, s }
}

export default function Offers() {
  const t = useT()
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const end = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59) // End of current month
    setTime(getRemaining(end))
    const id = setInterval(() => setTime(getRemaining(end)), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) {
    return (
      <section className="container-safe py-12">
        <div className="rounded-xl bg-olive-800 text-beige p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-soft">
          <div>
            <h3 className="text-2xl font-semibold">{t("offers.title")}</h3>
            <p className="mt-2 text-beige/90">{t("offers.description")}</p>
          </div>
          <div aria-label="Countdown timer" className="grid grid-cols-4 gap-3 text-center">
            {[
              [t("offers.days"), "--"],
              [t("offers.hours"), "--"],
              [t("offers.minutes"), "--"],
              [t("offers.seconds"), "--"]
            ].map(([label, val]) => (
              <div key={label} className="bg-olive-700 rounded-lg px-4 py-3">
                <div className="text-2xl font-semibold">{val}</div>
                <div className="text-sm text-beige/80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="container-safe py-12">
      <div className="rounded-xl bg-olive-800 text-beige p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-soft">
        <div>
          <h3 className="text-2xl font-semibold">{t("offers.title")}</h3>
          <p className="mt-2 text-beige/90">{t("offers.description")}</p>
        </div>
        <div aria-label="Countdown timer" className="grid grid-cols-4 gap-3 text-center">
          {([
            [t("offers.days"), time.d],
            [t("offers.hours"), time.h],
            [t("offers.minutes"), time.m],
            [t("offers.seconds"), time.s]
          ] as const).map(([label, val]) => (
            <div key={label} className="bg-olive-700 rounded-lg px-4 py-3">
              <div className="text-2xl font-semibold">{String(val).padStart(2, '0')}</div>
              <div className="text-sm text-beige/80">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}