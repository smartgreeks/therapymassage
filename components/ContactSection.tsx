"use client"

export default function ContactSection() {
  const PHONE = "2104644289"
  const PHONE_HUMAN = "210 464 4289"
  const ADDRESS = "Λεωφ. Φανερωμένης 83, Σαλαμίνα 18900"

  type Day = { label: string; start?: [number, number]; end?: [number, number] }
  const WEEK: Day[] = [
    { label: "Κυριακή" },
    { label: "Δευτέρα", start: [10, 0], end: [21, 0] },
    { label: "Τρίτη", start: [10, 0], end: [21, 0] },
    { label: "Τετάρτη", start: [10, 0], end: [21, 0] },
    { label: "Πέμπτη", start: [10, 0], end: [21, 0] },
    { label: "Παρασκευή", start: [9, 0], end: [21, 0] },
    { label: "Σάββατο", start: [10, 0], end: [21, 0] },
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

  const todayIdx = new Date().getDay()
  const today = WEEK[todayIdx]
  const todayRange = formatRange(today)
  const isOpen = openNow()

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(PHONE)
      alert('Το τηλέφωνο αντιγράφηκε στο πρόχειρο')
    } catch (_e) { /* noop */ }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="container-safe py-16">
      <h2 id="contact-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Επικοινωνία</h2>
      <div className="mt-6 grid lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <div className="space-y-3 text-olive-800/90">
            <p><strong>Διεύθυνση:</strong> {ADDRESS}</p>
            <p>
              <strong>Τηλέφωνο:</strong>{' '}
              <a href={`tel:${PHONE}`} className="text-olive-700 hover:underline">{PHONE_HUMAN}</a>
            </p>
            <details className="rounded-md border border-sand bg-white/70 p-3">
              <summary className="cursor-pointer select-none text-olive-900/90">
                <strong>Ωράριο:</strong> {todayRange}{' '}
                <span className={isOpen ? 'text-emerald-700' : 'text-rose-700'}>
                  ({isOpen ? 'Ανοιχτά τώρα' : 'Κλειστά'})
                </span>
              </summary>
              <ul className="mt-3 space-y-1">
                {WEEK.map((d, i) => (
                  <li key={d.label} className={i === todayIdx ? 'font-medium text-olive-900' : 'text-olive-800/90'}>
                    {d.label}: {formatRange(d)}
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
          <h3 className="font-semibold text-lg">Κλείστε ραντεβού</h3>
          <p className="mt-2 text-olive-800/80">Είμαστε εδώ για να βοηθήσουμε με εξατομικευμένες προτάσεις. Καλέστε μας ή στείλτε μήνυμα για διαθεσιμότητα.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="btn btn-primary">Κλήση στο {PHONE_HUMAN}</a>
            <button type="button" onClick={copyPhone} className="btn btn-outline">Αντιγραφή τηλεφώνου</button>
            <a
              className="btn btn-outline"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Therapy Massage ' + ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Άνοιγμα σε Google Maps
            </a>
          </div>
          <p className="mt-4 text-sm text-olive-700/80"><strong>Αν δεν απαντήσουμε εκείνη τη στιγμή, θα σας καλέσουμε πίσω το συντομότερο δυνατόν.</strong> Ευχαριστούμε για την κατανόηση!</p>
        </div>
      </div>
    </section>
  )
}