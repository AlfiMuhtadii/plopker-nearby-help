import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";

export const WorkerSection = () => (
  <section id="pekerja" className="container mx-auto py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <p className="text-sm font-semibold text-accent uppercase tracking-wider">Untuk Pekerja</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">Punya waktu luang? Ambil pekerjaan di sekitar Anda.</h2>
      <p className="mt-4 text-muted-foreground text-lg">
        Pekerja dapat mengatur radius kerja, memilih kategori jasa, menerima pekerjaan sesuai kemampuan,
        dan membangun reputasi dari rating customer.
      </p>
      <Button variant="accent" size="xl" className="mt-7">Daftar Jadi Pekerja <ArrowRight /></Button>
    </div>
    <div className="grid sm:grid-cols-2 gap-4">
      {[
        { icon: MapPin, label: "Radius kerja", value: "Atur 1–10 km" },
        { icon: Clock, label: "Jam kerja", value: "Fleksibel" },
        { icon: Star, label: "Rating rata-rata", value: "4.8 / 5.0" },
        { icon: ArrowRight, label: "Penghasilan / minggu", value: "Rp350–900rb" },
      ].map((s) => (
        <div key={s.label} className="bg-card rounded-2xl p-5 border border-border shadow-soft">
          <s.icon className="h-5 w-5 text-accent" />
          <div className="mt-3 text-xs text-muted-foreground">{s.label}</div>
          <div className="mt-1 font-bold text-lg">{s.value}</div>
        </div>
      ))}
    </div>
  </section>
);
