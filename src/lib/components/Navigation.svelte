<script>
    import { onMount, onDestroy } from "svelte";

    let scrolled = false;

    function handleScroll() {
        if (typeof window !== "undefined") {
            scrolled = window.scrollY > 50;
        }
    }

    onMount(() => {
        if (typeof window !== "undefined") {
            handleScroll(); // Initial check
            window.addEventListener("scroll", handleScroll);
        }
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            window.removeEventListener("scroll", handleScroll);
        }
    });
</script>

<nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
        ? 'bg-background/80 backdrop-blur-lg border-b border-border'
        : 'bg-transparent'}"
>
    <div class="container mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
            <div
                class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"
            >
                <span class="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span class="text-xl font-bold">Balance</span>
        </div>

        <div class="hidden md:flex items-center gap-8">
            <a
                href="#features"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                Features
            </a>
            <a
                href="#purposes"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                Life Purposes
            </a>
            <a
                href="#download"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                Download
            </a>
        </div>

        <button
            class="bg-foreground text-background hover:bg-foreground/90 px-4 py-2 rounded-md transition-colors font-medium"
        >
            Download for macOS
        </button>
    </div>
</nav>
