import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageShell } from "@/components/plopker/PageShell";
import { ShieldCheck, MapPin, ArrowRight } from "lucide-react";

const services = ["Potong Rumput", "Bersih Halaman", "Cuci Kendaraan"];

const RequestJob = () => {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service || !description.trim() || !location.trim()) {
      toast.error("Mohon lengkapi semua kolom terlebih dahulu.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Request terkirim!", {
        description: "Kami sedang mencarikan pekerja terdekat untuk Anda.",
      });
      setTimeout(() => navigate("/"), 1200);
    }, 1100);
  };

  return (
    <PageShell
      eyebrow="Customer Flow"
      title="Cari Pekerja"
      subtitle="Jelaskan pekerjaan yang dibutuhkan, sistem mencarikan pekerja terdekat dan terverifikasi."
    >
      <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="service">Jenis layanan</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service" className="h-12 rounded-xl">
              <SelectValue placeholder="Pilih layanan" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="desc">Deskripsi pekerjaan</Label>
          <Textarea
            id="desc"
            placeholder="Jelaskan pekerjaan..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-32 rounded-xl resize-none"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="loc">Lokasi</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="loc"
              placeholder="Contoh: Jl. Merdeka No.10, Bandung"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-12 rounded-xl pl-9"
            />
          </div>
        </div>

        <div className="flex items-start gap-2 text-sm bg-trust/10 text-trust border border-trust/20 px-3 py-2.5 rounded-xl">
          <ShieldCheck className="h-4 w-4 mt-0.5 shrink-0" />
          <span>Harga final akan dikonfirmasi sebelum pekerjaan dimulai.</span>
        </div>

        <Button type="submit" variant="accent" size="xl" className="w-full" disabled={submitting}>
          {submitting ? "Mengirim..." : <>Kirim Request <ArrowRight /></>}
        </Button>
      </form>
    </PageShell>
  );
};

export default RequestJob;
