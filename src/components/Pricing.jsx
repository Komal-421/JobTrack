import React from 'react'
import { Check } from 'lucide-react'

function Pricing() {

  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/ forever",
      description: "A simple home for your job search.",
      features: [
        "Up to 30 active applications",
        "Visual application pipeline",
        "Basic follow-up reminders",
        "Notes for each application"
      ],
      button: "Get started free",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "/ month",
      description: "More insight and flexibility for an active search.",
      features: [
        "Unlimited active applications",
        "Advanced search analytics",
        "Unlimited notes and reminders",
        "Interview preparation workspace"
      ],
      button: "Try Pro",
      popular: true
    }
  ]

  return (
    <section id="pricing" className="bg-[#f8faff] py-24 sm:py-28 h-170">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative top-20">
        <div className="mx-auto mb-14 max-w-2xl text-center relative left-40">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Straightforward pricing</p>
          <p style={{ marginTop: "12px" }} className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 
          sm:text-3xl">Start free. Upgrade when you're ready.</p>
          <p style={{ marginTop: "12px" }} className="mt-4 leading-7 text-slate-600">All the essentials to organize your search,
            with more power when you need it.</p>
        </div>

        <div style={{ margin: "40px 0 0 100px", padding: "0 55px" }} className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">

          {plans.map((plan, index) => (
            <div key={index} style={{ padding: "40px" }} className={`relative flex flex-col rounded-3xl p-8 dark:bg-slate-900
             dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 h-95 ${plan.popular ? "border-2 border-indigo-600 bg-indigo-50 shadow-2xl shadow-indigo-600/10 dark:bg-indigo-950/30" : "border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`}>
              {plan.popular && (<span style={{ paddingLeft: "10px" }} className="absolute -top-3 right-7 rounded-full bg-indigo-600 px-4 py-1 
              text-xs font-bold text-white w-29 h-5">MOST POPULAR</span>)}

              <span className={`text-sm font-bold ${plan.popular ? "text-indigo-700 dark:text-indigo-200" : "text-slate-500"}`}>{plan.name}</span>

              <div style={{ marginTop: "10px" }} className="mt-4 font-display dark:bg-slate-900 dark:border-slate-700 text-5xl font-bold text-slate-900 dark:text-white">{plan.price}<span className="text-base font-medium text-slate-400">{" "}{plan.period}</span></div>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{plan.description}</p>

              <div style={{ marginTop: "20px" }} className="my-8 flex flex-1 flex-col gap-5">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <Check size={17} strokeWidth={3} className="shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button style={{ marginTop: "15px" }} className={`w-full rounded-xl h-10 py-3 text-sm font-bold transition-all duration-300 ${plan.popular ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 hover:-translate-y-0.5 hover:bg-indigo-700" : "border border-slate-300 text-slate-800 hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-white"}`}>{plan.button}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
