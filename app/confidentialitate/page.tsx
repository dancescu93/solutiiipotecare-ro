export default function ConfidentialitatePage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 prose prose-slate">
      <h1 className="text-3xl font-black mb-8">Politică de Confidențialitate (GDPR)</h1>
      <p className="text-slate-600">Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>

      <section className="mt-8 space-y-6 text-slate-700 leading-7">
        <h2 className="text-xl font-bold text-slate-900">1. Datele Colectate</h2>
        <p>Colectăm prin formularul de contact: Numele, Adresa de e-mail și Numărul de telefon.</p>

        <h2 className="text-xl font-bold text-slate-900">2. Scopul Prelucrării</h2>
        <p>Datele sunt folosite exclusiv pentru a vă contacta în vederea oferirii serviciilor de consultanță financiară solicitate.</p>

        <h2 className="text-xl font-bold text-slate-900">3. Stocarea Datelor</h2>
        <p>Nu vindem datele dumneavoastră către terțe părți. Datele sunt transmise băncilor partenere doar cu acordul dumneavoastră explicit, după discuția telefonică.</p>

        <h2 className="text-xl font-bold text-slate-900">4. Drepturile Dumneavoastră</h2>
        <p>Aveți dreptul de a solicita ștergerea datelor (dreptul de a fi uitat) contactându-ne direct la adresa de contact din site.</p>
      </section>
      <div className="mt-12">
        <a href="/" className="text-[#0F766E] font-bold">← Înapoi la pagina principală</a>
      </div>
    </main>
  )
}