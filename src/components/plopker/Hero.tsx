import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Star, ArrowRight, ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const words = ["Potong rumput.", "Bersih halaman.", "Cuci kendaraan."];

const workers = [
  { name: "Budi S.", rating: 4.9, dist: "0.6 km", eta: "18 mnt", price: "Rp60–80rb", x: "5%", y: "8%" },
  { name: "Andre P.", rating: 4.8, dist: "1.2 km", eta: "25 mnt", price: "Rp65–85rb", x: "55%", y: "32%" },
  { name: "Rian K.", rating: 4.7, dist: "1.8 km", eta: "30 mnt", price: "Rp55–75rb", x: "12%", y: "62%" },
];

export const Hero = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden flex items-center">
      {/* Layered backdrop */}
      <motion.div style={{ y: y2, scale }} className="absolute inset-0 bg-radial-fade" />
      <motion.div style={{ y: y1 }} className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div style={{ y: y1 }} className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-trust/20 blur-3xl" />

      <motion.div style={{ opacity }} className="container mx-auto relative py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium shadow-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-trust opacity-75 animate-pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-trust" />
            </span>
            Pekerja lokal terdekat, siap dalam menit
          </motion.span>

          <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.02] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Bantuan cepat
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              di lingkungan{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient-brand">Anda.</span>
                <span className="absolute inset-x-0 bottom-1 md:bottom-3 h-3 md:h-5 bg-accent/60 -z-0 rounded" />
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            {words.join(" ")} Plopker mempertemukan Anda dengan pekerja lokal terverifikasi —
            dalam hitungan menit, dengan harga jelas sebelum mulai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium bg-trust/10 text-trust border border-trust/20 px-3 py-2 rounded-full"
          >
            <ShieldCheck className="h-4 w-4" />
            Harga disetujui sebelum pekerjaan dimulai — tanpa kejutan.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <Button variant="accent" size="xl" onClick={() => navigate("/request")}>
              Cari Pekerja Sekarang <ArrowRight />
            </Button>
            <Button variant="soft" size="xl" onClick={() => navigate("/worker/register")}>
              Daftar Jadi Pekerja
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 text-accent" />
            <span>Pekerja lokal terdekat berdasarkan area Anda.</span>
          </motion.div>
        </div>

        {/* Cinematic floating worker cards */}
        <div className="lg:col-span-5 relative h-[520px] md:h-[560px] hidden lg:block">
          {/* Map-ish backdrop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-secondary via-card to-background border border-border shadow-card overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-60" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full border border-dashed border-foreground/20" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full border border-dashed border-foreground/15" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 120 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <span className="relative flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex h-5 w-5 rounded-full bg-accent ring-4 ring-accent/30" />
              </span>
            </motion.div>
          </motion.div>

          {workers.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{ left: w.x, top: w.y }}
              className="absolute w-[260px] bg-card rounded-2xl border border-border shadow-card p-3.5"
            >
              <motion.div
                animate={reduce ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-accent to-trust grid place-items-center font-bold text-foreground/90 shrink-0">
                  {w.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{w.name}</span>
                    <span className="inline-flex items-center gap-0.5 text-xs">
                      <Star className="h-3 w-3 fill-accent text-accent" /> {w.rating}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-trust/15 text-trust font-medium">
                      <BadgeCheck className="h-3 w-3" /> Verified
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {w.dist} • <Clock className="h-3 w-3 ml-1" /> {w.eta}
                  </div>
                  <div className="text-xs font-semibold mt-0.5">{w.price}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile worker preview */}
        <div className="lg:hidden relative">
          <div className="bg-card rounded-3xl shadow-card border border-border p-5 space-y-3">
            {workers.map((w, i) => (
              <motion.div
                key={w.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                className="flex items-start gap-3 p-3 rounded-2xl border border-border bg-background/60"
              >
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-accent to-trust grid place-items-center font-bold text-foreground/90 shrink-0">{w.name[0]}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{w.name}</span>
                    <span className="inline-flex items-center gap-0.5 text-xs"><Star className="h-3 w-3 fill-accent text-accent" /> {w.rating}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-trust/15 text-trust font-medium"><BadgeCheck className="h-3 w-3" /> Verified</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {w.dist} • <Clock className="h-3 w-3 ml-1" /> {w.eta}</div>
                  <div className="text-xs font-semibold mt-0.5">{w.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex flex-col items-center gap-2"
      >
        <span className="tracking-widest uppercase">Gulir</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-foreground/30"
        />
      </motion.div>
    </section>
  );
};
