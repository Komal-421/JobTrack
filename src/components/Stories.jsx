import React from 'react'

function Stories() {

  const testimonials = [
    {
      quote: "I finally have one place for every role I've applied to and every follow-up I need to send.",
      name: "Aarohi M.",
      role: "Recent graduate",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "The reminders help me stay on top of interviews and recruiter conversations without the stress.",
      name: "Rohan K.",
      role: "Software developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Seeing my progress clearly makes the whole job search feel more manageable.",
      name: "Maya S.",
      role: "Product designer",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80"
    }
  ]

  return (
    <section id="stories" className="bg-[#24205b] py-24 text-white sm:py-28 h-140 transition-colors duration-500 dark:bg-[#171440]">
      <div className="relative top-20 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative left-45 mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200 dark:text-indigo-300">Made for the journey</p>
          <p style={{ marginTop: "12px" }} className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">A little more clarity goes a long way.</p>
          <p style={{ marginTop: "12px" }} className="mt-4 text-sm leading-7 text-indigo-100/75 dark:text-indigo-200/80">A sample of the difference an organized job search can make.</p>
        </div>

        <div style={{ marginTop: "40px", padding: "0 41px" }} className="grid h-60 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={index} style={{ padding: "30px" }} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-2 hover:border-indigo-300/40 hover:bg-white/10 hover:shadow-xl hover:shadow-black/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-indigo-300/50 dark:hover:bg-white/[0.08]">
              <div className="mb-5 flex gap-1 text-xl text-amber-300">
                {[1, 2, 3, 4, 5].map((star) => <span key={star}>★</span>)}
              </div>
              <p className="text-sm leading-7 text-indigo-50 dark:text-slate-200">“{item.quote}”</p>
              <div className="relative top-6 mt-7 flex items-center gap-3">
                <img src={item.image} alt={item.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-white/10" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-white">{item.name}</span>
                  <span className="text-xs text-indigo-200 dark:text-indigo-300">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stories
