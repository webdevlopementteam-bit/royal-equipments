 <section className="relative min-h-[220px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px] overflow-hidden bg-slate-950 text-white flex items-center">
        {/* ================= BACKGROUND IMAGE ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 flex opacity-40">
            {/* Mobile + First Desktop Image */}
            <div className="relative h-full w-full shrink-0 lg:w-1/2">
              <Image
                src="/products/product/top.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top object-left"
              />
            </div>

            {/* Second Image - Desktop */}
            <div className="relative hidden h-full w-1/2 shrink-0 lg:block">
              <Image
                src="/products/product/top.webp"
                alt=""
                fill
                sizes="50vw"
                className="object-cover object-top object-left"
              />
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent" />

          {/* Subtle Highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-amber-500/10" />
        </div>

        {/* ================= DECORATIVE ELEMENTS ================= */}

        <div className="absolute top-0 left-0 w-48 h-48 sm:w-60 sm:h-60 bg-indigo-600/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-amber-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        {/* ================= DECORATIVE LINES ================= */}

        <div className="absolute top-0 right-[12%] w-px h-28 bg-gradient-to-b from-amber-400/40 to-transparent hidden lg:block" />

        <div className="absolute bottom-0 left-[18%] w-32 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent hidden lg:block" />

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20">
          <div className="max-w-4xl">
            {/* Small Label */}
            <div className="inline-flex items-center gap-1.5 mb-2.5 sm:mb-3">
              <span className="w-6 sm:w-8 h-[2px] bg-amber-500" />

              <span className="text-white uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[10px] sm:text-xs md:text-sm font-semibold">
                Royal Equipment
              </span>

              <span className="w-6 sm:w-8 h-[2px] bg-amber-500" />
            </div>

            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-2xl">
              Our Products
            </h1>

            {/* Accent Line */}
            <div className="mt-3 sm:mt-4 mb-4 sm:mb-5 flex items-center gap-1.5">
              <span className="w-10 sm:w-14 h-1 rounded-full bg-amber-500" />

              <span className="w-3 sm:w-4 h-1 rounded-full bg-indigo-600" />

              <span className="w-1.5 sm:w-2 h-1 rounded-full bg-white/50" />
            </div>

            {/* Breadcrumb - UNCHANGED */}
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 shadow-xl max-w-full"
            >
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base text-slate-200 hover:text-amber-400 transition-colors"
              >
                <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
                <span>Home</span>
              </a>

              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-1.5 sm:mx-2 text-slate-500 shrink-0" />

              <span className="text-xs sm:text-sm md:text-base text-amber-400 font-semibold truncate max-w-[150px] sm:max-w-[220px]">
                Our Products
              </span>
            </nav>
          </div>
        </div>

        {/* ================= BOTTOM SHAPE ================= */}

        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 80"
            className="w-full h-auto text-slate-50 fill-slate-50"
            preserveAspectRatio="none"
          >
            <path d="M0,80 L0,55 C240,10 480,10 720,40 C960,70 1200,70 1440,25 L1440,80 Z" />
          </svg>
        </div>
      </section>