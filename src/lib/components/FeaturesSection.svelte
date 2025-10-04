<script>
    import { onMount } from "svelte";

    let sectionRef;
    let isVisible = false;

    onMount(() => {
        if (typeof window === "undefined" || !sectionRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    isVisible = true;
                }
            },
            { threshold: 0.2 },
        );

        observer.observe(sectionRef);

        return () => observer.disconnect();
    });
</script>

<section id="features" bind:this={sectionRef} class="py-32 px-6 bg-muted/30">
    <div class="container mx-auto">
        <div
            class="transition-all duration-1000 {isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'}"
        >
            <h2
                class="text-5xl md:text-7xl font-bold mb-6 text-center text-balance"
            >
                Productivity meets<br />
                purposeful living
            </h2>
            <p
                class="text-xl text-muted-foreground text-center mb-20 max-w-2xl mx-auto text-balance leading-relaxed"
            >
                Balance isn't just another Pomodoro timer. It's a tool for
                intentional living.
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div
                class="transition-all duration-1000 delay-200 {isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-12'}"
            >
                <div
                    class="bg-card rounded-3xl p-12 shadow-2xl border border-border"
                >
                    <div class="relative">
                        <!-- Timer mockup -->
                        <div
                            class="bg-background rounded-2xl p-8 border border-border"
                        >
                            <div class="text-center mb-8">
                                <div class="text-7xl font-bold mb-2 font-mono">
                                    25:00
                                </div>
                                <div class="text-sm text-muted-foreground">
                                    Focus Session
                                </div>
                            </div>

                            <div class="mb-6">
                                <div
                                    class="flex items-center justify-between mb-2"
                                >
                                    <span class="text-sm text-muted-foreground"
                                        >Current Purpose</span
                                    >
                                    <span class="text-sm font-medium"
                                        >Deep Work</span
                                    >
                                </div>
                                <div
                                    class="h-2 bg-muted rounded-full overflow-hidden"
                                >
                                    <div
                                        class="h-full w-3/4 bg-primary rounded-full animate-pulse"
                                    />
                                </div>
                            </div>

                            <div class="flex gap-3">
                                <button
                                    class="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                                >
                                    Start
                                </button>
                                <button
                                    class="px-6 py-3 bg-muted text-foreground rounded-xl font-medium hover:bg-muted/80 transition-colors"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="transition-all duration-1000 delay-400 {isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-12'}"
            >
                <div class="space-y-8">
                    <div>
                        <h3 class="text-3xl font-bold mb-4">Pomodoro Timer</h3>
                        <p
                            class="text-lg text-muted-foreground leading-relaxed"
                        >
                            Stay focused with customizable work and break
                            intervals. The classic technique that helps you
                            maintain peak productivity.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-3xl font-bold mb-4">
                            Purpose Tracking
                        </h3>
                        <p
                            class="text-lg text-muted-foreground leading-relaxed"
                        >
                            Every session is tagged to a life purpose. See
                            exactly where your time goes and ensure you're
                            living according to your values.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-3xl font-bold mb-4">
                            Beautiful Interface
                        </h3>
                        <p
                            class="text-lg text-muted-foreground leading-relaxed"
                        >
                            A clean, distraction-free design that feels at home
                            on macOS. Elegant, minimal, and always out of your
                            way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
