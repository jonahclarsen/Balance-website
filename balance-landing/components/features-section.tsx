"use client"

import { useEffect, useRef, useState } from "react"

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={sectionRef} className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center text-balance">
            Productivity meets
            <br />
            purposeful living
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-20 max-w-2xl mx-auto text-balance leading-relaxed">
            Balance isn't just another Pomodoro timer. It's a tool for intentional living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="bg-card rounded-3xl p-12 shadow-2xl border border-border">
              <div className="relative">
                {/* Timer mockup */}
                <div className="bg-background rounded-2xl p-8 border border-border">
                  <div className="text-center mb-8">
                    <div className="text-7xl font-bold mb-2 font-mono">25:00</div>
                    <div className="text-sm text-muted-foreground">Focus Session</div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Current Purpose</span>
                      <span className="text-sm font-medium">Deep Work</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full animate-pulse-glow" />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                      Start
                    </button>
                    <button className="px-6 py-3 bg-muted text-foreground rounded-xl font-medium hover:bg-muted/80 transition-colors">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Pomodoro Timer</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stay focused with customizable work and break intervals. The classic technique that helps you maintain
                  peak productivity.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">Purpose Tracking</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every session is tagged to a life purpose. See exactly where your time goes and ensure you're living
                  according to your values.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">Beautiful Interface</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A clean, distraction-free design that feels at home on macOS. Elegant, minimal, and always out of your
                  way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
