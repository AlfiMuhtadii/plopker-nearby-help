import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageShell } from "@/components/plopker/PageShell";
import { Star, ArrowRight } from "lucide-react";

const RegisterWorker = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [radius, setRadius] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !radius) {
      toast.error("Mohon lengkapi semua data terlebih dahulu.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Pendaftaran terkirim!", {
        description: "Tim kami akan memverifikasi data Anda dalam 1x24 jam.",
      });
      setTimeout(() => navigate("/"), 1200);
    }, 1100);
  };

  return (
    <PageShell
      eyebrow="Worker Flow"
      title="Daftar Pekerja"
      subtitle="Ambil pekerjaan di sekitar Anda dan bangun reputasi dari rating."
    >
      <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Nama lengkap</Label>
          <Input
            id="name"
            placeholder="Nama sesuai KTP"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Nomor HP</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="08xxxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-12 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="radius">Radius kerja</Label>
          <Select value={radius} onValueChange={setRadius}>
            <SelectTrigger id="radius" className="h-12 rounded-xl">
              <SelectValue placeholder="Pilih radius" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 km</SelectItem>
              <SelectItem value="2">2 km</SelectItem>
              <SelectItem value="3">3 km</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start gap-2 text-sm bg-accent/15 text-foreground border border-accent/40 px-3 py-2.5 rounded-xl">
          <Star className="h-4 w-4 mt-0.5 shrink-0 fill-accent text-accent" />
          <span>Ambil pekerjaan di sekitar Anda dan bangun reputasi dari rating.</span>
        </div>

        <Button type="submit" variant="accent" size="xl" className="w-full" disabled={submitting}>
          {submitting ? "Mengirim..." : <>Daftar <ArrowRight /></>}
        </Button>
      </form>
    </PageShell>
  );
};

export default RegisterWorker;
