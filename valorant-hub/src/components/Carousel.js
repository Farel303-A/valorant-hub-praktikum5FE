"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Jumlah slide yang tampil sekaligus mengikuti lebar layar (responsif)
function usePerView(perView) {
  const { base = 1, md, lg } = perView;
  const [pv, setPv] = useState(base);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024 && lg) setPv(lg);
      else if (w >= 640 && md) setPv(md);
      else setPv(base);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [base, md, lg]);

  return pv;
}

/**
 * Carousel reusable tanpa library.
 * - Autoplay dengan progress bar (berhenti saat hover/fokus/pause)
 * - Tombol prev/next, dot indikator, tombol pause/play
 * - Swipe di layar sentuh & navigasi keyboard (← →)
 * - Menghormati prefers-reduced-motion
 */
export default function Carousel({
  slides,
  label = "Carousel",
  autoPlay = true,
  interval = 6000,
  perView = { base: 1 },
  gap = 24,
}) {
  const pv = usePerView(perView);
  const max = Math.max(0, slides.length - pv);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchX = useRef(null);

  const current = Math.min(index, max);
  const go = useCallback((i) => setIndex(i > max ? 0 : i < 0 ? max : i), [max]);
  const next = () => go(current + 1);
  const prev = () => go(current - 1);
  const paused = !playing || hovered || focused;

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  };

  return (
    <section
      className={`carousel ${paused ? "is-paused" : ""}`}
      style={{ "--gap": `${gap}px` }}
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(e) => e.target.matches(":focus-visible") && setFocused(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setFocused(false)}
    >
      <div className="carousel__viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${(current * 100) / pv}%)` }}
          aria-live={paused ? "polite" : "off"}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="carousel__slide"
              style={{ flexBasis: `${100 / pv}%` }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} dari ${slides.length}`}
              inert={!(i >= current && i < current + pv)}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {max > 0 && (
        <>
          {autoPlay && (
            <div className="carousel__progress" aria-hidden="true">
              <span key={`${current}-${pv}`} style={{ animationDuration: `${interval}ms` }} onAnimationEnd={next} />
            </div>
          )}
          <div className="carousel__controls">
            <div className="carousel__dots">
              {Array.from({ length: max + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`carousel__dot ${i === current ? "is-active" : ""}`}
                  aria-label={`Ke slide ${i + 1}`}
                  aria-current={i === current}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <div className="carousel__buttons">
              {autoPlay && (
                <button
                  type="button"
                  className="carousel__btn"
                  aria-label={playing ? "Jeda otomatis geser" : "Putar otomatis geser"}
                  onClick={() => setPlaying(!playing)}
                >
                  {playing ? "❚❚" : "▶"}
                </button>
              )}
              <button type="button" className="carousel__btn" aria-label="Slide sebelumnya" onClick={prev}>←</button>
              <button type="button" className="carousel__btn" aria-label="Slide berikutnya" onClick={next}>→</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
