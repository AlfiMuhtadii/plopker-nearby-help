import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Pilih kebutuhan", desc: "Tentukan kategori jasa yang Anda butuhkan." },
  { n: "02", title: "Isi detail pekerjaan", desc: "Jelaskan lokasi, ukuran area, dan waktu yang diinginkan." },
  { n: "03", title: "Dapatkan worker terdekat", desc: "Sistem mencocokkan pekerja terverifikasi di sekitar Anda." },
  { n: "04", title: "Selesai dan beri rating", desc: "Konfirmasi pekerjaan, bayar, dan beri rating." },
];

export const HowItWorks = () => (
  <section id="cara-kerja" className="bg-card border-y border-border">
    <div className="container mx-auto py-24 md:py-32">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">Cara Kerja</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
          Empat langkah, beres.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          Dari pesan sampai selesai, semua transparan dan terasa mudah.
        </p>
      </Reveal>

      <StaggerGroup className="mt-16 grid md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-7 left-12 right-12 h-px border-t border-dashed border-border" />
        {steps.map((s) => (
          <motion.div key={s.n} variants={staggerItem} className="relative">
            <div className="h-14 w-14 rounded-2xl bg-accent text-accent-foreground grid place-items-center font-bold shadow-glow text-lg">
              {s.n}
            </div>
            <h3 className="mt-5 font-semibold text-xl">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </StaggerGroup>
    </div>
  </section>
);
