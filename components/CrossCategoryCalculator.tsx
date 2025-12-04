"use client"
import React from "react"
import SelectField from "@/components/ui/SelectField"
import { useT } from "@/lib/TProvider"
import { CATEGORIES_EL, CATEGORIES_EN, Category, SubItem, Option } from "@/lib/categories"

function parsePrice(p?: string): number | null {
  if (!p) return null
  const m = p.replace(/,/g, '.').match(/([0-9]+(?:\.[0-9]+)?)/)
  return m ? Number(m[1]) : null
}

// All categories data - we'll need to import this or pass it as props
const getAllCategories = (locale: 'el' | 'en'): Record<string, Category> => {
  return locale === 'el' ? CATEGORIES_EL : CATEGORIES_EN
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
