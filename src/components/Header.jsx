
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {

    const [darkMode, setDarkMode] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const navLinks = [
        ["Home", "/#"],
        ["Features", "/#features"],
        ["How It Works", "/#working"],
        ["Stories", "/#stories"],
        ["Pricing", "/#pricing"],
        ["Contact", "/#contact"]
    ]

    return (
        <header className="fixed top-0 left-0 z-50 w-full cursor-pointer border-b border-slate-100 bg-white text-slate-900 shadow-sm transition-colors duration-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">

            <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">

                <div className="ml-0 lg:ml-1 flex items-center gap-2 sm:gap-3">
                    <img
                        src="/briefcase_icon.png"
                        className="h-9 w-9 sm:h-12 sm:w-12 rounded-xl lg:ml-[35px]"
                        alt="JobTrack"
                    />

                    <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        Job
                        <span className="text-indigo-600 dark:text-indigo-400">Track</span>
                    </span>
                </div>

                <nav className="relative -right-20 hidden items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300 lg:flex">
                    {navLinks.map(([name, link]) => (
                        <a
                            key={name}
                            href={link}
                            className="relative transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full dark:after:bg-indigo-400"
                        >
                            {name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3 lg:gap-0">

                    <button
                        onClick={() => setDarkMode(prev => !prev)}
                        aria-label="Toggle theme"
                        className="relative lg:-right-38 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                    >
                        <img
                            src={darkMode ? "/sun.png" : "/moon.png"}
                            alt=""
                            className="h-5 w-5"
                        />
                    </button>

                    <button
                        className="hidden lg:block relative -right-42 h-11 w-30 rounded-xl bg-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                    >
                        Get Started →
                    </button>

                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        className="flex lg:hidden h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>

                </div>
            </div>

            {menuOpen && (
                <div className="absolute left-0 top-full w-full border-t border-slate-100 bg-white px-5 py-5 shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:hidden">

                    <nav className="flex flex-col gap-1">
                        {navLinks.map(([name, link]) => (
                            <a
                                key={name}
                                href={link}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                            >
                                {name}
                            </a>
                        ))}
                    </nav>

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-indigo-700 dark:bg-indigo-500"
                    >
                        Get Started →
                    </button>

                </div>
            )}

        </header>
    )
}

export default Header
