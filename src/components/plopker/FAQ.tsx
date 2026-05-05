import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Bagaimana harga ditentukan?",
    a: "Anda akan melihat estimasi harga sebelum memesan. Pekerja dapat menyesuaikan harga setelah melihat lokasi, dan Anda harus menyetujuinya sebelum pekerjaan dimulai.",
  },
  {
    q: "Apakah pekerja diverifikasi?",
    a: "Ya. Setiap pekerja melewati verifikasi identitas dan dinilai melalui rating customer untuk membangun reputasi.",
  },
  {
    q: "Bagaimana jika saya butuh pekerjaan tambahan saat pekerja sudah di lokasi?",
    a: "Pekerja dapat menambahkan layanan add-on dari aplikasi. Anda menyetujuinya terlebih dulu, dan tagihan otomatis terupdate.",
  },
  {
    q: "Apakah ada biaya pembatalan?",
    a: "Pembatalan sebelum pekerja berangkat tidak dikenakan biaya. Setelah pekerja berangkat, akan ada biaya transportasi minimum.",
  },
  {
    q: "Area mana saja yang sudah tersedia?",
    a: "Saat ini Plopker fokus melayani area perkotaan. Anda dapat mengecek ketersediaan langsung dari halaman pemesanan.",
  },
];

export const FAQ = () => (
  <section className="bg-card border-y border-border">
    <div className="container mx-auto py-16 md:py-20 grid lg:grid-cols-[0.9fr_1.4fr] gap-10 items-start">
      <div>
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">FAQ</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
          Pertanyaan yang sering ditanyakan.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Belum menemukan jawabannya? Hubungi tim kami melalui halaman bantuan.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`item-${i}`}
            className="border border-border rounded-2xl mb-3 bg-background/60 px-5 data-[state=open]:shadow-soft data-[state=open]:border-accent/60 transition-all"
          >
            <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
