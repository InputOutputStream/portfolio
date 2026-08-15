import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { AnimatedCounter } from '../components/AnimatedCounter'


const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },

            {
                y:0,
                opacity:1,
                stagger: 1.0,
                duration: 1,
                ease: 'power2.inOut'
            },
        )
    })


  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
            {/*Left Hero Content*/}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-badge w-fit">
                        <p>root@arnold:~$ whoami</p>
                    </div>

                    <div className="hero-text">
                        <h1>
                            Building
                            <span className="slide">
                                <span className="wrapper">
                                    {
                                        words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img
                                                src={word.imgPath}
                                                alt={word.text}
                                                className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>

                        <h1>Close to the Metal.</h1>
                        <h1>Yaoundé, Cameroun.</h1>
                    </div>

                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none font-mono">
                        M1 Informatique · Systèmes & Réseaux — Université de Yaoundé I. <br/>
                        Hyperviseurs, PKI, ML implémenté from scratch. <br/>
                        Finaliste NASA Space Apps,
                        1ère place Hackathon FraudZen (TU Berlin).
                    </p>

                    <Button className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="See my work"/>

                </div>
            </header>


            {/*Right: 3D Model */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </div>

        <AnimatedCounter />
    </section>
    )
}

export default Hero
