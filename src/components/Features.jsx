import React from 'react'
import {
  Columns3,
  Bell,
  ChartPie,
  FileText,
  CalendarDays,
  LockKeyhole
} from 'lucide-react'

function Features() {
  const features = [
    {
      icon: <Columns3 size={23} />,
      title: "Visual application pipeline",
      desc: "See every opportunity at a glance. Organize applications by stage, from saved roles to interviews and offers.",
      color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400"
    },
    {
      icon: <Bell size={23} />,
      title: "Timely follow-up reminders",
      desc: "Set reminders for recruiter check-ins, interviews, and application deadlines so important dates don't slip by.",
      color: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
    },
    {
      icon: <ChartPie size={23} />,
      title: "Job search insights",
      desc: "Understand your application activity, interview rate, and progress with clear, simple analytics.",
      color: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-400"
    },
    {
      icon: <FileText size={23} />,
      title: "Notes for every opportunity",
      desc: "Save role details, recruiter contacts, interview notes, and questions in the right place.",
      color: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400"
    },
    {
      icon: <CalendarDays size={23} />,
      title: "Interview calendar",
      desc: "Keep upcoming interviews and important milestones visible with a dedicated schedule.",
      color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
    },
    {
      icon: <LockKeyhole size={23} />,
      title: "Your search, your space",
      desc: "Keep your job search information organized in one personal workspace that you can access anytime.",
      color: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-400"
    }
  ]

  return (
    <section id="features" className="bg-[#f8faff] py-24 sm:py-28 h-215 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative top-25">
        <div className="mx-auto mb-14 max-w-2xl text-center relative left-50">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400"
          >Everything in one place</p>
          <p style={{ marginTop: "15px" }} className="mt-4 font-display font-bold tracking-tight text-slate-950
           dark:text-white sm:text-3xl">A calmer, smarter way to job hunt</p>
          <p style={{ marginTop: "15px" }} className="mt-4 text-l leading-7 text-slate-600 dark:text-slate-400"
          >Replace scattered spreadsheets and forgotten follow-ups with a workspace designed around your next opportunity.</p>
        </div>

        <div className="relative top-18 left-6 grid grid-cols-1 gap-x-1 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} style={{ padding: "23px" }} className="group h-55 w-75 rounded-3xl border border-slate-200
             bg-white dark:border-slate-700 dark:bg-slate-900 transition-all duration-300 ease-out hover:-translate-y-2
              hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-[0_22px_55px_rgba(30,41,59,0.10)] 
              dark:hover:shadow-[0_22px_55px_rgba(0,0,0,0.35)]">
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color}
               transition-transform duration-300 group-hover:scale-110`}>{feature.icon}</div>
              <h3 style={{ marginTop: "15px" }} className="font-display text-l font-bold text-slate-900
               dark:text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
