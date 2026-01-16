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
  let seasonalIntensity;

  if (now <= peakDate) {
    seasonalIntensity = (now - startDate) / (peakDate - startDate);
  } else {
    seasonalIntensity = 1 - (now - peakDate) / (endDate - peakDate);
  }

  // Clamp + smoothstep
  seasonalIntensity = Math.max(0, Math.min(1, seasonalIntensity));
  seasonalIntensity = seasonalIntensity * seasonalIntensity * (3 - 2 * seasonalIntensity);

  // ─────────────────────────────────────────
  // Session fade-out settings
  // ─────────────────────────────────────────
  // How long until snow is basically gone for this user/session:
  const FADE_SECONDS = 25;          // tweak: 45–120 feels good
  const TICK_MS = 250;              // update cadence
  const REMOVE_AT = 0.06;           // when multiplier below this, remove nodes

  const t0 = Date.now();

  // Smooth decay (1 → 0) over FADE_SECONDS
  function sessionMultiplier() {
    const elapsed = (Date.now() - t0) / 1000;
    const x = Math.max(0, Math.min(1, elapsed / FADE_SECONDS)); // 0..1
    // smoothstep down: 1 - smoothstep(x)
    const s = x * x * (3 - 2 * x);
    return 1 - s;
  }

  // ─────────────────────────────────────────
  // Snow density (based on effective intensity at start)
  // ─────────────────────────────────────────
  const MIN_SNOW = 10;
  const MAX_SNOW = 26;

  const initialEffective = seasonalIntensity * sessionMultiplier();

  const snowCount = Math.round(
    MIN_SNOW + initialEffective * (MAX_SNOW - MIN_SNOW)
  );

  // ─────────────────────────────────────────
  // Create snowflakes
  // ─────────────────────────────────────────
  const flakes = [];

  for (let i = 0; i < snowCount; i++) {
    const snow = document.createElement('div');
    snow.className = 'seasonal-snowflake';
    snow.textContent = '❄';
    snow.style.position = 'fixed';
    snow.style.top = '-2rem';
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.fontSize = (Math.random() * 10 + 10) + 'px';

    // Store each flake’s "base opacity" so we can scale it down later
    const baseOpacity = Math.random() * 0.6 + 0.3;
    snow.dataset.baseOpacity = String(baseOpacity);
    snow.style.opacity = String(baseOpacity);

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
    flakes.push(snow);
  }

  // ─────────────────────────────────────────
  // Fade-out loop: scale opacity down over session time
  // ─────────────────────────────────────────
  const timer = setInterval(function () {
    const mult = seasonalIntensity * sessionMultiplier();

    // scale each flake’s opacity by current multiplier
    for (let i = 0; i < flakes.length; i++) {
      const el = flakes[i];
      const base = parseFloat(el.dataset.baseOpacity || "0.5");
      el.style.opacity = String(base * mult);
    }

    // When basically gone, remove + stop updating
    if (mult <= REMOVE_AT) {
      clearInterval(timer);
      for (let i = 0; i < flakes.length; i++) {
        const el = flakes[i];
        if (el && el.parentNode) el.parentNode.removeChild(el);
      }
    }
  }, TICK_MS);

})();
