<script>
  // Access frontmatter data
  export let title = "";
  export let description = "";
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
  {:else}
    <title>Balance - The only productivity timer that tracks your purpose</title
    >
  {/if}
  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>

<br />

<div class="markdown-content">
  <slot />
</div>

<style>
  .markdown-content {
    padding-left: 8rem;
    padding-right: 8rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  :global(.markdown-content h1) {
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
  }

  :global(.markdown-content h2) {
    color: var(--primary-color);
    margin-top: 2rem;
  }

  :global(.markdown-content p) {
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  :global(.markdown-content code) {
    background: var(--tertiary-color);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: var(--font-mono);
  }

  :global(.markdown-content blockquote) {
    border-left: 4px solid var(--accent-color);
    padding-left: 1rem;
    margin-left: 0;
    font-style: italic;
    color: var(--text-color);
  }

  @media (max-width: 768px) {
    .markdown-content {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
