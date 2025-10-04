"use client"

import { useEffect, useRef, useState } from "react"

export function MenuBarSection() {
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
    <section ref={sectionRef} className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center text-balance">
            Always in sight,
            <br />
            never in the way
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-20 max-w-2xl mx-auto text-balance leading-relaxed">
            Balance lives in your menu bar, showing you exactly how many hours you need to work on neglected purposes to
            return to your ideal balance.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-card rounded-3xl p-12 shadow-2xl border border-border max-w-4xl mx-auto">
            {/* macOS menu bar mockup */}
            <div className="bg-background rounded-xl overflow-hidden border border-border">
              {/* Menu bar */}
              <div className="bg-muted/50 px-4 py-2 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Fri Oct 3</span>
                  <span>6:11 PM</span>
                  <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-md">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                    <span className="font-medium text-foreground">Balance: +3h Creative</span>
                  </div>
                </div>
              </div>

              {/* Dropdown content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">To Return to Balance</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <span className="font-medium">Creative Projects</span>
                      <span className="text-lg font-bold text-accent">+3.5 hours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">Health & Fitness</span>
                      <span className="text-lg font-bold text-muted-foreground">+1.2 hours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">Deep Work</span>
                      <span className="text-lg font-bold text-green-600">Balanced ✓</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Start Timer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A gentle, persistent reminder to live the life you've designed. Balance shows you the path back to
            equilibrium, one Pomodoro at a time.
          </p>
        </div>
      </div>
    </section>
  )
}
