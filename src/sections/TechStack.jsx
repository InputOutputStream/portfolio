import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'

// Splits three.js/drei out of the main bundle, same reasoning as
// HeroExperience/ContactExperience.
const TechIcon = lazy(() => import('../components/Models/TechLogos/TechIcon'))

// Each card mounts its own WebGL canvas. Mounting all 5 simultaneously on
// load — regardless of whether the section is anywhere near the viewport —
// opens 5 GPU contexts at once, which is expensive and mobile browsers cap
// the number of live WebGL contexts per page anyway. Mounting only once
// the individual card scrolls into view spreads that cost out and avoids
// hitting the context limit.
const TechCard = ({ icon }) => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '200px 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div className="card-border tech-card overflow-hidden
            group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg"/>
            <div className="tech-card-content">
                <div className="tech-icon-wrapper" ref={ref}>
                    {inView && (
                        <Suspense fallback={null}>
                            <TechIcon model={icon}/>
                        </Suspense>
                    )}
                </div>
                <div className="padding-x w-full">
                    <p>{icon.name}</p>
                </div>
            </div>
        </div>
    )
}

const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card', {y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.3,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center'
            }
        })
    })

  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
                title="Stack Technique"
                sub="// ce qui tourne réellement dans mes projets"
            />
        <div className="tech-grid">
            {techStackIcons.map((icon) => (
                <TechCard key={icon.name} icon={icon} />
            ))}
        </div>
        </div>
    </div>
  )
}

export default TechStack
