import React, { useState, useEffect } from 'react'

function Header() {

    const [darkMode, setDarkMode] = useState()

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <header className=" fixed top-0 left-0 z-50 w-full cursor-pointer border-b border-slate-100 bg-white text-slate-900 shadow-sm transition-colors duration-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <div className="mx-auto flex h-20 max-w-7xl items-center px-5 lg:px-8">
                <div className="ml-1 flex items-center gap-3">
                    <img src="/briefcase_icon.png" className="h-12 w-12 rounded-xl" alt="JobTrack" style={{ marginLeft: "35px" }} />
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">Job
                        <span className="text-indigo-600 dark:text-indigo-400">Track</span></span>
                </div>

                <nav className="relative -right-20 hidden items-center gap-7 text-sm font-semibold text-slate-600
                 dark:text-slate-300 lg:flex">
                    {
                        [
                            ["Home", "/#"],
                            ["Features", "/#features"],
                            ["How It Works", "/#working"],
                            ["Stories", "/#stories"],
                            ["Pricing", "/#pricing"],
                            ["Contact", "/#contact"]
                        ].map(([name, link]) => (
                            <a key={name} href={link} className="relative transition-colors duration-200 
                        hover:text-indigo-600 dark:hover:text-indigo-400 after:absolute after:-bottom-2
                         after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full
                          dark:after:bg-indigo-400">{name}</a>
                        ))}
                </nav>

                <button onClick={() => setDarkMode(prev => !prev)} aria-label="Toggle theme"
                    className="relative -right-38 flex h-10 w-10 items-center justify-center rounded-xl border
                 border-slate-200 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600
                  dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400">
                    <img src={darkMode ? "/sun.png" : "/moon.png"} alt="" className="h-5 w-5" /></button>

                <button className="relative -right-42 h-11 w-30 rounded-xl bg-indigo-600 px-7 py-3 
                text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700
                 dark:bg-indigo-500 dark:hover:bg-indigo-400">Get Started →</button>
            </div>
        </header>
    )
}

export default Header
