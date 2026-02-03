import { useState, useEffect } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          <Leaf className="logo-icon" size={28} />
          יערית
        </a>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul>
            <li><a href="#about">אודות</a></li>
            <li><a href="#cbt">מה זה CBT?</a></li>
            <li><a href="#target-audience">למי זה מתאים?</a></li>
            <li><a href="#contact" className="btn btn-sm">צור קשר</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div 
                className="mobile-nav-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />
              <motion.nav 
                className="mobile-nav"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <ul className="mobile-nav-list">
                  <li><a href="#about" onClick={closeMenu}>אודות</a></li>
                  <li><a href="#cbt" onClick={closeMenu}>מה זה CBT?</a></li>
                  <li><a href="#target-audience" onClick={closeMenu}>למי זה מתאים?</a></li>
                  <li><a href="#contact" className="btn btn-mobile" onClick={closeMenu}>צור קשר</a></li>
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
