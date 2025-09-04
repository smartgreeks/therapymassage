"use client"

type Props = {
  label: string
  options: string[]
  value: number
  onChange: (i: number) => void
}

export default function SelectField({ label, options, value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        className="w-full rounded-lg border border-sand bg-white px-3 py-2 text-sm shadow-sm hover:bg-sand/20 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-olive-400"
        aria-label={label}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {options.map((opt, i) => (
          <option key={i} value={i}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

