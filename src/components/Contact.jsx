
import React from 'react'
import { ArrowRight } from 'lucide-react'

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f8faff] px-4 sm:px-5 py-14 sm:py-20 transition-colors duration-300 dark:bg-slate-950"
    >
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-700 to-violet-700 px-5 sm:px-14 py-12 sm:py-20 text-center text-white shadow-2xl shadow-indigo-900/20 transition-all duration-300 h-auto lg:h-96"
      >
        <div className="relative mx-auto max-w-3xl top-0 left-0 lg:top-16 lg:left-35">
          <span className="inline-flex min-h-7 w-auto max-w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
            Your next chapter starts here
          </span>

          <p
            style={{ marginTop: "18px" }}
            className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight"
          >
            Ready to make your job search feel manageable?
          </p>

          <p
            style={{ marginTop: "18px" }}
            className="mx-auto mt-5 max-w-3xl text-sm sm:text-base lg:text-sm text-indigo-100 leading-7"
          >
            Bring your opportunities, plans, and next steps together.
            Start building a more organized search today.
          </p>

          <div
            style={{ marginTop: "20px" }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#"
              className="inline-flex h-12 w-full sm:w-58 items-center justify-center rounded-xl bg-white px-5 sm:px-7 py-4 font-bold text-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50 hover:shadow-xl"
            >
              Create your free account
              <ArrowRight
                size={20}
                className="ml-3 shrink-0 transition-transform duration-300"
              />
            </a>

            <a
              href="mailto:hello@jobtrack.example"
              className="inline-flex h-12 w-full sm:w-58 items-center justify-center rounded-xl border border-white/30 px-5 sm:px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Contact our team
            </a>
          </div>

          <p
            style={{ marginTop: "20px" }}
            className="mt-5 text-xs sm:text-sm text-indigo-100/80"
          >
            Questions? hello@jobtrack.example
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
