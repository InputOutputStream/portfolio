import { useEffect, useState, useRef } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const tickingRef = useRef(false)

    useEffect(() => {
        // Hysteresis band (enter at 24px, leave at 8px) instead of a single
        // threshold. A single `scrollY > 10` toggle flips back and forth on
        // every tiny scroll jitter right at the boundary (trackpad momentum,
        // mobile rubber-banding), which is what read as a "small shift" —
        // the navbar's top offset and background were flickering between
        // states multiple times per second. rAF-throttling also avoids
        // running this on every scroll event.
        const handleScroll = () => {
            if (tickingRef.current) return
            tickingRef.current = true
            requestAnimationFrame(() => {
                const y = window.scrollY
                setScrolled((prev) => {
                    if (prev && y < 8) return false
                    if (!prev && y > 24) return true
                    return prev
                })
                tickingRef.current = false
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close the mobile menu on route/hash change (tapping a link) and on
    // resize past the lg breakpoint, so it doesn't stay open if the
    // viewport grows (e.g. rotating a tablet).
    useEffect(() => {
        const closeOnResize = () => {
            if (window.innerWidth >= 1024) setMenuOpen(false)
        }
        window.addEventListener('resize', closeOnResize)
        return () => window.removeEventListener('resize', closeOnResize)
    }, [])

  return (
    <header className={`navbar  ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a className="logo" href="#hero">
                arnold@systems:~$
            </a>

            <nav className="desktop">
                <ul>
                    {
                        navLinks.map(({link, name}) =>
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>

                        )
                    }
                </ul>
            </nav>

            <div className="flex items-center gap-3">
                <a href="#contact" className="contact-btn group hidden lg:flex">
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>

                {/* Mobile/tablet menu toggle — nav.desktop is hidden below
                    the lg breakpoint (index.css) with nothing replacing it,
                    so there was previously no way to reach section links
                    on phones or tablets. */}
                <button
                    type="button"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((v) => !v)}
                    className="lg:hidden flex flex-col justify-center items-center gap-1.5 size-10 rounded-md border border-amber-dim/40 bg-black-200"
                >
                    <span className={`block w-5 h-0.5 bg-amber transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-amber transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`block w-5 h-0.5 bg-amber transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                </button>
            </div>
        </div>

        {/* Mobile menu panel */}
        <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                menuOpen ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'
            }`}
        >
            <ul className="flex flex-col gap-2 bg-black-200 border border-black-200 rounded-md p-4 font-mono">
                {
                    navLinks.map(({link, name}) =>
                        <li key={name}>
                            <a
                                href={link}
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 px-2 text-white-50 hover:text-amber transition-colors duration-300"
                            >
                                {name}
                            </a>
                        </li>
                    )
                }
                <li>
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 px-2 text-amber font-medium"
                    >
                        Contact Me
                    </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default NavBar
