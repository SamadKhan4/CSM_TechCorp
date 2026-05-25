/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import BlogPage from './Pages/BlogPage'
import CareerPage from './Pages/CareerPage'
import ContactUs from './Pages/ContactUs'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
import Services from './Pages/Services/Services'
import Erp from './Pages/Services/Erp'
import Website from './Pages/Services/Website'
import Mobile from './Pages/Services/Mobile'
import Digital from './Pages/Services/Digital'

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/services': Services,
  '/services/erp': Erp,
  '/services/website': Website,
  '/services/mobile': Mobile,
  '/services/digital': Digital,
  '/blog': BlogPage,
  '/career': CareerPage,
  '/contact': ContactUs,
  '/privacy': Privacy,
  '/terms': Terms,
}

const getCurrentPath = () => {
  const path = window.location.pathname
  return routes[path] ? path : '/'
}

const App = () => {
  const [activePath, setActivePath] = useState(getCurrentPath)

  useEffect(() => {
    const handlePopState = () => setActivePath(getCurrentPath())
    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (path) => {
    if (!routes[path]) return

    window.history.pushState({}, '', path)
    setActivePath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const ActivePage = useMemo(() => routes[activePath] || HomePage, [activePath])

  return (
    <>
      <Navbar activePath={activePath} onNavigate={navigateTo} />
      <ActivePage onNavigate={navigateTo} />
      <Footer onNavigate={navigateTo} />
    </>
  )
}

export default App
