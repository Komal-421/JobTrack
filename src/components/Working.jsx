
import React from 'react'

function Working() {
    return (
        <section
            id="working"
            className="h-auto lg:h-160 bg-white py-16 sm:py-20 lg:py-28 transition-colors duration-500 dark:bg-slate-900"
        >
            <div
                style={{ paddingRight: "20px" }}
                className="relative top-0 lg:top-20 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:px-8"
            >
                <div className="group mx-auto w-full max-w-xl overflow-hidden rounded-3xl lg:mx-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                        alt="Professionals collaborating around a laptop"
                        className="relative left-0 lg:left-10 h-auto w-full rounded-3xl object-cover shadow-xl transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[420px]"
                    />
                </div>

                <div className="flex flex-col">

                    <span
                        style={{ marginBottom: "25px" }}
                        className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400"
                    >
                        Simple from day one
                    </span>

                    <p
                        style={{ marginBottom: "15px" }}
                        className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white"
                    >
                        From application to offer, one step at a time.
                    </p>

                    <p
                        style={{ marginBottom: "25px" }}
                        className="mt-4 text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-400"
                    >
                        JobTrack gives your job search a simple structure, so you always know what needs attention next.
                    </p>

                    <div className="mt-7 sm:mt-9 flex flex-col gap-6 sm:gap-7">

                        <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 font-display font-bold text-white">
                                01
                            </span>

                            <div>
                                <h3 className="font-display font-bold text-slate-900 dark:text-white">
                                    Add opportunities
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                    Save a job, company, role, link, and application date.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 font-display font-bold text-white">
                                02
                            </span>

                            <div>
                                <h3 className="font-display font-bold text-slate-900 dark:text-white">
                                    Track every update
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                    Update application stages, add notes, and set follow-up reminders.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 font-display font-bold text-white">
                                03
                            </span>

                            <div>
                                <h3 className="font-display font-bold text-slate-900 dark:text-white">
                                    Prepare for what's next
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                    Review your pipeline and focus on the next action that moves you forward.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Working
