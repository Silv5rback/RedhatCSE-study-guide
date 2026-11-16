// Load asciinema-player from CDN for terminal recording playback (client-side only)
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/asciinema-player@3.4.0/bundles/asciinema-player.js';
  script.defer = true;
  document.head.appendChild(script);

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/asciinema-player@3.4.0/bundles/asciinema-player.css';
  document.head.appendChild(link);
}
