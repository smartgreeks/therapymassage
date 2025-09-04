"use client"
import React from "react"
import SelectField from "@/components/ui/SelectField"

type Option = { duration: string; price: string }
type SubItem = { title: string; desc?: string; image?: string; options?: Option[]; duration?: string; price?: string }

function parsePrice(p?: string): number | null {
  if (!p) return null
  const m = p.replace(/,/g, '.').match(/([0-9]+(?:\.[0-9]+)?)/)
  return m ? Number(m[1]) : null
}

export default function CategoryCalculator({ bases, addons }: { bases: SubItem[]; addons: SubItem[] }) {
  const [serviceIndex, setServiceIndex] = React.useState(0)
  const [optionIndex, setOptionIndex] = React.useState(0)
  const [selectedAddons, setSelectedAddons] = React.useState<Record<number, boolean>>({})

  const svc = bases[serviceIndex]
  const opts = svc?.options ?? (svc?.price ? [{ duration: svc.duration ?? '', price: svc.price }] : [])
  const basePrice = parsePrice(opts[optionIndex]?.price) ?? 0
  const addonsTotal = addons.reduce((sum, a, i) => sum + (selectedAddons[i] ? (parsePrice(a.price) ?? 0) : 0), 0)
  const total = basePrice + addonsTotal

  return (
    <div className="mt-4 space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <SelectField
          label="Υπηρεσία"
          options={bases.map((b) => b.title)}
          value={serviceIndex}
          onChange={(i) => { setServiceIndex(i); setOptionIndex(0) }}
        />
        <SelectField
          label="Διάρκεια"
          options={opts.map((o) => `${o.duration} – ${o.price}`)}
          value={optionIndex}
          onChange={(i) => setOptionIndex(i)}
        />
      </div>

      {addons.length > 0 && (
        <div>
          <div className="text-sm font-medium mb-2">Add‑ons</div>
          <div className="flex flex-wrap gap-2">
            {addons.map((a, i) => (
              <label key={a.title} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm cursor-pointer ${selectedAddons[i] ? 'bg-olive-100 border-olive-300' : 'bg-white border-sand'}`}>
                <input type="checkbox" className="sr-only" checked={!!selectedAddons[i]} onChange={() => setSelectedAddons(prev => ({ ...prev, [i]: !prev[i] }))} />
                <span>{a.title.replace(/\s*\(add‑on\)/i, '')}</span>
                <span className="font-semibold text-olive-800">{a.price}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between rounded-lg bg-white border border-sand px-4 py-3">
        <div className="text-sm text-olive-800/80">Σύνολο</div>
        <div className="text-xl font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>{total.toFixed(2)} €</div>
      </div>
    </div>
  )
}
