import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/forms/lead-form"
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

const services = [
  {
    title: "Credit ipotecar",
    description:
      "Pentru achiziția unei locuințe, cu analiză clară a opțiunilor și suport complet.",
    icon: House,
  },
  {
    title: "Refinanțare",
    description:
      "Pentru costuri mai bune, rată mai avantajoasă sau o structură mai potrivită a creditului.",
    icon: WalletCards,
  },
  {
    title: "Consultanță personalizată",
    description:
      "Primești recomandări clare, adaptate situației tale, nu răspunsuri generale.",
    icon: ShieldCheck,
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
      "Te putem orienta și către profesioniști utili în etapele conexe procesului.",
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
                      <span className="text-xs font-bold tracking-[0.2em] text-slate-400">
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
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-2xl font-black tracking-tight text-slate-900">
              solutiiipotecare.ro
            </p>
            <p className="text-xs text-slate-500">
              Broker de credite • sprijin real până la semnare
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#servicii" className="hover:text-slate-900">
              Servicii
            </a>
            <a href="#proces" className="hover:text-slate-900">
              Proces
            </a>
            <a href="#beneficii" className="hover:text-slate-900">
              Beneficii
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>

          <Button className="rounded-xl bg-[#0F766E] px-6 text-white hover:bg-[#0b5e58]">
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

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight md:text-6xl">
                Obții mai mult decât un credit.
              </h1>

              <div className="mt-3 inline-block rounded-2xl bg-[#0F172A] px-4 py-3 text-3xl font-black leading-tight text-white md:text-5xl">
                Primești claritate, sprijin și mai puține drumuri.
              </div>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Te consiliem până la semnarea contractului, te ajutăm cu
                documentele necesare și comparăm opțiuni relevante din piață ca
                să găsim soluția potrivită pentru tine.
              </p>

              <div className="mt-8 space-y-3">
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

              <div className="mt-10 flex flex-wrap gap-4">
                <Button className="rounded-xl bg-[#0F766E] px-7 py-6 text-base font-bold text-white hover:bg-[#0b5e58]">
                  Aplică online
                </Button>

                <Button
                  variant="outline"
                  className="rounded-xl border-slate-300 bg-white px-7 py-6 text-base font-bold text-slate-900 hover:bg-slate-50"
                >
                  Discută cu noi
                </Button>
              </div>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#0F172A] px-8 py-10 text-white md:px-10">
              <SectionLabel>De ce să rămâi pe site</SectionLabel>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl text-white">
                Nu doar comparăm.
                <br />
                Te ghidăm.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
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
          <div className="mb-12 max-w-2xl">
            <SectionLabel>Servicii</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
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

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0F766E]">
                    Află mai multe <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="proces" className="px-6 py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <SectionLabel>Procesul nostru</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Te consiliem până la semnarea contractului
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Aplici, discutăm, analizăm opțiunile, te ajutăm cu documentele și
              mergem până la finalizare. Accentul este pe pași clari și beneficii
              reale pentru tine.
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
                    <span className="text-4xl font-black text-slate-200">
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

          <div className="mt-8 rounded-[24px] border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
            Oferta finală poate varia în funcție de profilul financiar, venit,
            avans, istoricul de credit, documentație și condițiile practicate de
            bancă în momentul analizei.
          </div>
        </div>
      </section>

      <section id="beneficii" className="px-6 py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <SectionLabel>Beneficii reale</SectionLabel>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Sprijin real, nu doar promisiuni
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[34px] bg-gradient-to-br from-teal-800 to-slate-900 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
                Ce contează pentru tine
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight">
                Mai puțin stres.
                <br />
                Mai puține drumuri.
                <br />
                Mai multă claritate.
              </h3>

              <div className="mt-8 space-y-4">
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
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
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

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-gradient-to-br from-[#0F766E] to-[#0F172A] px-8 py-12 text-white md:px-12">
              <SectionLabel>Hai să discutăm</SectionLabel>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
                Spune-ne cu ce te putem ajuta
              </h2>

              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200">
                Completează formularul și revenim cât mai curând cu pașii următori,
                opțiunile potrivite și explicațiile de care ai nevoie.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Răspuns rapid la cerere",
                  "Claritate asupra pașilor următori",
                  "Sprijin până la semnarea contractului",
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

            <div className="px-8 py-10 md:px-12">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}