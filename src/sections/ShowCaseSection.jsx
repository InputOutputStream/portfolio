import React, { useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowCaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

        
    useGSAP(() => {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card, index) => {
            gsap.fromTo(
                card, 
                {
                    y: 50, 
                    opacity: 0
                },
                
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                },
                {

                }

            )
        })

            gsap.fromTo(
                sectionRef.current, 
                    {opacity: 0}, 
                    {opacity: 1, duration: 2}
            )

    }, [])

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* {leftside} */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Thoth Cloud"/>
                    </div>
                    <div className="text-content">
                        <h2>Thoth Cloud — a multi-tenant IaaS platform I'm building from scratch</h2>
                        <p className="text-white-50 md:text-xl">
                            C++ backend (cpp-httplib) over libvirt, orchestrating KVM virtual machines and
                            Docker Swarm workloads across multiple physical hosts. Handles VM creation, live
                            migration, snapshots, and noVNC console access — tested with 10+ simultaneous VMs.
                        </p>
                    </div> 

                </div>
                {/* {Rightside} */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#16213e]">
                            <img src="/images/project2.png" alt="PKI Infrastructure" />
                        </div>
                        <h2>PKI Infrastructure & universal TLS wrapper</h2>
                    </div>


                     <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#0f3460]">
                            <img src="/images/project3.png" alt="IntelliStore" />
                        </div>
                        <h2>IntelliStore — vision-based auto-checkout system</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowCaseSection
