import React from 'react'

function Hero() {
    return (
        <section className="relative h-160 bg-[#f8faff] bg-[radial-gradient
        (ellipse_at_55%_40%,_#e1e5ff_0%,_#f0f3ff_48%,_#f8fbff_100%)] px-5 pb-20 pt-32 transition-colors duration-500 
        dark:bg-none dark:bg-slate-950">
            <div className="relative top-20 left-10 mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-12 lg:px-8">
                <div className="w-full text-center lg:text-left">
                    <div className="relative bottom-8 mb-6 inline-flex h-8 w-80 items-center gap-2 rounded-full border
                     border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold text-indigo-700 transition-colors 
                     duration-300 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
                        <span className="relative left-4 h-2 w-2 rounded-full bg-emerald-500"></span>
                        <span className="relative left-4 text-sm">YOUR JOB SEARCH, FINALLY ORGANIZED</span>
                    </div>

                    <p className="text-4xl font-bold leading-tight tracking-tight text-slate-900 transition-colors 
                    duration-300 dark:text-white sm:text-5xl lg:text-6xl">Make your next career move with 
                    
                    <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-sky-400 bg-clip-text text-transparent">
                        {" "}confidence.</span></p>
                    <p style={{ marginTop: "35px" }} className="mx-auto mt-6 max-w-xl leading-8
                     text-slate-600 transition-colors duration-300 dark:text-slate-300 lg:mx-0">Keep every application, interview, contact, and follow-up in one clear workspace. Spend less time staying organized and more time preparing for the opportunity.</p>

                    <div style={{ marginTop: "30px" }} className="mt-8 flex flex-col justify-center gap-4 
                    sm:flex-row lg:justify-start">
                        <button className="h-14 w-54 rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white shadow-md
                         transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 dark:bg-indigo-500
                          dark:hover:bg-indigo-400">Start tracking for free →</button>
                        <button className="h-14 w-54 rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold
                         text-slate-700 transition-all duration-300 hover:border-indigo-400 hover:text-indigo-600
                          dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-400
                           dark:hover:text-indigo-400">See how it works</button>
                    </div>

                    <div style={{ marginTop: "25px" }} className="mt-8 flex flex-wrap justify-center gap-x-20 gap-y-3
                     text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400 lg:justify-start">
                        <span><span className="mr-2 text-emerald-500">✓</span> Free plan available</span>
                        <span><span className="mr-2 text-emerald-500">✓</span> No credit card required</span>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-lg">
                    <img src="/hero_right.png" alt="JobTrack dashboard preview" className="float-animation ml-10 block h-110
                     w-100 object-contain" />
                </div>
            </div>

            <section style={{ padding: "15px 0 10px 0" }} className="relative top-30 h-23 border-y border-slate-200
             bg-white px-5 py-12 transition-colors duration-500 dark:border-slate-800 dark:bg-slate-900">
                <div className="mx-auto max-w-6xl">
                    <p style={{ padding: "10px", fontSize: "13px" }} className="mb-5 text-center font-bold tracking-[0.2em]
                     text-slate-400 dark:text-slate-500">BUILT FOR EVERY STEP OF YOUR JOB SEARCH</p>

                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                        <div style={{ fontSize: "14px" }} className="flex items-center gap-3 text-lg font-bold
                         text-slate-400 dark:text-slate-500"><span>💻</span> TECH</div>
                        <div style={{ fontSize: "14px" }} className="flex items-center gap-3 text-lg font-bold
                         text-slate-400 dark:text-slate-500"><span>🎨</span> DESIGN</div>
                        <div style={{ fontSize: "14px" }} className="flex items-center gap-3 text-lg font-bold
                         text-slate-400 dark:text-slate-500"><span>📈</span> BUSINESS</div>
                        <div style={{ fontSize: "14px" }} className="flex items-center gap-3 text-lg font-bold
                         text-slate-400 dark:text-slate-500"><span>🧪</span> RESEARCH</div>
                        <div style={{ fontSize: "14px" }} className="flex items-center gap-3 text-lg font-bold
                         text-slate-400 dark:text-slate-500"><span>🎓</span> GRADUATES</div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Hero
