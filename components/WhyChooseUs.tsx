"use client"
import { Leaf, BadgeCheck, HandCoins } from "lucide-react"
import { useT } from "@/lib/TProvider"

export default function WhyChooseUs() {
  const t = useT()

  const features = [
    { 
      icon: Leaf, 
      title: t("whyUs.feature1.title"), 
      desc: t("whyUs.feature1.desc") 
    },
    { 
      icon: BadgeCheck, 
      title: t("whyUs.feature2.title"), 
      desc: t("whyUs.feature2.desc") 
    },
    { 
      icon: HandCoins, 
      title: t("whyUs.feature3.title"), 
      desc: t("whyUs.feature3.desc") 
    },
  ]

  return (
    <section aria-labelledby="why-title" className="container-safe py-16">
      <h2 id="why-title" className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>{t("whyUs.title")}</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(F => (
          <div key={F.title} className="card p-6">
            <F.icon className="h-8 w-8 text-olive-700" aria-hidden="true" />
            <h3 className="mt-4 font-semibold text-lg">{F.title}</h3>
            <p className="mt-2 text-olive-800/80">{F.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
