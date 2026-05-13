"use client"

import { useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

function formatCurrency(value: number) {
  return new Intl.NumberFormat("ro-RO", {
    maximumFractionDigits: 0,
  }).format(value)
}

export function MortgageCalculator() {
  const [amount, setAmount] = useState(300000)
  const [advance, setAdvance] = useState(60000)
  const [interest, setInterest] = useState(6)
  const [years, setYears] = useState(30)

  const loanData = useMemo(() => {
    const principal = Math.max(amount - advance, 0)
    const monthlyInterest = interest / 100 / 12
    const numberOfPayments = years * 12

    if (!principal || !monthlyInterest || !numberOfPayments) {
      return {
        principal: 0,
        monthlyPayment: 0,
        totalPayment: 0,
        totalCost: 0,
      }
    }

    const monthlyPayment =
      (principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, numberOfPayments)) /
      (Math.pow(1 + monthlyInterest, numberOfPayments) - 1)

    const totalPayment = monthlyPayment * numberOfPayments
    const totalCost = totalPayment - principal

    return {
      principal,
      monthlyPayment,
      totalPayment,
      totalCost,
    }
  }, [amount, advance, interest, years])

  return (
    <Card className="rounded-3xl border-0 bg-white shadow-2xl">
      <CardContent className="p-6 md:p-8">
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-slate-500">
            Simulator estimativ
          </p>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Calculator credit ipotecar
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Valorile sunt orientative. Pentru oferta exactă, trimite cererea ta.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <Label htmlFor="amount">Preț imobil (RON)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
            />
          </div>

          <div>
            <Label htmlFor="advance">Avans (RON)</Label>
            <Input
              id="advance"
              type="number"
              value={advance}
              onChange={(e) => setAdvance(Number(e.target.value) || 0)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="interest">Dobândă (%)</Label>
              <Input
                id="interest"
                type="number"
                step="0.1"
                value={interest}
                onChange={(e) => setInterest(Number(e.target.value) || 0)}
              />
            </div>

            <div>
              <Label htmlFor="years">Perioadă (ani)</Label>
              <Input
                id="years"
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value) || 0)}
              />
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <p className="text-sm text-slate-300">Sumă finanțată</p>
            <p className="mt-1 text-2xl font-bold">
              {formatCurrency(loanData.principal)} RON
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-slate-300">Rată lunară</p>
                <p className="text-xl font-semibold">
                  {formatCurrency(loanData.monthlyPayment)} RON
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-300">Total de plată</p>
                <p className="text-xl font-semibold">
                  {formatCurrency(loanData.totalPayment)} RON
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-300">Cost estimat credit</p>
                <p className="text-xl font-semibold">
                  {formatCurrency(loanData.totalCost)} RON
                </p>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full rounded-xl">
            Vreau ofertă personalizată
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}