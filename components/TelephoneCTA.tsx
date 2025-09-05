"use client"

export default function TelephoneCTA() {
  const PHONE = "2104644289"
  const PHONE_HUMAN = "210 464 4289"
  const ADDRESS = "Λεωφ. Φανερωμένης 83, Σαλαμίνα 18900"

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(PHONE)
      alert('Το τηλέφωνο αντιγράφηκε στο πρόχειρο')
    } catch (_e) { /* noop */ }
  }

  return (
    <div className="card p-6">
      <h3 className="font-semibold text-lg">Κλείστε ραντεβού</h3>
      <p className="mt-2 text-olive-800/80">Θέλετε βοήθεια για να επιλέξετε το ιδανικό μασάζ; Καλέστε μας ή ελάτε να σας εξυπηρετήσουμε.</p>
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
  )
}