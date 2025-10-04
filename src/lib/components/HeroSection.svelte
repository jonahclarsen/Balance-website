<script>
    import { onMount, onDestroy } from "svelte";
    import DownloadButton from "./DownloadButton.svelte";

    let canvas;
    let animationFrame;

    onMount(() => {
        if (typeof window === "undefined" || !canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Create animated gradient orbs
        let orb_opacity = 0.4;
        const orbs = [
            {
                x: 0.15,
                y: 0.3,
                radius: 300,
                color1: `rgba(59, 130, 246, ${orb_opacity})`,
                color2: "rgba(59, 130, 246, 0)",
            },
            {
                x: 0.8,
                y: 0.4,
                radius: 350,
                color1: `rgba(251, 146, 60, ${orb_opacity})`,
                color2: "rgba(251, 146, 60, 0)",
            },
            {
                x: 0.5,
                y: 0.55,
                radius: 280,
                color1: `rgba(99, 102, 241, ${orb_opacity * 0.67})`,
                color2: "rgba(99, 102, 241, 0)",
            },
        ];

        let time = 0;

        const animate = () => {
            time += 0.005;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            orbs.forEach((orb, index) => {
                const offsetX = Math.sin(time + index) * 50;
                const offsetY = Math.cos(time + index * 0.7) * 50;
                const x = orb.x * canvas.width + offsetX;
                const y = orb.y * canvas.height + offsetY;

                // Subtle breathing scale effect (slow sine wave)
                const breathScale = 1 + Math.sin(time * 3 + index * 0.5) * 0.5;
                const scaledRadius = orb.radius * breathScale;

                const gradient = ctx.createRadialGradient(
                    x,
                    y,
                    0,
                    x,
                    y,
                    scaledRadius,
                );
                gradient.addColorStop(0, orb.color1);
                gradient.addColorStop(1, orb.color2);

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrame);
        };
    });

    onDestroy(() => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    });
</script>

<section
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
>
    <canvas
        bind:this={canvas}
        class="absolute inset-0 w-full h-full"
        style="filter: blur(80px);"
    ></canvas>

    <div class="relative z-10 container mx-auto px-6 text-center">
        <br />
        <br />
        <br />
        <br />
        <h1
            class="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-balance leading-[0.95] tracking-tight"
        >
            The only timer<br />
            that tracks your<br />
            <span
                class="bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-pink-400"
                style="color: rgba(1, 1, 1, 0.1);">purpose</span
            >
        </h1>

        <p
            class="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed"
        >
            Balance combines the Pomodoro technique with life purpose tracking.
            Work with intention, maintain balance, and achieve your ideal life
            allocation.
        </p>

        <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
            <button
                class="text-lg px-8 py-6 bg-foreground text-background hover:bg-foreground/90 rounded-md transition-colors font-medium"
            >
                Find Your Balance
            </button>
            <DownloadButton variant="secondary" size="default" />
        </div>

        <p class="mt-8 text-sm text-muted-foreground">
            Free • macOS 12.0 or later
        </p>
    </div>
</section>
