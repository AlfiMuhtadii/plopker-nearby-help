const steps = [
  { n: "01", title: "Pilih kebutuhan", desc: "Tentukan kategori jasa yang Anda butuhkan." },
  { n: "02", title: "Isi detail pekerjaan", desc: "Jelaskan lokasi, ukuran area, dan waktu yang diinginkan." },
  { n: "03", title: "Dapatkan worker terdekat", desc: "Sistem mencocokkan pekerja terverifikasi di sekitar Anda." },
  { n: "04", title: "Selesai dan beri rating", desc: "Konfirmasi pekerjaan, bayar, dan beri rating." },
];

export const HowItWorks = () => (
  <section id="cara-kerja" className="bg-card border-y border-border">
    <div className="container mx-auto py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">Cara Kerja</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Empat langkah, beres.</h2>
      </div>
      <div className="mt-12 grid md:grid-cols-4 gap-6 relative">
        <div className="hidden md:block absolute top-6 left-12 right-12 h-px border-t border-dashed border-border" />
        {steps.map((s) => (
          <div key={s.n} className="relative">
            <div className="h-12 w-12 rounded-2xl bg-accent text-accent-foreground grid place-items-center font-bold shadow-glow">{s.n}</div>
            <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
