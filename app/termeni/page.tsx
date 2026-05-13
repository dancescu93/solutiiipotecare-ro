export default function TermeniPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 prose prose-slate">
      <h1 className="text-3xl font-black mb-8">Termeni și Condiții</h1>
      <p className="text-slate-600">Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>
      
      <section className="mt-8 space-y-6 text-slate-700 leading-7">
        <h2 className="text-xl font-bold text-slate-900">1. Servicii Oferite</h2>
        <p>Solutiiipotecare.ro oferă servicii de consultanță și intermediere credite. Nu suntem o instituție bancară, ci facilităm legătura dintre clienți și bănci.</p>
        
        <h2 className="text-xl font-bold text-slate-900">2. Gratuitatea Serviciilor</h2>
        <p>Serviciile noastre de consultanță sunt gratuite pentru clienți, fiind remunerați direct de către instituțiile bancare partenere.</p>
        
        <h2 className="text-xl font-bold text-slate-900">3. Limitarea Răspunderii</h2>
        <p>Decizia finală de acordare a creditului aparține exclusiv băncii. Solutiiipotecare.ro nu garantează aprobarea dosarului de credit.</p>
      </section>
      <div className="mt-12">
        <a href="/" className="text-[#0F766E] font-bold">← Înapoi la pagina principală</a>
      </div>
    </main>
  )
}