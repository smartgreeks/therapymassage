"use client"
import React from "react"
import SelectField from "@/components/ui/SelectField"
import { useT } from "@/lib/TProvider"

type Option = { duration: string; price: string }
type SubItem = { 
  title: string; 
  desc?: string; 
  image?: string; 
  options?: Option[]; 
  duration?: string; 
  price?: string;
  category?: string; // Added to track which category this service belongs to
}
type Category = { title: string; intro: string; hero?: string; sub: SubItem[] }

function parsePrice(p?: string): number | null {
  if (!p) return null
  const m = p.replace(/,/g, '.').match(/([0-9]+(?:\.[0-9]+)?)/)
  return m ? Number(m[1]) : null
}

// All categories data - we'll need to import this or pass it as props
const getAllCategories = (locale: 'el' | 'en'): Record<string, Category> => {
  if (locale === 'el') {
    return {
      euexia: {
        title: "Ευεξία",
        intro: "Χαλάρωση, ισορροπία και ευεξία με τεχνικές προσαρμοσμένες στις ανάγκες σας.",
        sub: [
          { title: "Χαλαρωτικό μασάζ", desc: "Ήπιες πιέσεις και ρυθμικοί χειρισμοί για αποφόρτιση άγχους.", options: [
            { duration: "30'", price: "€15" },
            { duration: "45'", price: "€20" },
            { duration: "60'", price: "€25" },
            { duration: "90'", price: "€35" },
          ] },
          { title: "Deep tissue", desc: "Εστιασμένη δουλειά σε χρόνιες εντάσεις και trigger points.", options: [
            { duration: "30'", price: "€15" },
            { duration: "45'", price: "€20" },
            { duration: "60'", price: "€25" },
            { duration: "90'", price: "€35" },
          ] },
          { title: "Αθλητικό μασάζ", desc: "Αποκατάσταση, ευλυγισία και πρόληψη τραυματισμών.", options: [
            { duration: "45'", price: "€20" },
            { duration: "60'", price: "€25" },
          ] },
          { title: "Λεμφικό μασάζ", desc: "Ενίσχυση λεμφικής κυκλοφορίας – αποσυμφόρηση.", options: [
            { duration: "45'", price: "€20" },
            { duration: "60'", price: "€25" },
          ] },
          { title: "Ρεφλεξολογία", desc: "Πίεση σε αντανακλαστικά σημεία πελμάτων.", options: [
            { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
          ] },
        ],
      },
      omorfia: {
        title: "Ομορφιά",
        intro: "Φυσική λάμψη και φροντίδα προσώπου/σώματος με εξειδικευμένες τεχνικές.",
        sub: [
          { title: "Φυσικό face lifting", desc: "Μη επεμβατικές τεχνικές τόνωσης και σύσφιξης.", price: "€15" },
          { title: "Σοκολατοθεραπεία", desc: "Θεραπεία ευεξίας με άρωμα σοκολάτας.", price: "€30" },
        ],
      },
      "enallaktikes-therapeies": {
        title: "Εναλλακτικές Θεραπείες",
        intro: "Ενεργειακό μασάζ, αγιουρβεδικό, ρεφλεξολογία και περισσότερα.",
        sub: [
          { title: "Ενεργειακή θεραπεία", desc: "Συνδυασμός τεχνικών για εξισορρόπηση ενέργειας.", options: [ { duration: "90'", price: "€40" } ] },
          { title: "Thai massage", desc: "Παραδοσιακές διατάσεις και πιέσεις για ευλυγισία.", options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
        ],
      },
      "idiaiteres-stigmes": {
        title: "Ιδιαίτερες στιγμές",
        intro: "Πακέτα για ζευγάρια, bachelor/bachelorette και επετείους.",
        sub: [
          { title: "Couples massage", desc: "Δίπλα-δίπλα εμπειρία για δύο.", options: [ { duration: "60'", price: "€110" } ] },
        ],
      },
    }
  } else {
    return {
      euexia: {
        title: "Wellness",
        intro: "Relaxation, balance and wellness with techniques adapted to your needs.",
        sub: [
          { title: "Relaxing massage", desc: "Gentle pressures and rhythmic movements for stress relief.", options: [
            { duration: "30'", price: "€15" },
            { duration: "45'", price: "€20" },
            { duration: "60'", price: "€25" },
            { duration: "90'", price: "€35" },
          ] },
          { title: "Deep tissue", desc: "Focused work on chronic tensions and trigger points.", options: [
            { duration: "30'", price: "€15" },
            { duration: "45'", price: "€20" },
            { duration: "60'", price: "€25" },
            { duration: "90'", price: "€35" },
          ] },
          { title: "Sports massage", desc: "Recovery, flexibility and injury prevention.", options: [
            { duration: "45'", price: "€20" },
            { duration: "60'", price: "€25" },
          ] },
          { title: "Lymphatic massage", desc: "Enhancement of lymphatic circulation - decongestion.", options: [
            { duration: "45'", price: "€20" },
            { duration: "60'", price: "€25" },
          ] },
          { title: "Reflexology", desc: "Pressure on reflex points of the soles.", options: [
            { duration: "30'", price: "€15" }, { duration: "45'", price: "€20" }, { duration: "60'", price: "€25" }
          ] },
        ],
      },
      omorfia: {
        title: "Beauty",
        intro: "Natural radiance and face/body care with specialized techniques.",
        sub: [
          { title: "Natural face lifting", desc: "Non-invasive toning and tightening techniques.", price: "€15" },
          { title: "Chocolate therapy", desc: "Wellness therapy with chocolate aroma.", price: "€30" },
        ],
      },
      "enallaktikes-therapeies": {
        title: "Alternative Therapies",
        intro: "Energy massage, Ayurvedic, reflexology and more.",
        sub: [
          { title: "Energy therapy", desc: "Combination of techniques for energy balance.", options: [ { duration: "90'", price: "€40" } ] },
          { title: "Thai massage", desc: "Traditional stretches and pressures for flexibility.", options: [ { duration: "60'", price: "€35" }, { duration: "90'", price: "€45" } ] },
        ],
      },
      "idiaiteres-stigmes": {
        title: "Special Moments",
        intro: "Packages for couples, bachelor/bachelorette and anniversaries.",
        sub: [
          { title: "Couples massage", desc: "Side-by-side experience for two.", options: [ { duration: "60'", price: "€110" } ] },
        ],
      },
    }
  }
}

type SelectedService = {
  categoryKey: string;
  categoryTitle: string;
  serviceIndex: number;
  optionIndex: number;
  service: SubItem;
  option: Option;
  price: number;
}

export default function CrossCategoryCalculator({ 
  currentCategory, 
  locale = 'el' 
}: { 
  currentCategory: string; 
  locale?: 'el' | 'en';
}) {
  const t = useT()
  const [selectedServices, setSelectedServices] = React.useState<SelectedService[]>([])
  const [selectedCategory, setSelectedCategory] = React.useState(currentCategory)
  const [selectedServiceIndex, setSelectedServiceIndex] = React.useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(0)

  const allCategories = getAllCategories(locale)
  const categoryOptions = Object.entries(allCategories).map(([key, cat]) => ({
    key,
    title: cat.title
  }))

  const currentCategoryData = allCategories[selectedCategory]
  const availableServices = currentCategoryData?.sub || []
  
  const selectedService = availableServices[selectedServiceIndex]
  const serviceOptions = selectedService?.options ?? (selectedService?.price ? [{ duration: selectedService.duration ?? '', price: selectedService.price }] : [])

  const addService = () => {
    if (!selectedService || serviceOptions.length === 0) return

    const option = serviceOptions[selectedOptionIndex]
    const price = parsePrice(option.price) ?? 0

    const newService: SelectedService = {
      categoryKey: selectedCategory,
      categoryTitle: currentCategoryData.title,
      serviceIndex: selectedServiceIndex,
      optionIndex: selectedOptionIndex,
      service: selectedService,
      option,
      price
    }

    setSelectedServices(prev => [...prev, newService])
  }

  const removeService = (index: number) => {
    setSelectedServices(prev => prev.filter((_, i) => i !== index))
  }

  const total = selectedServices.reduce((sum, service) => sum + service.price, 0)

  return (
    <div className="mt-4 space-y-4">
      {/* Service Selector */}
      <div className="border border-sand rounded-lg p-4 bg-white">
        <h4 className="font-medium mb-3">{locale === 'el' ? 'Προσθήκη Υπηρεσίας' : 'Add Service'}</h4>
        <div className="grid sm:grid-cols-3 gap-3">
          <SelectField
            label={locale === 'el' ? "Κατηγορία" : "Category"}
            options={categoryOptions.map(cat => cat.title)}
            value={categoryOptions.findIndex(cat => cat.key === selectedCategory)}
            onChange={(i) => {
              setSelectedCategory(categoryOptions[i].key)
              setSelectedServiceIndex(0)
              setSelectedOptionIndex(0)
            }}
          />
          <SelectField
            label={locale === 'el' ? "Υπηρεσία" : "Service"}
            options={availableServices.map((s) => s.title)}
            value={selectedServiceIndex}
            onChange={(i) => { 
              setSelectedServiceIndex(i) 
              setSelectedOptionIndex(0) 
            }}
          />
          <SelectField
            label={locale === 'el' ? "Διάρκεια" : "Duration"}
            options={serviceOptions.map((o) => `${o.duration} – ${o.price}`)}
            value={selectedOptionIndex}
            onChange={(i) => setSelectedOptionIndex(i)}
          />
        </div>
        <button 
          onClick={addService}
          disabled={!selectedService || serviceOptions.length === 0}
          className="mt-3 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {locale === 'el' ? 'Προσθήκη στο Πακέτο' : 'Add to Package'}
        </button>
      </div>

      {/* Selected Services */}
      {selectedServices.length > 0 && (
        <div className="border border-sand rounded-lg p-4 bg-white">
          <h4 className="font-medium mb-3">{locale === 'el' ? 'Επιλεγμένες Υπηρεσίες' : 'Selected Services'}</h4>
          <div className="space-y-2">
            {selectedServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-olive-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{service.service.title}</div>
                  <div className="text-sm text-olive-700">{service.categoryTitle} • {service.option.duration}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">{service.option.price}</span>
                  <button 
                    onClick={() => removeService(index)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    {locale === 'el' ? 'Αφαίρεση' : 'Remove'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Total */}
      <div className="flex items-center justify-between rounded-lg bg-olive-900 text-white px-4 py-3">
        <div className="text-lg font-medium">{locale === 'el' ? 'Συνολικό Κόστος' : 'Total Cost'}</div>
        <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
          €{total.toFixed(2)}
        </div>
      </div>

      {selectedServices.length > 1 && (
        <div className="text-sm text-olive-700 text-center">
          {locale === 'el' 
            ? `${selectedServices.length} υπηρεσίες από ${new Set(selectedServices.map(s => s.categoryKey)).size} κατηγορίες`
            : `${selectedServices.length} services from ${new Set(selectedServices.map(s => s.categoryKey)).size} categories`}
        </div>
      )}
    </div>
  )
}
