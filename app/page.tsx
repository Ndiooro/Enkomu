import { AppShowcase } from "@/components/enkomu/AppShowcase";
import { Audience } from "@/components/enkomu/Audience";
import { Footer } from "@/components/enkomu/Footer";
import { Header } from "@/components/enkomu/Header";
import { Hero } from "@/components/enkomu/Hero";
import { LaunchSignup } from "@/components/enkomu/LaunchSignup";
import { enkomuFont } from "@/components/enkomu/font";
import "./enkomu.css";

export default function HomePage() {
  return (
    <main className={`enkomu-page ${enkomuFont.variable}`}>
      <Header />
      <Hero />
      <AppShowcase />
      <Audience /> 
      <LaunchSignup />
      <Footer />
    </main>
  );
}
