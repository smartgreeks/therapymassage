"use client"
import { useT } from "@/lib/TProvider"
import { useState, useEffect } from "react"

export default function ContactSection() {
  const t = useT()
  const [mounted, setMounted] = useState(false)
  const [state, setState] = useState({
    todayIdx: 0,
    isOpen: false,
    todayRange: "",
    dayRanges: [] as string[]
  })

  const PHONE = "2104644289"
  const PHONE_HUMAN = "210 464 4289"
  const ADDRESS = "Λεωφ. Φανερωμένης 83, Σαλαμίνα 18900"

  type Day = { label: string; start?: [number, number]; end?: [number, number] }
  const WEEK: Day[] = [
    { label: t("contact.days.sunday") },
    { label: t("contact.days.monday"), start: [10, 0], end: [21, 0] },
    { label: t("contact.days.tuesday"), start: [10, 0], end: [21, 0] },
    { label: t("contact.days.wednesday"), start: [10, 0], end: [21, 0] },
    { label: t("contact.days.thursday"), start: [10, 0], end: [21, 0] },
    { label: t("contact.days.friday"), start: [9, 0], end: [21, 0] },
    { label: t("contact.days.saturday"), start: [10, 0], end: [21, 0] },
  ]

  function formatTimeGreek(h: number, m: number) {
    const isPM = h >= 12
    const hour12 = (h % 12) === 0 ? 12 : (h % 12)
    const mm = String(m).padStart(2, '0')
    return `${hour12}:${mm} ${isPM ? 'μ.μ.' : 'π.μ.'}`
  }

  function formatRange(d?: Day) {
    if (!d?.start || !d?.end) return 'Κλειστά'
    return `${formatTimeGreek(d.start[0], d.start[1])} – ${formatTimeGreek(d.end[0], d.end[1])}`
  }

  function openNow() {
    const now = new Date()
    const dayIdx = now.getDay()
    const d = WEEK[dayIdx]
    if (!d?.start || !d?.end) return false
    const mins = now.getHours() * 60 + now.getMinutes()
    const start = d.start[0] * 60 + d.start[1]
    const end = d.end[0] * 60 + d.end[1]
    return mins >= start && mins < end
  }

  useEffect(() => {
    setMounted(true)
    const dayIdx = new Date().getDay()
    const today = WEEK[dayIdx]
    const range = formatRange(today)
    const open = openNow()
    const ranges = WEEK.map(d => formatRange(d))
    
    setState({
      todayIdx: dayIdx,
      isOpen: open,
      todayRange: range,
      dayRanges: ranges
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!mounted) {
    return (
      <section id="contact" aria-labelledby="contact-title" className="container-safe py-16">
        <h2 id="contact-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>{t("contact.title")}</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <div className="card p-6">
            <div className="space-y-3 text-olive-800/90">
              <p><strong>{t("contact.address")}</strong> {ADDRESS}</p>
              <p>
                <strong>{t("contact.phone")}</strong>{' '}
                <a href={`tel:${PHONE}`} className="text-olive-700 hover:underline">{PHONE_HUMAN}</a>
              </p>
              <details className="rounded-md border border-sand bg-white/70 p-3">
                <summary className="cursor-pointer select-none text-olive-900/90">
                  <strong>{t("contact.hours")}</strong> Loading...
                </summary>
              </details>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-lg">{t("contact.bookAppointment")}</h3>
            <p className="mt-2 text-olive-800/80">{t("contact.bookDescription")}</p>
          </div>
        </div>
      </section>
    )
  }

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(PHONE)
      alert('Το τηλέφωνο αντιγράφηκε στο πρόχειρο')
    } catch (_e) { /* noop */ }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="container-safe py-16">
      <h2 id="contact-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>{t("contact.title")}</h2>
      <div className="mt-6 grid lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <div className="space-y-3 text-olive-800/90">
            <p><strong>{t("contact.address")}</strong> {ADDRESS}</p>
            <p>
              <strong>{t("contact.phone")}</strong>{' '}
              <a href={`tel:${PHONE}`} className="text-olive-700 hover:underline">{PHONE_HUMAN}</a>
            </p>
            <details className="rounded-md border border-sand bg-white/70 p-3">
              <summary className="cursor-pointer select-none text-olive-900/90">
                <strong>{t("contact.hours")}</strong> {state.todayRange}{' '}
                <span className={state.isOpen ? 'text-emerald-700' : 'text-rose-700'}>
                  ({state.isOpen ? t("contact.openNow") : t("contact.closedNow")})
                </span>
              </summary>
              <ul className="mt-3 space-y-1">
                {WEEK.map((d, i) => (
                  <li key={d.label} className={i === state.todayIdx ? 'font-medium text-olive-900' : 'text-olive-800/90'}>
                    {d.label}: {state.dayRanges[i]}
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <div className="mt-6">
            <iframe
              title="Χάρτης Google"
              aria-label="Χάρτης Google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.4676680810517!2d23.489538899999996!3d37.9662139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1b114e362acd5%3A0x327fe95f6c483316!2sTherapy%20Massage!5e0!3m2!1sel!2sgr!4v1756986124279!5m2!1sel!2sgr"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border border-sand w-full"
              allowFullScreen
            />
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-lg">{t("contact.bookAppointment")}</h3>
          <p className="mt-2 text-olive-800/80">{t("contact.bookDescription")}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="btn btn-primary">{t("contact.call")} {PHONE_HUMAN}</a>
            <button type="button" onClick={copyPhone} className="btn btn-outline">{t("contact.copyPhone")}</button>
            <a
              className="btn btn-outline"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Therapy Massage ' + ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contact.openMaps")}
            </a>
          </div>
          <p className="mt-4 text-sm text-olive-700/80"><strong>{t("contact.callbackNote")}</strong></p>
        </div>
      </div>
    </section>
  )
}