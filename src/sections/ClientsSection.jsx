"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { clients } from "@/data/data";
import { useEffect, useRef } from "react";

export default function ClientsSection() {
  const midIndex = Math.ceil(clients.length / 2);

  const topClients = clients.slice(0, midIndex);
  const bottomClients = clients.slice(midIndex);

  const topTrackRef = useRef(null);
  const bottomTrackRef = useRef(null);

  useEffect(() => {
    const rows = [
      {
        track: topTrackRef.current,
        direction: -1,
      },
      {
        track: bottomTrackRef.current,
        direction: 1,
      },
    ].filter(({ track }) => track);

    const cleanups = [];

    rows.forEach(({ track, direction }) => {
      const marquee = track.parentElement;

      let position = 0;
      let isDragging = false;
      let moved = false;
      let startX = 0;
      let startPosition = 0;
      let lastTime = 0;
      let animationFrame = 0;
      let pointerId = null;
      let isHovering = false;

      // Physics / Momentum state
      let velocity = 0;
      let lastX = 0;
      let lastMoveTime = 0;

      const baseSpeed = 70;
      const friction = 0.95; // Controls how fast momentum slows down (closer to 1 = longer glide)

      const getHalfWidth = () => track.scrollWidth / 2;

      const normalizePosition = () => {
        const halfWidth = getHalfWidth();
        if (halfWidth <= 0) return;
        position = ((position % halfWidth) + halfWidth) % halfWidth;
      };

      const render = () => {
        track.style.transform = `translate3d(${-position}px, 0, 0)`;
      };

      const handlePointerDown = (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) {
          return;
        }

        isDragging = true;
        moved = false;
        pointerId = event.pointerId;

        startX = event.clientX;
        startPosition = position;
        lastX = event.clientX;
        lastMoveTime = performance.now();
        velocity = 0; // Reset momentum on grab

        marquee.classList.add("is-dragging");

        if (event.pointerType === "mouse") {
          try {
            marquee.setPointerCapture(event.pointerId);
          } catch {
            // Pointer capture may be unavailable in some browsers.
          }
        }
      };

      const handlePointerMove = (event) => {
        if (!isDragging || event.pointerId !== pointerId) {
          return;
        }

        const currentX = event.clientX;
        const currentTime = performance.now();
        const distance = currentX - startX;

        if (Math.abs(distance) > 3) {
          moved = true;
        }

        if (!moved) return;

        if (event.cancelable) {
          event.preventDefault();
        }

        // Calculate instant velocity for fling momentum (pixels per millisecond)
        const timeDelta = currentTime - lastMoveTime;
        if (timeDelta > 0) {
          const moveDelta = currentX - lastX;
          // Invert movement so dragging left pushes content forward naturally
          velocity = -(moveDelta / timeDelta) * 1000;
        }

        lastX = currentX;
        lastMoveTime = currentTime;

        position = startPosition - distance;

        normalizePosition();
        render();
      };

      const stopDragging = (event) => {
        if (!isDragging) return;

        if (event?.pointerId !== undefined && event.pointerId !== pointerId) {
          return;
        }

        isDragging = false;
        pointerId = null;

        marquee.classList.remove("is-dragging");
      };

      const handleClick = (event) => {
        if (!moved) return;

        event.preventDefault();
        event.stopPropagation();

        moved = false;
      };

      const handlePointerEnter = () => {
        isHovering = true;
      };

      const handlePointerLeave = () => {
        isHovering = false;
      };

      const animate = (time) => {
        if (!lastTime) {
          lastTime = time;
        }

        const delta = Math.min(time - lastTime, 32);
        lastTime = time;

        if (isDragging) {
          // Do nothing to position while user holds/drags; hand is in control
        } else if (Math.abs(velocity) > 0.5) {
          // Apply momentum glide when released
          position += velocity * (delta / 1000);
          velocity *= Math.pow(friction, delta / 16); // Decay velocity smoothly

          normalizePosition();
          render();
        } else {
          // Normal auto-marquee scroll behavior
          if (
            !document.hidden &&
            !(
              isHovering &&
              window.matchMedia("(hover: hover) and (pointer: fine)").matches
            )
          ) {
            position += direction * baseSpeed * (delta / 1000);

            normalizePosition();
            render();
          }
        }

        animationFrame = requestAnimationFrame(animate);
      };

      marquee.addEventListener("pointerdown", handlePointerDown);
      marquee.addEventListener("pointermove", handlePointerMove, {
        passive: false,
      });
      marquee.addEventListener("pointerup", stopDragging);
      marquee.addEventListener("pointercancel", stopDragging);
      marquee.addEventListener("lostpointercapture", stopDragging);
      marquee.addEventListener("click", handleClick, true);
      marquee.addEventListener("pointerenter", handlePointerEnter);
      marquee.addEventListener("pointerleave", handlePointerLeave);

      render();
      animationFrame = requestAnimationFrame(animate);

      cleanups.push(() => {
        cancelAnimationFrame(animationFrame);
        marquee.removeEventListener("pointerdown", handlePointerDown);
        marquee.removeEventListener("pointermove", handlePointerMove);
        marquee.removeEventListener("pointerup", stopDragging);
        marquee.removeEventListener("pointercancel", stopDragging);
        marquee.removeEventListener("lostpointercapture", stopDragging);
        marquee.removeEventListener("click", handleClick, true);
        marquee.removeEventListener("pointerenter", handlePointerEnter);
        marquee.removeEventListener("pointerleave", handlePointerLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-10 lg:py-15">
      {/* Background elements */}
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2F3192]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#2F3192]/5 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:mb-16 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2F3192]/15 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#2F3192]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F3192]">
              Trusted Partnerships
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-[#2F3192]">Leading Brands</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Royal Equipment — a division of Kuche India Elevation Pvt. Ltd. — is
            your trusted partner in high-performance commercial kitchen
            equipment.
          </p>
        </div>

        {/* Client Rows */}
        <div className="relative space-y-5 sm:space-y-6">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-slate-50 to-transparent sm:w-24 lg:w-40" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-slate-50 to-transparent sm:w-24 lg:w-40" />

          {/* TOP ROW */}
          <div className="client-marquee">
            <div ref={topTrackRef} className="client-track client-track-left">
              {[...topClients, ...topClients].map((client, index) => (
                <div key={`top-${index}`} className="client-card">
                  <div className="relative h-full w-full overflow-visible sm:h-full">
                    <Image
                      src={client.path}
                      alt={`Client Brand ${(index % Math.max(topClients.length, 1)) + 1}`}
                      fill
                      sizes="230px"
                      draggable={false}
                      className="select-none object-contain transition-transform duration-300 sm:scale-[1.25] sm:group-hover:scale-[1.3]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="client-marquee">
            <div
              ref={bottomTrackRef}
              className="client-track client-track-right"
            >
              {[...bottomClients, ...bottomClients].map((client, index) => (
                <div key={`bottom-${index}`} className="client-card">
                  <div className="relative h-[40px] w-full overflow-visible sm:h-full">
                    <Image
                      src={client.path}
                      alt={`Client Brand ${(index % Math.max(bottomClients.length, 1)) + 1}`}
                      fill
                      sizes="230px"
                      draggable={false}
                      className="select-none object-contain scale-[1.8] transition-transform duration-300 sm:scale-[1.25] sm:group-hover:scale-[1.3]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center px-4 sm:mt-14">
          <Link
            href="/our-client"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#2F3192] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2F3192]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#26277d] active:translate-y-0"
          >
            <span>View All Clients</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
