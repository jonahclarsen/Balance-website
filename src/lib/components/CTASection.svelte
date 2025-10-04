<script>
    import DiscordButton from "./DiscordButton.svelte";
    import DownloadButton from "./DownloadButton.svelte";
</script>

<section id="download" class="py-32 px-6">
    <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Start living with<br />
            intention today
        </h2>
        <p
            class="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed"
        >
            Download Balance for free and discover what it means to truly
            balance productivity with purposeful living.
        </p>

        <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
            <DownloadButton variant="primary" size="large" />
        </div>

        <div class="flex justify-center mb-12">
            <DiscordButton />
        </div>

        <div class="mt-20 pt-12 border-t border-border">
            <p class="text-sm text-muted-foreground">
                Made with intention • macOS 12.0 or later
            </p>
        </div>
    </div>
</section>
