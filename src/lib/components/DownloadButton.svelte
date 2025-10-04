<script>
    export let variant = "primary"; // primary, secondary
    export let size = "default"; // default, large, small

    let baseClasses = "rounded-md transition-colors font-medium";

    $: buttonClasses = (() => {
        let classes = baseClasses;

        // Variant styles
        if (variant === "primary") {
            classes += " bg-foreground text-background hover:bg-foreground/90";
        } else if (variant === "secondary") {
            classes += " bg-transparent border-2 border-border hover:bg-muted";
        }

        // Size styles
        if (size === "large") {
            classes += " text-lg px-12 py-6";
        } else if (size === "small") {
            classes += " px-4 py-2";
        } else if (size === "default") {
            classes += " text-lg px-8 py-6";
        }

        return classes;
    })();
</script>

<button class={buttonClasses}> Download for macOS </button>
