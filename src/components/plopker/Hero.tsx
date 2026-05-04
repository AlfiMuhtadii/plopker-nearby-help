import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Star, ArrowRight, Sparkles, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export const Hero = () => {
  const navigate = useNavigate();
  return (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    <div className="container mx-auto relative py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium shadow-soft">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Pekerja lokal terdekat, siap dalam menit
        </span>
        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
          Butuh potong rumput, bersih halaman, atau cuci kendaraan?{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Tanpa ribet.</span>
            <span className="absolute inset-x-0 bottom-1 md:bottom-2 h-3 md:h-4 bg-accent/60 -z-0 rounded" />
          </span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl">
          Plopker mencarikan pekerja lokal terverifikasi di sekitar rumah Anda.
          Lihat estimasi waktu datang, rating, dan harga — semua jelas sebelum pekerjaan dimulai.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium bg-trust/10 text-trust border border-trust/20 px-3 py-2 rounded-full">
          <ShieldCheck className="h-4 w-4" />
          Harga disetujui sebelum pekerjaan dimulai — tanpa kejutan.
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button variant="accent" size="xl">
            Cari Pekerja Sekarang <ArrowRight />
          </Button>
          <Button variant="soft" size="xl">Daftar Jadi Pekerja</Button>
        </div>
        <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {["bg-accent", "bg-trust", "bg-foreground", "bg-muted-foreground"].map((c, i) => (
              <div key={i} className={`h-8 w-8 rounded-full ${c} border-2 border-background`} />
            ))}
          </div>
          <span><strong className="text-foreground">2.400+</strong> pekerja aktif di sekitar Anda</span>
        </div>
      </div>

      {/* Hero mockup */}
      <div className="relative">
        <div className="absolute -top-6 -right-6 h-40 w-40 bg-accent/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -left-8 h-48 w-48 bg-trust/30 rounded-full blur-3xl" />
        <div className="relative bg-card rounded-3xl shadow-card border border-border p-5 md:p-6">
          <div className="text-xs text-muted-foreground">Pilih kategori</div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Potong Rumput", "Cuci Mobil", "Angkut Barang"].map((s, i) => (
              <div key={s} className={`text-xs font-medium px-3 py-3 rounded-xl text-center border ${i === 0 ? "bg-accent/20 border-accent" : "bg-secondary border-border"}`}>{s}</div>
            ))}
          </div>
          <div className="mt-5 text-xs text-muted-foreground">Pekerja terdekat</div>
          <div className="mt-3 space-y-3">
            {[
              { name: "Budi S.", rating: 4.9, dist: "0.6 km", eta: "18 mnt", price: "Rp60–80rb" },
              { name: "Andre P.", rating: 4.8, dist: "1.2 km", eta: "25 mnt", price: "Rp65–85rb" },
              { name: "Rian K.", rating: 4.7, dist: "1.8 km", eta: "30 mnt", price: "Rp55–75rb" },
            ].map((w, i) => (
              <div key={w.name} className="flex items-start gap-3 p-3 rounded-2xl border border-border hover:border-accent transition-colors bg-background/60">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-accent to-trust grid place-items-center font-bold text-foreground/90 shrink-0">{w.name[0]}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{w.name}</span>
                    <span className="inline-flex items-center gap-0.5 text-xs"><Star className="h-3 w-3 fill-accent text-accent" /> {w.rating}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-trust/15 text-trust font-medium"><BadgeCheck className="h-3 w-3" /> Verified</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {w.dist} • <Clock className="h-3 w-3 ml-1" /> {w.eta}</div>
                  <div className="text-xs font-medium mt-0.5">{w.price}</div>
                </div>
                {i === 0 && <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-foreground font-medium self-center">Tersedia</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
