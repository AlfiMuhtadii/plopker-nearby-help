import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 md:p-16 text-center">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-trust/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Mulai dari lingkungan terdekat Anda.</h2>
          <p className="mt-4 text-background/70 text-lg max-w-2xl mx-auto">
            Plopker membantu kebutuhan rumah harian menjadi lebih cepat, jelas, dan terpercaya.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="accent" size="xl" onClick={() => navigate("/request")}>Cari Bantuan Sekarang <ArrowRight /></Button>
            <Button variant="soft" size="xl" onClick={() => navigate("/worker/register")}>Daftar Jadi Pekerja</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
