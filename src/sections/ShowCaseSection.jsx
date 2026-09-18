import React, { useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { showcaseProjects } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const ShowCaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const projectRefs = useRef([])

    useGSAP(() => {
        // Fade in the entire section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.5,
                ease: 'power2.out',
            }
        )

        // Animate each project when it enters the viewport
        const projects = [project1Ref.current, ...projectRefs.current]

        projects.forEach((project, index) => {
            if (!project) return

            gsap.fromTo(
                project,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * index,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: project,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none reverse',
                    },
                }
            )
        })
    }, [])

    const { main, secondary } = showcaseProjects

    return (
        <section
            id="work"
            ref={sectionRef}
            className="app-showcase"
        >
            <div className="w-full">
                <div className="showcaselayout">

                    {/* Left side — main project */}
                    <a
                        href={main.link}
                        target="_blank"
                        rel="noreferrer"
                        className="first-project-wrapper"
                        ref={project1Ref}
                    >
                        <div className="image-wrapper">
                            <img
                                src={main.image}
                                alt={main.title}
                                loading="lazy"
                            />
                        </div>

                        <div className="text-content">
                            <div className="badges">
                                {main.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="font-mono text-xs uppercase tracking-widest text-amber border border-amber-dim/40 rounded px-2 py-1"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h2>{main.title}</h2>

                            <p className="text-white-50 md:text-xl">
                                {main.description}
                            </p>
                        </div>
                    </a>

                    {/* Right side — other projects */}
                    <div className="project-list-wrapper overflow-hidden">
                        {secondary.map((project, index) => (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="project"
                                key={project.title}
                                ref={(el) => (projectRefs.current[index] = el)}
                            >
                                <div
                                    className="image-wrapper"
                                    style={{ backgroundColor: project.bg }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                    />
                                </div>

                                <h2>{project.title}</h2>
                                <p className="text-white-50 text-sm font-mono mt-2">
                                    {project.description}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCaseSection
