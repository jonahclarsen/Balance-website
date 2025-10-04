<script>
  import Navigation from "$lib/components/Navigation.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import FeaturesSection from "$lib/components/FeaturesSection.svelte";
  import PurposesSection from "$lib/components/PurposesSection.svelte";
  import MenuBarSection from "$lib/components/MenuBarSection.svelte";
  import CTASection from "$lib/components/CTASection.svelte";
</script>

<svelte:head>
  <title>Balance - The only productivity timer that tracks your purpose</title>
  <meta
    name="description"
    content="Balance combines the Pomodoro technique with life purpose tracking. Work with intention, maintain balance, and achieve your ideal life allocation."
  />
</svelte:head>

<main class="min-h-screen">
  <Navigation />
  <HeroSection />
  <FeaturesSection />
  <PurposesSection />
  <MenuBarSection />
  <CTASection />
</main>
