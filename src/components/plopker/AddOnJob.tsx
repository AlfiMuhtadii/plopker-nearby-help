import { Check } from "lucide-react";

export const AddOnJob = () => (
  <section className="container mx-auto py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
    <div className="lg:order-2">
      <p className="text-sm font-semibold text-accent uppercase tracking-wider">Add-on Job</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">Pekerjaan tambahan tetap tercatat di sistem.</h2>
      <p className="mt-4 text-muted-foreground text-lg">
        Jika di lokasi ternyata butuh tambahan seperti siram tanaman atau bersih halaman, pekerja dapat
        menambahkan layanan tambahan dan customer menyetujuinya langsung dari aplikasi.
      </p>
    </div>
    <div className="lg:order-1">
      <div className="bg-card rounded-3xl border border-border shadow-card p-6 max-w-md">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Invoice #PLK-0421</span>
          <span className="px-2 py-1 rounded-full bg-trust/15 text-trust font-medium">Disetujui</span>
        </div>
        <div className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between"><span>Potong rumput</span><span className="font-medium">Rp60.000</span></div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">Bersih halaman <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/20 text-foreground font-medium">Add-on</span></span>
            <span className="font-medium">Rp25.000</span>
          </div>
          <div className="border-t border-dashed border-border pt-3 flex justify-between font-bold text-base">
            <span>Total</span><span>Rp85.000</span>
          </div>
        </div>
        <button className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-trust text-trust-foreground font-semibold rounded-xl py-3 text-sm">
          <Check className="h-4 w-4" /> Setujui Tambahan
        </button>
      </div>
    </div>
  </section>
);
