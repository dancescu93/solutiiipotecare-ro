"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/forms/lead-form"
// Am schimbat importul pentru a folosi metoda nativă și sigură
import { createClient } from "next-sanity"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  FileCheck2,
  FileText,
  HandCoins,
  Handshake,
  Headphones,
  House,
  KeyRound,
  MapPinned,
  PhoneCall,
  ScrollText,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react"

// Configurația clientului Sanity integrată direct
const sanityClient = createClient({
  projectId: "ver0ns79",
  dataset: "production",
  apiVersion: "2024-05-14",
  useCdn: false, // False pentru a vedea modificările instant pe site
})

type HomepageContent = {
  heroTitle: string
  heroSubtitle: string
  ctaPrimary: string
  ctaSecondary: string
  phone: string
}

const defaultHomepage: HomepageContent = {
  heroTitle: "Obții mai mult decât un credit.",
  heroSubtitle:
    "Te consiliem până la semnarea contractului, te ajutăm cu documentele necesare și comparăm opțiuni relevante din piață ca să găsim soluția potrivită pentru tine.",
  ctaPrimary: "Aplică online",
  ctaSecondary: "Discută pe WhatsApp",
  phone: "40735984545",
}

const services = [
  {
    title: "Credit ipotecar",
    description:
      "Analizăm ofertele tuturor băncilor pentru ca tu să obții cea mai bună dobândă la achiziția locuinței.",
    icon: House,
  },
  {
    title: "Refinanțare",
    description:
      "Scade-ți rata lunară sau obține condiții mai bune pentru creditele pe care le ai deja în derulare.",
    icon: WalletCards,
  },
  {
    title: "Credit Auto",
    description:
      "Soluții rapide pentru achiziția mașinii dorite, noi sau second-hand, cu aprobare simplificată.",
    icon: KeyRound,
  },
]

const processSteps = [
  {
    step: "01",
    title: "Aplici",
    description:
      "Ne lași cererea sau datele tale, iar noi înțelegem rapid de unde pornim.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Te sunăm",
    description:
      "Discutăm clar despre situația ta, obiectiv, venituri, avans și pașii reali.",
    icon: PhoneCall,
  },
  {
    step: "03",
    title: "Te consiliem",
    description:
      "Îți explicăm opțiunile pe înțeles și alegem ce are sens pentru profilul tău.",
    icon: HandCoins,
  },
  {
    step: "04",
    title: "Pregătim documentele",
    description:
      "Te ajutăm să te organizezi corect și să eviți întârzieri și drumuri inutile.",
    icon: ScrollText,
  },
  {
    step: "05",
    title: "Semnăm",
    description:
      "Rămânem alături de tine până la semnarea contractului și ultimii pași importanți.",
    icon: Handshake,
  },
  {
    step: "06",
    title: "Te poți muta",
    description:
      "Scopul final nu este doar aprobarea unui credit, ci să ajungi la rezultatul dorit.",
    icon: KeyRound,
  },
]

const benefits = [
  {
    title: "Te consiliem până la semnarea contractului",
    description:
      "Nu primești doar o ofertă, ci ghidare reală până la finalul procesului.",
    icon: Handshake,
  },
  {
    title: "Te ajutăm cu documentele necesare",
    description:
      "Știi din timp ce acte ai nevoie și în ce ordine trebuie pregătite.",
    icon: FileCheck2,
  },
  {
    title: "Scapi de drumurile în plus",
    description:
      "Reducem timpul pierdut și îți simplificăm etapele administrative.",
    icon: MapPinned,
  },
  {
    title: "Lucrăm cu majoritatea băncilor din România",
    description:
      "Comparăm opțiuni relevante și căutăm soluția potrivită pentru profilul tău.",
    icon: Building2,
  },
  {
    title: "Experiență și contacte în domeniile adiacente",
    description:
      "Te poți orienta și către profesioniști utili în etapele conexe procesului.",
    icon: Headphones,
  },
  {
    title: "Mai multă claritate, mai puțin stres",
    description:
      "Explicăm simplu ce urmează, ce variante ai și cum iei o decizie bună.",
    icon: Sparkles,
  },
]

const testimonials = [
  {
    name: "Andrei & Diana",
    text: "Cel mai mult ne-a ajutat claritatea. Am știut ce urmează și nu am mai alergat inutil după informații.",
  },
  {
    name: "Mihai P.",
    text: "Am apreciat sprijinul real cu documentele și faptul că am primit pași concreți, nu doar teorii.",
  },
  {
    name: "Cristina T.",
    text: "A contat mult că nu am fost lăsată singură în proces. Totul a fost explicat simplu și calm.",
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F766E]">
      {children}
    </p>
  )
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="absolute -right-4 top-0 h-28 w-28 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-950 via-slate-900 to-teal-900 px-8 py-7 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
            De la cerere la mutare
          </p>
          <h3 className="mt-2 text-3xl font-bold">
            Un proces simplificat, cu sprijin real
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200">
            Aplici, discutăm, comparăm, pregătim documentele și rămânem alături
            de tine până la semnarea contractului.
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid gap-4">
            {processSteps.slice(0, 4).map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className="h-6 w-6 text-[#0F766E]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-[0.2em] text-black">
                        {item.step}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 rounded-[24px] bg-[#ECFDF5] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Ce câștigi
            </p>
            <p className="mt-2 text-base leading-7 text-slate-700">
              Mai puțin stres, mai puține drumuri în plus, claritate în proces și
              sprijin real până la semnare.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [homepage, setHomepage] = useState<HomepageContent>(defaultHomepage)

  useEffect(() => {
    let active = true

    sanityClient
      .fetch(
        `*[_type == "homepage"][0]{
          heroTitle,
          heroSubtitle,
          ctaPrimary,
          ctaSecondary,
          phone
        }`
      )
      .then((data) => {
        if (!active || !data) return

        setHomepage({
          heroTitle: data.heroTitle || defaultHomepage.heroTitle,
          heroSubtitle: data.heroSubtitle || defaultHomepage.heroSubtitle,
          ctaPrimary: data.ctaPrimary || defaultHomepage.ctaPrimary,
          ctaSecondary: data.ctaSecondary || defaultHomepage.ctaSecondary,
          phone: data.phone || defaultHomepage.phone,
        })
      })
      .catch(() => {
        setHomepage(defaultHomepage)
      })

    return () => {
      active = false
    }
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const openWhatsApp = () => {
    const phone = homepage.phone.replace(/[^\d]/g, "") || defaultHomepage.phone
    const message = encodeURIComponent(
      "Bună ziua! Am văzut site-ul solutiipotecare.ro și doresc mai multe detalii."
    )
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="flex items-center gap-3">
              <div className="bg-[#0F766E] p-2 rounded-xl shadow-md">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                  solutii<span className="text-[#0F766E]">ipotecare</span>.ro
                </p>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1 font-bold uppercase tracking-[0.1em]">
                  Broker de credite
                </p>
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#servicii" className="hover:text-slate-900 transition-colors">
              Servicii
            </a>
            <a href="#proces" className="hover:text-slate-900 transition-colors">
              Proces
            </a>
            <a href="#beneficii" className="hover:text-slate-900 transition-colors">
              Beneficii
            </a>
          </nav>

          <Button onClick={scrollToContact} className="rounded-xl bg-[#0F766E] px-6 text-white hover:bg-[#0b5e58]">
            Aplică acum
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-20 pt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.10),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.10),_transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <BadgeCheck className="h-4 w-4 text-[#0F766E]" />
                Lucrăm cu majoritatea băncilor din România
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight md:text-6xl text-slate-900">
                {homepage.heroTitle}
              </h1>

              <div className="mt-3 inline-block rounded-2xl bg-[#0F172A] px-4 py-3 text-3xl font-black leading-tight text-white md:text-5xl">
                Primești claritate, sprijin și mai puține drumuri.
              </div>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                {homepage.heroSubtitle}
              </p>

              <div className="mt-8 space-y-3 inline-block text-left">
                {[
                  "Afli rapid ce variantă are sens pentru tine",
                  "Știi din timp ce documente trebuie pregătite",
                  "Primești sprijin până la semnarea contractului",
                  "Reduci drumurile și pașii inutili",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100">
                      <Check className="h-4 w-4 text-[#0F766E]" />
                    </div>
                    <span className="text-base font-medium text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} className="w-full sm:w-auto rounded-xl bg-[#0F766E] px-7 py-6 text-base font-bold text-white hover:bg-[#0b5e58]">
                  {homepage.ctaPrimary}
                </Button>

                <Button
                  onClick={openWhatsApp}
                  variant="outline"
                  className="w-full sm:w-auto rounded-xl border-slate-300 bg-white px-7 py-6 text-base font-bold text-slate-900 hover:bg-slate-50 flex items-center gap-2"
                >
                  <PhoneCall className="h-4 w-4 text-[#0F766E]" />
                  {homepage.ctaSecondary}
                </Button>
              </div>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#0F172A] px-8 py-10 text-white md:px-10 text-center lg:text-left">
              <SectionLabel>De ce să rămâi pe site</SectionLabel>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl text-white">
                Nu doar comparăm.
                <br />
                Te ghidăm.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300 mx-auto lg:mx-0">
                Rolul nostru nu este doar să trimitem o cerere mai departe, ci
                să simplificăm procesul și să îți oferim claritate încă de la
                început.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 px-8 py-10 md:px-10">
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  Te ajutăm să înțelegi ce pași urmează, ce documente sunt
                  necesare și ce variantă are sens pentru situația ta.
                </p>
                <p>
                  Scapi de multă confuzie, de drumuri în plus și de timp pierdut
                  între etape administrative care pot fi organizate mult mai bine.
                </p>
                <p>
                  Experiența și contactele utile din domeniile adiacente îți pot
                  face întreg procesul mai simplu și mai previzibil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicii" className="px-6 py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl text-center md:text-left">
            <SectionLabel>Servicii</SectionLabel>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Cum te putem ajuta
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                    <Icon className="h-8 w-8 text-[#0F766E]" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <button
                    onClick={scrollToContact}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0F766E] hover:gap-3 transition-all"
                  >
                    Solicită ofertă <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="proces" className="px-6 py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl text-center md:text-left">
            <SectionLabel>Procesul nostru</SectionLabel>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl text-slate-900">
              Te consiliem până la semnarea contractului
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Aplici, discutăm, analizăm opțiunile, te ajutăm cu documentele și
              mergem până la finalizare.
            </p>
          </div>

          <div className="grid gap-0 rounded-[32px] border border-slate-200 bg-white shadow-sm lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.step}
                  className={`p-7 ${
                    index !== processSteps.length - 1
                      ? "border-b border-slate-100 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50">
                      <Icon className="h-7 w-7 text-[#0F766E]" />
                    </div>
                    <span className="text-4xl font-black text-black">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="beneficii" className="px-6 py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl text-center md:text-left">
            <SectionLabel>Beneficii reale</SectionLabel>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl text-slate-900">
              Sprijin real, nu doar promisiuni
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[34px] bg-gradient-to-br from-teal-800 to-slate-900 p-8 text-white shadow-xl text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
                Ce contează pentru tine
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight text-white">
                Mai puțin stres.
                <br />
                Mai puține drumuri.
                <br />
                Mai multă claritate.
              </h3>

              <div className="mt-8 space-y-4 inline-block text-left">
                {[
                  "Știi ce documente sunt necesare",
                  "Ai o imagine clară asupra pașilor",
                  "Primești sprijin până la semnare",
                  "Eviți blocajele și timpul pierdut",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-teal-200" />
                    <span className="text-base font-medium text-slate-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {benefits.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                      <Icon className="h-7 w-7 text-slate-900" />
                    </div>

                    <h3 className="text-xl font-black leading-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <SectionLabel>Încredere</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl text-slate-900">
              Ce spun clienții
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 text-lg text-amber-500">★★★★★</div>
                <p className="leading-7 text-slate-600">“{item.text}”</p>
                <p className="mt-6 font-black text-slate-900">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-0 sm:px-6 py-12 md:py-24 bg-[#F8FAFC]">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-none sm:rounded-[40px] bg-white shadow-2xl border-y sm:border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-gradient-to-br from-[#0F766E] to-[#0F172A] px-6 py-10 md:px-12 md:py-16 text-white text-center lg:text-left">
              <SectionLabel><span className="text-teal-200">Hai să discutăm</span></SectionLabel>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">Contact</h2>
              <p className="mt-6 max-w-xl text-base md:text-lg leading-8 text-slate-200 mx-auto lg:mx-0">
                Completează formularul și revenim rapid cu pașii următori.
              </p>
            </div>
            <div className="px-2 py-10 sm:px-12 md:py-16">
              <div className="w-full">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F172A] pt-20 pb-10 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-[#0F766E] to-blue-500 opacity-30" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#0F766E] p-2 rounded-xl shadow-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-black text-white tracking-tighter">
                  solutii<span className="text-teal-400">ipotecare</span>.ro
                </p>
              </div>
              <p className="text-slate-400 text-sm leading-7">
                Broker de credite autorizat. Oferim consultanță personalizată și sprijin real pentru a transforma procesul bancar într-o experiență simplă.
              </p>
            </div>

            <div>
              <p className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em] text-teal-400">Link-uri utile</p>
              <ul className="space-y-4 text-sm text-slate-300 font-medium">
                <li><a href="#servicii" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Servicii</a></li>
                <li><a href="#proces" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Procesul nostru</a></li>
                <li><a href="#beneficii" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Beneficii</a></li>
              </ul>
            </div>

            <div>
              <p className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em] text-teal-400">Suport Legal</p>
              <ul className="space-y-4 text-sm text-slate-300 font-medium">
                <li><a href="/termeni" className="hover:text-white transition-colors">Termeni și Condiții</a></li>
                <li><a href="/confidentialitate" className="hover:text-white transition-colors">Politica de Confidențialitate</a></li>
                <li><a href="/cookies" className="hover:text-white transition-colors">Politica Cookies</a></li>
              </ul>
            </div>

            <div>
              <p className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em] text-teal-400">Protecția Consumatorului</p>
              <div className="flex flex-col gap-3">
                <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-md p-3 border-l-4 border-blue-600 transition-all hover:bg-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[14px] text-blue-900 font-black leading-none">ANPC</span>
                    <span className="text-[9px] text-slate-600 font-bold mt-1 leading-tight">Autoritatea Națională pentru Protecția Consumatorilor</span>
                  </div>
                </a>

                <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-md p-3 border-l-4 border-teal-600 transition-all hover:bg-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[12px] text-teal-900 font-black leading-none uppercase">SAL</span>
                    <span className="text-[9px] text-slate-600 font-bold mt-1 leading-tight">Soluționarea Alternativă a Litigiilor</span>
                  </div>
                </a>

                <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-md p-3 border-l-4 border-red-600 transition-all hover:bg-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[12px] text-red-900 font-black leading-none uppercase">SOL</span>
                    <span className="text-[9px] text-slate-600 font-bold mt-1 leading-tight">Soluționarea Online a Litigiilor</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-500 font-medium">
              © {new Date().getFullYear()} solutiiipotecare.ro. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-black italic">
              <ShieldCheck className="h-3 w-3 text-teal-500" />
              Intermedierea de credite este un serviciu gratuit pentru consumatori
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}