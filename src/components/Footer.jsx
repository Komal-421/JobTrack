
import React from 'react'
import { Briefcase, Mail, Phone, MapPin } from 'lucide-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faGithub,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="min-h-[320px] bg-white text-slate-600 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-300">

      <div className="relative top-0 lg:top-16 mx-auto max-w-7xl px-5 sm:px-6 py-12 sm:py-16 lg:px-8">

        <div style={{ padding: "0 50px" }} className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          <div className="lg:col-span-2">

            <a href="#" className="mb-5 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Briefcase size={23} />
              </div>

              <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Job
                <span className="text-indigo-600 dark:text-indigo-400">Track</span>
              </span>
            </a>

            <p style={{ fontSize: "12px" }} className="mb-6 w-full max-w-sm leading-7 text-slate-500 dark:text-slate-400">
              Simplify your job search journey. Organize applications, track progress, and stay one step closer to your dream career.
            </p>

            <div className="mt-5 flex items-center gap-4">

              <a
                style={{ fontSize: "12px" }}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:text-white dark:bg-white/10 dark:text-slate-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              <a
                style={{ fontSize: "12px" }}
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:text-white dark:bg-white/10 dark:text-slate-300"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                style={{ fontSize: "12px" }}
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:text-white dark:bg-white/10 dark:text-slate-300"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

            </div>
          </div>

          <div>
            <h3 className="mb-6 text-base font-semibold text-slate-900 dark:text-white">
              Product
            </h3>

            <ul className="space-y-4 text-sm">
              <li><a href="#features" style={{ fontSize: "12px" }} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Features</a></li>
              <li><a href="#how-it-works" style={{ fontSize: "12px" }} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">How It Works</a></li>
              <li><a href="#pricing" style={{ fontSize: "12px" }} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Pricing</a></li>
              <li><a href="#faq" style={{ fontSize: "12px" }} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-base font-semibold text-slate-900 dark:text-white">
              Explore
            </h3>

            <ul className="space-y-4 text-sm">
              <li><a href="#about" style={{ fontSize: "12px" }} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">About Us</a></li>
              <li><a href="#testimonials" style={{ fontSize: "12px" }} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Testimonials</a></li>
              <li><a href="#contact" style={{ fontSize: "12px" }} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
              <li><a href="#get-started" style={{ fontSize: "12px" }} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Get Started</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-base font-semibold text-slate-900 dark:text-white">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="mt-3 flex items-center gap-3">
                <Mail size={17} className="shrink-0 text-indigo-600 dark:text-indigo-400" />
                <a href="mailto:support@jobtrack.com" style={{ fontSize: "12px" }} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                  support@jobtrack.com
                </a>
              </li>

              <li className="mt-3 flex items-center gap-3">
                <Phone size={17} className="shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span style={{ fontSize: "12px" }}>+91 98765 43210</span>
              </li>

              <li className="mt-3 flex items-center gap-3">
                <MapPin size={17} className="shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span style={{ fontSize: "12px" }}>India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="relative top-0 lg:top-7 mt-12 sm:mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 text-center transition-colors duration-300 dark:border-white/10 sm:flex-row sm:text-left">

          <p style={{ fontSize: "12px", margin: "20px" }} className="text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} JobTrack. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-slate-500 dark:text-slate-500">
            <a style={{ fontSize: "12px", margin: "20px" }} href="#privacy" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
              Privacy Policy
            </a>

            <a style={{ fontSize: "12px", margin: "20px" }} href="#terms" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
