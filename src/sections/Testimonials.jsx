import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className = "w-full h-full md:px-10 px-5">
            <TitleHeader
                title="Distinctions & Projets Marquants"
                sub="// ce qui a été jugé, pas juste écrit"
            />
            <div className="lg:columns-2 md:columns-2 mt-16 gap-6">
                {testimonials.map((card, index) => (
                    <GlowCard card={card} index={index} key={card.name}>
                        <div>
                            <p className="font-mono text-xs uppercase tracking-widest text-amber mb-1">
                                {card.mentions}
                            </p>
                            <p className="font-bold text-lg">{card.name}</p>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials
