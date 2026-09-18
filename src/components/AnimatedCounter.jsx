import React, { useEffect, useRef, useState } from 'react'
import { counterItems } from '../constants'

// react-countup pulled in a whole dependency + its own internal rAF/easing
// machinery for what is, here, 4 small numbers. A ~40-line hook using
// requestAnimationFrame directly does the same job (count up once visible,
// ease-out, respect prefers-reduced-motion) for a fraction of the JS.
const useCountUp = (end, { duration = 1500 } = {}) => {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const animate = () => {
      if (started.current) return
      started.current = true

      if (prefersReducedMotion) {
        setValue(end)
        return
      }

      const start = performance.now()
      const easeOutQuad = (t) => t * (2 - t)

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        setValue(Math.round(end * easeOutQuad(progress)))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate()
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return [value, ref]
}

const Counter = ({ item }) => {
  const [value, ref] = useCountUp(item.value)
  return (
    <div ref={ref} className="bg-zinc-900 rounded-lg p-10 flex flex-col">
        <div className="counter-number text-white text-5xl font-bold mb-2">
            {value}{item.suffix}
        </div>
        <div className="text-white-50 text-lg">{item.label}</div>
    </div>
  )
}

export const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
        <div className="mx-auto grid-4-cols">
            {
                // key was previously counterItems.label (undefined — the
                // whole array has no .label), so every card shared the same
                // key and React couldn't tell them apart on re-render.
                counterItems.map((item) => (
                    <Counter item={item} key={item.label} />
                ))
            }
        </div>
    </div>
  )
}
