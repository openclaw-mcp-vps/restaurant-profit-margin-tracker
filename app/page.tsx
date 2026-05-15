export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Restaurant Owners
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Know Your Real Profit on{' '}
          <span className="text-[#58a6ff]">Every Dish</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your POS (Square, Toast, Clover) and inventory system. Get live profit margins per menu item — after ingredient costs, labor, and waste.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $17/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: 'Real-time', label: 'Margin updates as orders come in' },
            { stat: '3 POS', label: 'Square, Toast & Clover supported' },
            { stat: 'Waste tracked', label: 'Spoilage factored into every margin' }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">All-Inclusive Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited menu items tracked',
              'POS webhook sync (Square, Toast, Clover)',
              'Ingredient & labor cost breakdown',
              'Waste factor adjustments',
              'Margin alerts & weekly reports',
              'CSV export'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: 'Which POS systems are supported?',
              a: 'We currently support Square, Toast, and Clover via webhook integrations. More POS systems are on the roadmap.'
            },
            {
              q: 'How is labor cost calculated per dish?',
              a: 'You set your kitchen labor rate and average prep time per item. We allocate labor cost proportionally based on actual orders processed.'
            },
            {
              q: 'Can I track waste and spoilage?',
              a: 'Yes. You can set a waste percentage per ingredient or per dish. This is factored into every margin calculation automatically.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Restaurant Profit Margin Tracker. All rights reserved.
      </footer>
    </main>
  )
}
