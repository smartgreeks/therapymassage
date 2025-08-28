import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="container-safe py-16">
      <h2 id="contact-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>Επικοινωνία</h2>
      <div className="mt-6 grid lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <div className="space-y-3 text-olive-800/90">
            <p><strong>Διεύθυνση:</strong> Tranquility 123, Αθήνα 10558</p>
            <p><strong>Τηλέφωνο:</strong> <a href="tel:+302101234567" className="text-olive-700 hover:underline">+30 210 123 4567</a></p>
            <p><strong>Email:</strong> <a href="mailto:hello@serenityspa.com" className="text-olive-700 hover:underline">hello@serenityspa.com</a></p>
            <p><strong>Ώρες:</strong> Δευ–Σαβ 10:00–20:00</p>
          </div>
          <div className="mt-6">
            <iframe
              title="Χάρτης Google"
              aria-label="Χάρτης Google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31498.2251182746!2d23.709!3d37.979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1e55555555%3AAthens!2sAthens!5e0!3m2!1sen!2sgr!4v1680000000000"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border border-sand"
            />
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-lg">Είμαστε εδώ για εσάς</h3>
          <p className="mt-2 text-olive-800/80">Στείλτε μας μήνυμα — απαντάμε συνήθως μέσα σε λίγες ώρες.</p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

