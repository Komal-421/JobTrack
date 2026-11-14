
import React from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Features from './Features.jsx'
import Working from './Working.jsx'
import Stories from './Stories.jsx'
import Pricing from './Pricing.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f8faff] text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <Hero />
      <Features />
      <Working />
      <Stories />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
