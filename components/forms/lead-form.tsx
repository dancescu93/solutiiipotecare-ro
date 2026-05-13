"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/src/lib/supabase/client"

const serviceOptions = [
  "credit ipotecar",
  "refinantare",
  "credit nevoi personale",
  "consultanta personalizata",
]

const sourceOptions = [
  "Instagram",
  "TikTok",
  "Facebook",
  "Google",
  "Recomandare",
  "Influencer / creator",
  "Altă sursă",
]

type FormState = {
  fullName: string
  phone: string
  email: string
  serviceType: string
  referralSource: string
  referralDetails: string
  message: string
  gdprAccepted: boolean
}

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  serviceType: "credit ipotecar",
  referralSource: "Instagram",
  referralDetails: "",
  message: "",
  gdprAccepted: false,
}

function cleanPhone(value: string) {
  return value.replace(/[^\d+]/g, "")
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const needsReferralDetails = useMemo(
    () =>
      form.referralSource === "Influencer / creator" ||
      form.referralSource === "Altă sursă",
    [form.referralSource]
  )

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setSuccessMessage("")
    setErrorMessage("")

    const trimmedName = form.fullName.trim()
    const trimmedPhone = cleanPhone(form.phone.trim())
    const trimmedEmail = form.email.trim()
    const trimmedMessage = form.message.trim()
    const trimmedReferralDetails = form.referralDetails.trim()

    if (!trimmedName || !trimmedPhone) {
      setErrorMessage("Te rog completează numele și telefonul.")
      setLoading(false)
      return
    }

    if (needsReferralDetails && !trimmedReferralDetails) {
      setErrorMessage("Te rog completează detaliile despre sursă.")
      setLoading(false)
      return
    }

    if (!form.gdprAccepted) {
      setErrorMessage("Trebuie să accepți termenii și politica de confidențialitate.")
      setLoading(false)
      return
    }

    const { error } = await supabase.from("leads").insert([
      {
        full_name: trimmedName,
        phone: trimmedPhone,
        email: trimmedEmail || null,
        service_type: form.serviceType,
        message: trimmedMessage || null,
        referral_source: form.referralSource,
        referral_details: needsReferralDetails ? trimmedReferralDetails : null,
      },
    ])

    setLoading(false)

    if (error) {
      setErrorMessage("A apărut o problemă la trimitere. Te rog încearcă din nou.")
      return
    }

    setSuccessMessage("Cererea a fost trimisă cu succes. Revenim cât mai curând.")
    setForm(initialState)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
    >
      <div className="mb-2">
        <h3 className="text-2xl font-black text-slate-900">
          Solicită o analiză gratuită
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Durează aproximativ 60 de secunde. Fără obligații.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">
            Nume complet *
          </label>
          <input
            id="fullName"
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            required
            placeholder="Numele tău"
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#0F766E] focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
            Telefon *
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            required
            placeholder="07xx xxx xxx"
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#0F766E] focus:bg-white"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="adresa@exemplu.ro"
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#0F766E] focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="serviceType" className="mb-2 block text-sm font-semibold text-slate-700">
            Ce tip de serviciu te interesează?
          </label>
          <select
            id="serviceType"
            value={form.serviceType}
            onChange={(e) => updateField("serviceType", e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#0F766E] focus:bg-white"
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="referralSource" className="mb-2 block text-sm font-semibold text-slate-700">
            De unde ai auzit de noi?
          </label>
          <select
            id="referralSource"
            value={form.referralSource}
            onChange={(e) => updateField("referralSource", e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#0F766E] focus:bg-white"
          >
            {sourceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="referralDetails" className="mb-2 block text-sm font-semibold text-slate-700">
            {form.referralSource === "Influencer / creator"
              ? "Numele persoanei / paginii *"
              : form.referralSource === "Altă sursă"
              ? "Spune-ne sursa *"
              : "Detalii suplimentare despre sursă"}
          </label>
          <input
            id="referralDetails"
            value={form.referralDetails}
            onChange={(e) => updateField("referralDetails", e.target.value)}
            placeholder={
              form.referralSource === "Influencer / creator"
                ? "Ex: numele creatorului sau paginii"
                : form.referralSource === "Altă sursă"
                ? "Spune-ne de unde ai auzit de noi"
                : "Opțional"
            }
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#0F766E] focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
          Cu ce te putem ajuta?
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          rows={5}
          placeholder="Spune-ne pe scurt ce îți dorești: achiziție locuință, refinanțare, sumă estimată, avans, termen etc."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#0F766E] focus:bg-white"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        <input
          type="checkbox"
          checked={form.gdprAccepted}
          onChange={(e) => updateField("gdprAccepted", e.target.checked)}
          required
          className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#0F766E]"
        />

        <span>
          Sunt de acord cu prelucrarea datelor mele pentru a fi contactat în legătură
          cu solicitarea transmisă și confirm că am citit{" "}
          <a href="/termeni" className="font-bold text-[#0F766E] hover:underline">
            Termenii și Condițiile
          </a>{" "}
          și{" "}
          <a href="/gdpr" className="font-bold text-[#0F766E] hover:underline">
            Politica de Confidențialitate
          </a>.
        </span>
      </label>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        Datele tale sunt folosite doar pentru a te contacta în legătură cu
        cererea transmisă.
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-xl bg-[#0F766E] text-white hover:bg-[#0b5e58]"
      >
        {loading ? "Se trimite..." : "Trimite cererea"}
      </Button>

      {successMessage ? (
        <p className="text-sm font-semibold text-emerald-700">{successMessage}</p>
      ) : null}

      {errorMessage ? (
        <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
      ) : null}
    </form>
  )
}