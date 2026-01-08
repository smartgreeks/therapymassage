'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Zap,
    Heart,
    Activity,
    Timer,
    Shield,
    CheckCircle2,
    Phone,
    ArrowRight,
    Sparkles,
    CircleDot,
    Target,
    TrendingUp
} from 'lucide-react'
import { useT, useLocale } from '@/lib/TProvider'

export default function EMSPage() {
    const t = useT()
    const locale = useLocale()

    const benefits = locale === 'el' ? [
        {
            icon: Activity,
            title: 'Ενδυνάμωση Μυών',
            description: 'Στοχευμένη τόνωση και ενδυνάμωση μυϊκών ομάδων χωρίς κόπωση των αρθρώσεων.'
        },
        {
            icon: Heart,
            title: 'Βελτίωση Κυκλοφορίας',
            description: 'Αυξημένη ροή αίματος στους ιστούς για ταχύτερη αποκατάσταση και θρέψη.'
        },
        {
            icon: Timer,
            title: 'Γρήγορα Αποτελέσματα',
            description: 'Ορατά αποτελέσματα σε λιγότερες συνεδρίες σε σύγκριση με παραδοσιακές μεθόδους.'
        },
        {
            icon: Shield,
            title: 'Ανακούφιση Πόνου',
            description: 'Μείωση μυϊκών σπασμών και χρόνιου πόνου μέσω φυσικής διέγερσης.'
        },
        {
            icon: Target,
            title: 'Στοχευμένη Θεραπεία',
            description: 'Εξατομικευμένη προσέγγιση ανάλογα με τις ανάγκες κάθε σώματος.'
        },
        {
            icon: TrendingUp,
            title: 'Αθλητική Απόδοση',
            description: 'Ιδανικό για αθλητές που θέλουν να βελτιώσουν την απόδοσή τους.'
        }
    ] : [
        {
            icon: Activity,
            title: 'Muscle Strengthening',
            description: 'Targeted toning and strengthening of muscle groups without joint strain.'
        },
        {
            icon: Heart,
            title: 'Improved Circulation',
            description: 'Increased blood flow to tissues for faster recovery and nourishment.'
        },
        {
            icon: Timer,
            title: 'Fast Results',
            description: 'Visible results in fewer sessions compared to traditional methods.'
        },
        {
            icon: Shield,
            title: 'Pain Relief',
            description: 'Reduction of muscle spasms and chronic pain through natural stimulation.'
        },
        {
            icon: Target,
            title: 'Targeted Therapy',
            description: 'Personalized approach based on each body\'s needs.'
        },
        {
            icon: TrendingUp,
            title: 'Athletic Performance',
            description: 'Ideal for athletes looking to improve their performance.'
        }
    ]

    const howItWorks = locale === 'el' ? [
        {
            step: '01',
            title: 'Αξιολόγηση',
            description: 'Αρχική αξιολόγηση των αναγκών σας και προσδιορισμός στόχων.'
        },
        {
            step: '02',
            title: 'Εξατομίκευση',
            description: 'Προσαρμογή της έντασης και της διάρκειας στο δικό σας σώμα.'
        },
        {
            step: '03',
            title: 'Θεραπεία',
            description: 'Εφαρμογή ηλεκτροδίων σε στοχευμένες μυϊκές ομάδες.'
        },
        {
            step: '04',
            title: 'Αποτελέσματα',
            description: 'Αισθανθείτε τη διαφορά από την πρώτη κιόλας συνεδρία.'
        }
    ] : [
        {
            step: '01',
            title: 'Assessment',
            description: 'Initial assessment of your needs and goal setting.'
        },
        {
            step: '02',
            title: 'Customization',
            description: 'Adjusting intensity and duration to your body.'
        },
        {
            step: '03',
            title: 'Treatment',
            description: 'Application of electrodes to targeted muscle groups.'
        },
        {
            step: '04',
            title: 'Results',
            description: 'Feel the difference from the very first session.'
        }
    ]

    const idealFor = locale === 'el' ? [
        'Αποκατάσταση μετά από τραυματισμό',
        'Ενδυνάμωση αδύναμων μυών',
        'Μείωση μυϊκού πόνου',
        'Βελτίωση αθλητικής απόδοσης',
        'Τόνωση και σύσφιξη',
        'Αντιμετώπιση κυτταρίτιδας'
    ] : [
        'Recovery after injury',
        'Strengthening weak muscles',
        'Muscle pain reduction',
        'Improving athletic performance',
        'Toning and firming',
        'Cellulite treatment'
    ]

    return (
        <main className="bg-beige">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/services/ems.jpg"
                        alt="EMS Therapy"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-olive-900/95 via-olive-900/80 to-olive-900/60" />
                </div>

                {/* Content */}
                <div className="container-safe relative z-10 py-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-amber-200 backdrop-blur-sm mb-6">
                            <Zap className="w-4 h-4" />
                            <span>{locale === 'el' ? 'Προηγμένη Τεχνολογία' : 'Advanced Technology'}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            {locale === 'el' ? (
                                <>
                                    Η επαγγελματική φροντίδα<br />
                                    <span className="text-amber-200">που χρειάζεται το σώμα σου</span>
                                </>
                            ) : (
                                <>
                                    The professional care<br />
                                    <span className="text-amber-200">your body needs</span>
                                </>
                            )}
                        </h1>

                        <p className="text-lg md:text-xl text-beige/90 mb-8 leading-relaxed max-w-xl">
                            {locale === 'el'
                                ? 'Ανακαλύψτε τη δύναμη της Ηλεκτρομυϊκής Διέγερσης (EMS) για φυσική ενδυνάμωση, αποκατάσταση και ευεξία.'
                                : 'Discover the power of Electrical Muscle Stimulation (EMS) for natural strengthening, recovery and wellness.'}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:2104644289"
                                className="inline-flex items-center justify-center gap-2 bg-amber-100 text-olive-900 px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <Phone className="w-5 h-5" />
                                {locale === 'el' ? 'Κλείστε Ραντεβού' : 'Book Appointment'}
                            </a>
                            <Link
                                href={`/${locale}/services`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-white border border-white/30 hover:bg-white/10 transition-all"
                            >
                                {locale === 'el' ? 'Όλες οι Υπηρεσίες' : 'All Services'}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-beige to-transparent" />
            </section>

            {/* What is EMS Section */}
            <section className="py-20">
                <div className="container-safe">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif italic text-olive-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                                {locale === 'el' ? 'Τι είναι το EMS;' : 'What is EMS?'}
                            </h2>
                            <div className="space-y-4 text-olive-800 leading-relaxed">
                                <p>
                                    {locale === 'el'
                                        ? 'Η Ηλεκτρομυϊκή Διέγερση (EMS - Electrical Muscle Stimulation) είναι μια σύγχρονη θεραπευτική τεχνική που χρησιμοποιεί ήπιους ηλεκτρικούς παλμούς για να προκαλέσει μυϊκές συσπάσεις.'
                                        : 'Electrical Muscle Stimulation (EMS) is a modern therapeutic technique that uses gentle electrical impulses to cause muscle contractions.'}
                                </p>
                                <p>
                                    {locale === 'el'
                                        ? 'Η διαδικασία μιμείται τα φυσικά σήματα του κεντρικού νευρικού συστήματος, επιτρέποντας στους μύες να εξασκούνται και να ενδυναμώνονται χωρίς την επιβάρυνση που προκαλεί η παραδοσιακή άσκηση.'
                                        : 'The process mimics natural signals from the central nervous system, allowing muscles to exercise and strengthen without the strain caused by traditional exercise.'}
                                </p>
                                <p>
                                    {locale === 'el'
                                        ? 'Χρησιμοποιείται ευρέως σε φυσικοθεραπεία, αθλητική αποκατάσταση, και θεραπείες ευεξίας για τα εξαιρετικά αποτελέσματά της.'
                                        : 'It is widely used in physiotherapy, sports rehabilitation, and wellness treatments for its exceptional results.'}
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-olive-900/5 rounded-3xl p-8 border border-olive-900/10">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center p-4">
                                        <div className="text-4xl font-bold text-olive-900 mb-2">20+</div>
                                        <div className="text-sm text-olive-700">
                                            {locale === 'el' ? 'Χρόνια Έρευνας' : 'Years of Research'}
                                        </div>
                                    </div>
                                    <div className="text-center p-4">
                                        <div className="text-4xl font-bold text-olive-900 mb-2">95%</div>
                                        <div className="text-sm text-olive-700">
                                            {locale === 'el' ? 'Ικανοποίηση Πελατών' : 'Client Satisfaction'}
                                        </div>
                                    </div>
                                    <div className="text-center p-4">
                                        <div className="text-4xl font-bold text-olive-900 mb-2">30\'</div>
                                        <div className="text-sm text-olive-700">
                                            {locale === 'el' ? 'Διάρκεια Συνεδρίας' : 'Session Duration'}
                                        </div>
                                    </div>
                                    <div className="text-center p-4">
                                        <div className="text-4xl font-bold text-olive-900 mb-2">100%</div>
                                        <div className="text-sm text-olive-700">
                                            {locale === 'el' ? 'Ασφαλής Θεραπεία' : 'Safe Treatment'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative */}
                            <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-amber-200/30 rounded-full blur-2xl" />
                            <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-olive-500/20 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-olive-900 text-beige">
                <div className="container-safe">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif italic mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                            {locale === 'el' ? 'Οφέλη της Θεραπείας EMS' : 'Benefits of EMS Therapy'}
                        </h2>
                        <p className="text-beige/80 max-w-2xl mx-auto">
                            {locale === 'el'
                                ? 'Η τεχνολογία EMS προσφέρει πολλαπλά οφέλη για το σώμα και την υγεία σας.'
                                : 'EMS technology offers multiple benefits for your body and health.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-200/30 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-amber-200/10 flex items-center justify-center mb-4 group-hover:bg-amber-200/20 transition-colors">
                                    <benefit.icon className="w-6 h-6 text-amber-200" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-beige/70">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20">
                <div className="container-safe">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif italic text-olive-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                            {locale === 'el' ? 'Πώς Λειτουργεί' : 'How It Works'}
                        </h2>
                        <p className="text-olive-700 max-w-2xl mx-auto">
                            {locale === 'el'
                                ? 'Η διαδικασία είναι απλή, ασφαλής και αποτελεσματική.'
                                : 'The process is simple, safe and effective.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {howItWorks.map((item, index) => (
                            <div key={index} className="relative text-center">
                                <div className="text-6xl font-bold text-olive-900/10 mb-4">{item.step}</div>
                                <h3 className="text-xl font-semibold text-olive-900 mb-2">{item.title}</h3>
                                <p className="text-olive-700">{item.description}</p>

                                {index < howItWorks.length - 1 && (
                                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-olive-900/20" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ideal For Section */}
            <section className="py-20 bg-gradient-to-br from-[#7f1d1d] to-[#991b1b] text-beige">
                <div className="container-safe">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif italic mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                                {locale === 'el' ? 'Ιδανικό για:' : 'Ideal for:'}
                            </h2>
                            <ul className="space-y-4">
                                {idealFor.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-amber-200 flex-shrink-0" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <Sparkles className="w-12 h-12 text-amber-200 mb-6" />
                            <h3 className="text-2xl font-semibold mb-4">
                                {locale === 'el' ? 'Δοκιμάστε την πρώτη σας συνεδρία' : 'Try your first session'}
                            </h3>
                            <p className="text-beige/80 mb-6">
                                {locale === 'el'
                                    ? 'Επικοινωνήστε μαζί μας για να μάθετε περισσότερα και να κλείσετε το πρώτο σας ραντεβού EMS.'
                                    : 'Contact us to learn more and book your first EMS appointment.'}
                            </p>
                            <a
                                href="tel:2104644289"
                                className="inline-flex items-center justify-center gap-2 bg-amber-100 text-[#7f1d1d] px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
                            >
                                <Phone className="w-5 h-5" />
                                210 464 4289
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Note Section */}
            <section className="py-16 bg-amber-50">
                <div className="container-safe">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100/50 max-w-3xl mx-auto text-center">
                        <Shield className="w-12 h-12 text-olive-900 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-olive-900 mb-4">
                            {locale === 'el' ? 'Ασφάλεια & Επαγγελματισμός' : 'Safety & Professionalism'}
                        </h3>
                        <p className="text-olive-700">
                            {locale === 'el'
                                ? 'Η θεραπεία EMS εφαρμόζεται από πιστοποιημένους επαγγελματίες με σύγχρονο εξοπλισμό. Πριν την έναρξη, θα γίνει πλήρης αξιολόγηση της κατάστασής σας για να διασφαλιστεί ότι η θεραπεία είναι κατάλληλη για εσάς.'
                                : 'EMS therapy is applied by certified professionals with modern equipment. Before starting, a full assessment of your condition will be made to ensure the treatment is suitable for you.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container-safe text-center">
                    <h2 className="text-3xl md:text-4xl font-serif italic text-olive-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                        {locale === 'el'
                            ? 'Έτοιμοι να νιώσετε τη διαφορά;'
                            : 'Ready to feel the difference?'}
                    </h2>
                    <p className="text-olive-700 mb-8 max-w-xl mx-auto">
                        {locale === 'el'
                            ? 'Επικοινωνήστε μαζί μας σήμερα για να κλείσετε το ραντεβού σας και να ξεκινήσετε το ταξίδι σας προς την ευεξία.'
                            : 'Contact us today to book your appointment and start your journey to wellness.'}
                    </p>
                    <a
                        href="tel:2104644289"
                        className="inline-flex items-center justify-center gap-2 bg-olive-900 text-beige px-10 py-4 rounded-full font-bold hover:bg-olive-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <Phone className="w-5 h-5" />
                        {locale === 'el' ? 'Καλέστε τώρα: 210 464 4289' : 'Call now: 210 464 4289'}
                    </a>
                </div>
            </section>
        </main>
    )
}
