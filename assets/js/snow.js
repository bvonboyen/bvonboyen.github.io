(function () {

  // ─────────────────────────────────────────
  // Seasonal window
  // ─────────────────────────────────────────
  const startDate = new Date('2025-12-21');
  const endDate   = new Date('2026-02-28');

  const now = new Date();
  if (now > endDate) return;

  // Peak exactly in the middle of the period
  const peakDate = new Date(
    startDate.getTime() + (endDate.getTime() - startDate.getTime()) / 2
  );

  // ─────────────────────────────────────────
  // Seasonal intensity (0 → 1 → 0)
  // ─────────────────────────────────────────
  let intensity;

  if (now <= peakDate) {
    intensity = (now - startDate) / (peakDate - startDate);
  } else {
    intensity = 1 - (now - peakDate) / (endDate - peakDate);
  }

  // Clamp for safety
  intensity = Math.max(0, Math.min(1, intensity));

  // Smoothstep curve (natural feel)
  intensity = intensity * intensity * (3 - 2 * intensity);

  // ─────────────────────────────────────────
  // Snow density
  // ─────────────────────────────────────────
  const MIN_SNOW = 12;
  const MAX_SNOW = 24;

  const snowCount = Math.round(
    MIN_SNOW + intensity * (MAX_SNOW - MIN_SNOW)
  );

  // ─────────────────────────────────────────
  // Create snowflakes
  // ─────────────────────────────────────────
  for (let i = 0; i < snowCount; i++) {
    const snow = document.createElement('div');
    snow.textContent = '❄';
    snow.style.position = 'fixed';
    snow.style.top = '-2rem';
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.fontSize = (Math.random() * 10 + 10) + 'px';
    snow.style.opacity = Math.random() * 0.6 + 0.3;
    snow.style.pointerEvents = 'none';
    snow.style.zIndex = '9999';

    const duration = Math.random() * 10 + 10;

    // Wind + wobble
    const wind   = (Math.random() - 0.5) * 80;
    const wobble = 10 + Math.random() * 20;
    const phase  = Math.random() * Math.PI * 2;

    snow.animate(
      [
        { transform: `translate(${wind * 0.0 + wobble * Math.sin(phase + 0)}px, 0px)` },
        { transform: `translate(${wind * 0.3 + wobble * Math.sin(phase + 1.6)}px, ${window.innerHeight * 0.33}px)` },
        { transform: `translate(${wind * 0.6 + wobble * Math.sin(phase + 3.2)}px, ${window.innerHeight * 0.66}px)` },
        { transform: `translate(${wind * 1.0 + wobble * Math.sin(phase + 4.8)}px, ${window.innerHeight + 100}px)` }
      ],
      {
        duration: duration * 1000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    document.body.appendChild(snow);
  }

})();
