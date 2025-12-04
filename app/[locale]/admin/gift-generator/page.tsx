'use client'

import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Sparkles, Download, RefreshCw, Gift, Palette, Snowflake, Sun, Flower2, Leaf, Star, PartyPopper, Loader2, Lock, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { verifyAdminPassword } from './actions'

const THEMES = {
  default: {
    id: 'default',
    label: 'Κλασικό (Olive)',
    colors: {
      panelBg: 'bg-olive-900',
      panelText: 'text-beige',
      cardBg: 'bg-[#FDFBF7]',
      textPrimary: 'text-olive-900',
      textSecondary: 'text-olive-600',
      accent: 'text-olive-400',
      border: 'border-olive-100',
      divider: 'bg-beige/50'
    },
    icon: '🌿',
    Graphic: Leaf
  },
  birthday: {
    id: 'birthday',
    label: 'Γιορτή / Γενέθλια',
    colors: {
      panelBg: 'bg-pink-900',
      panelText: 'text-pink-50',
      cardBg: 'bg-pink-50/30',
      textPrimary: 'text-pink-900',
      textSecondary: 'text-pink-700',
      accent: 'text-pink-500',
      border: 'border-pink-100',
      divider: 'bg-pink-50/50'
    },
    icon: '🎂',
    Graphic: PartyPopper
  },
  christmas: {
    id: 'christmas',
    label: 'Χριστούγεννα',
    colors: {
      panelBg: 'bg-[#7f1d1d]', // red-900
      panelText: 'text-amber-50',
      cardBg: 'bg-[#fffbfb]',
      textPrimary: 'text-[#7f1d1d]',
      textSecondary: 'text-[#991b1b]',
      accent: 'text-[#b45309]', // amber-700
      border: 'border-red-100',
      divider: 'bg-amber-50/50'
    },
    icon: '🎄',
    Graphic: Snowflake
  },
  newyear: {
    id: 'newyear',
    label: 'Πρωτοχρονιά',
    colors: {
      panelBg: 'bg-slate-900',
      panelText: 'text-amber-100',
      cardBg: 'bg-slate-50',
      textPrimary: 'text-slate-900',
      textSecondary: 'text-slate-600',
      accent: 'text-amber-500',
      border: 'border-slate-200',
      divider: 'bg-amber-100/50'
    },
    icon: '✨',
    Graphic: Star
  },
  easter: {
    id: 'easter',
    label: 'Πάσχα',
    colors: {
      panelBg: 'bg-violet-900',
      panelText: 'text-violet-50',
      cardBg: 'bg-violet-50/30',
      textPrimary: 'text-violet-900',
      textSecondary: 'text-violet-700',
      accent: 'text-violet-400',
      border: 'border-violet-100',
      divider: 'bg-violet-50/50'
    },
    icon: '🥚',
    Graphic: Flower2
  },
  summer: {
    id: 'summer',
    label: 'Καλοκαίρι',
    colors: {
      panelBg: 'bg-cyan-800',
      panelText: 'text-cyan-50',
      cardBg: 'bg-cyan-50/30',
      textPrimary: 'text-cyan-900',
      textSecondary: 'text-cyan-700',
      accent: 'text-cyan-500',
      border: 'border-cyan-100',
      divider: 'bg-cyan-50/50'
    },
    icon: '☀️',
    Graphic: Sun
  }
} as const

type ThemeKey = keyof typeof THEMES

export default function GiftCardGenerator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [authError, setAuthError] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    gift: '', // Renamed from amount
    message: '',
    code: generateCode()
  })
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('default')
  const [isGenerating, setIsGenerating] = useState(false)

  const componentRef = useRef<HTMLDivElement>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    setAuthError(false)
    
    try {
      const result = await verifyAdminPassword(passwordInput)
      if (result.success) {
        setIsAuthenticated(true)
      } else {
        setAuthError(true)
      }
    } catch (error) {
      console.error(error)
      setAuthError(true)
    } finally {
      setIsVerifying(false)
    }
  }

  const handleDownloadPDF = async () => {
    if (!componentRef.current) return
    setIsGenerating(true)

    try {
      const canvas = await html2canvas(componentRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // For images
        backgroundColor: null,
      })

      const imgData = canvas.toDataURL('image/png')
      
      // The card is 800px x 450px.
      // We want the PDF to be exactly this size (or proportional).
      // Let's define the PDF page size in mm.
      // 1px = 0.264583 mm (at 96 DPI)
      // 800px * 0.264583 = 211.6 mm
      // 450px * 0.264583 = 119.0 mm
      
      const pdfWidth = 211.6
      const pdfHeight = 119.0
      
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [pdfWidth, pdfHeight]
      })

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`Therapy-Massage-Gift-${formData.code}.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Υπήρξε ένα πρόβλημα κατά τη δημιουργία του PDF. Παρακαλώ δοκιμάστε ξανά.')
    } finally {
      setIsGenerating(false)
    }
  }

  function generateCode() {
    return 'GIFT-' + Math.random().toString(36).substring(2, 8).toUpperCase()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const theme = THEMES[currentTheme]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-stone-200 text-center">
          <div className="w-16 h-16 bg-olive-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-olive-900" />
          </div>
          <h1 className="text-2xl font-bold text-olive-900 mb-2">Περιοχή Διαχειριστή</h1>
          <p className="text-stone-500 mb-8 text-sm">Παρακαλώ εισάγετε τον κωδικό πρόσβασης για να συνεχίσετε.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Κωδικός Πρόσβασης"
                className={`w-full p-3 border rounded-lg outline-none transition-all ${authError ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-stone-200 bg-stone-50 focus:border-olive-500 focus:ring-2 focus:ring-olive-500/20'}`}
                autoFocus
              />
              {authError && <p className="text-red-500 text-xs mt-2 text-left">Λάθος κωδικός. Προσπαθήστε ξανά.</p>}
            </div>
            <button 
              type="submit"
              disabled={isVerifying}
              className="w-full bg-olive-900 text-beige py-3 rounded-lg font-semibold hover:bg-olive-800 transition flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isVerifying ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
              Είσοδος
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-100 p-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-8">
        
        {/* 1. Φόρμα Εισαγωγής */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 h-fit">
          <h1 className="text-xl font-bold text-olive-900 mb-6 flex items-center gap-2">
            <Gift className="w-5 h-5" />
            Στοιχεία Δώρου
          </h1>
          
          <div className="space-y-4">
            {/* Theme Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Palette className="w-3 h-3" />
                Επιλογή Θέματος
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(THEMES) as ThemeKey[]).map((themeKey) => (
                  <button
                    key={themeKey}
                    onClick={() => setCurrentTheme(themeKey)}
                    className={`p-2 rounded-lg border text-xs font-medium transition-all flex flex-col items-center gap-1 ${
                      currentTheme === themeKey 
                        ? 'bg-olive-50 border-olive-500 text-olive-900 ring-1 ring-olive-500' 
                        : 'bg-white border-stone-200 text-stone-600 hover:border-olive-300 hover:bg-stone-50'
                    }`}
                  >
                    <span className="text-lg">{THEMES[themeKey].icon}</span>
                    {THEMES[themeKey].label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Από (Αποστολέας)</label>
              <input 
                type="text" name="from" value={formData.from} onChange={handleChange} placeholder="π.χ. Μαρία"
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Προς (Παραλήπτης)</label>
              <input 
                type="text" name="to" value={formData.to} onChange={handleChange} placeholder="π.χ. Ελένη"
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Το Δώρο (Υπηρεσία ή Ποσό)</label>
              <input 
                type="text" name="gift" value={formData.gift} onChange={handleChange} placeholder="π.χ. Relax Massage 50' ή 50€"
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 outline-none transition-all"
              />
              <p className="text-[10px] text-stone-400 mt-1">Αυτό θα εμφανιστεί κεντρικά στην κάρτα.</p>
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Προσωπική Ευχή</label>
              <textarea 
                name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="π.χ. Χρόνια πολλά! Σου εύχομαι στιγμές χαλάρωσης..."
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 outline-none transition-all resize-none"
              />
            </div>
            
            <div className="pt-4 border-t border-stone-100">
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Κωδικός</label>
              <div className="flex gap-2">
                <input 
                  type="text" value={formData.code} readOnly
                  className="w-full p-2 bg-stone-100 border border-stone-200 rounded text-sm font-mono text-olive-800 font-bold text-center tracking-widest"
                />
                <button 
                  onClick={() => setFormData({...formData, code: generateCode()})}
                  className="p-2 text-olive-700 hover:bg-olive-50 rounded border border-transparent hover:border-olive-100 transition-colors"
                  title="Νέος Κωδικός"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button 
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="w-full mt-4 bg-olive-900 text-beige py-3 rounded-lg font-semibold hover:bg-olive-800 transition flex items-center justify-center gap-2 shadow-lg shadow-olive-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Δημιουργία PDF...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Λήψη PDF
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2. Live Preview */}
        <div className="flex flex-col items-center justify-center bg-stone-200 rounded-xl p-4 lg:p-12 border border-stone-300 overflow-auto">
          <p className="text-stone-500 font-medium mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Preview
          </p>
          
          {/* THE CARD */}
          <div ref={componentRef} className={`w-[800px] h-[450px] ${theme.colors.cardBg} relative shadow-2xl ${theme.colors.textPrimary} print:shadow-none print:mx-auto overflow-hidden flex transition-colors duration-500`}>
            
            {/* Left Decorative Side */}
            <div className={`w-[280px] ${theme.colors.panelBg} h-full relative flex flex-col items-center justify-center p-8 ${theme.colors.panelText} text-center transition-colors duration-500 overflow-hidden`}>
              {/* Decorative Background Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                  <theme.Graphic className="w-80 h-80" strokeWidth={0.5} />
              </div>

              <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]"></div> {/* Optional pattern placeholder */}
              <div className={`relative z-10 border border-current/30 p-6 h-full w-full flex flex-col items-center justify-center backdrop-blur-[1px]`}>
                <div className="w-24 h-24 relative mb-6 opacity-90">
                   {/* Using the logo from public folder */}
                   <Image src="/images/logoTherapy.webp" alt="Logo" fill className="object-contain brightness-0 invert" />
                </div>
                <h2 className="text-2xl font-serif tracking-wider mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Therapy Massage</h2>
                <div className={`w-8 h-[1px] ${theme.colors.divider} my-4`}></div>
                <p className="text-xs uppercase tracking-[0.2em] opacity-80">Wellness & Spa</p>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="flex-1 p-12 flex flex-col relative">
              {/* Watermark */}
              <div className="absolute right-0 bottom-0 w-64 h-64 opacity-[0.03] pointer-events-none">
                <Image src="/images/logoTherapy.webp" alt="Watermark" fill className="object-contain" />
              </div>

              <div className="flex-1 flex flex-col justify-center z-10">
                <div className="text-center mb-8">
                  <span className={`text-xs font-bold ${theme.colors.accent} uppercase tracking-[0.3em] mb-2 block`}>A Gift For You</span>
                  <h1 className={`text-4xl md:text-5xl ${theme.colors.textPrimary} font-serif italic`} style={{ fontFamily: 'var(--font-playfair)' }}>
                    {formData.gift || 'Gift Voucher'}
                  </h1>
                </div>

                <div className="space-y-6 px-8">
                  <div className={`flex items-end gap-4 border-b ${theme.colors.border} pb-2`}>
                    <span className={`text-[10px] font-bold ${theme.colors.accent} uppercase tracking-widest w-12 pb-1`}>To</span>
                    <span className={`font-serif text-2xl ${theme.colors.textPrimary} flex-1`} style={{ fontFamily: 'var(--font-playfair)' }}>{formData.to}</span>
                  </div>
                  <div className={`flex items-end gap-4 border-b ${theme.colors.border} pb-2`}>
                    <span className={`text-[10px] font-bold ${theme.colors.accent} uppercase tracking-widest w-12 pb-1`}>From</span>
                    <span className={`font-serif text-2xl ${theme.colors.textPrimary} flex-1`} style={{ fontFamily: 'var(--font-playfair)' }}>{formData.from}</span>
                  </div>
                </div>

                {formData.message && (
                  <div className="mt-8 text-center">
                    <p className={`${theme.colors.textSecondary} italic font-serif text-lg leading-relaxed`} style={{ fontFamily: 'var(--font-playfair)' }}>
                      "{formData.message}"
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className={`mt-auto pt-6 flex justify-between items-end border-t ${theme.colors.border}`}>
                <div className="flex flex-col">
                  <span className={`text-[9px] ${theme.colors.accent} uppercase tracking-wider mb-1`}>Voucher Code</span>
                  <span className={`font-mono text-sm font-bold ${theme.colors.textPrimary} tracking-widest`}>{formData.code}</span>
                </div>
                <div className="text-right">
                  <p className={`text-[9px] ${theme.colors.accent} uppercase tracking-wider`}>Valid for 6 months</p>
                  <p className={`text-[9px] ${theme.colors.accent} uppercase tracking-wider`}>www.therapymassage.gr</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

