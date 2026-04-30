import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CryptoTicker from "@/components/CryptoTicker";
import MapSection from "@/components/MapSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="w-full min-h-screen bg-brand-dark overflow-hidden">
      {/* Background gradient effects */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 0%, rgba(20,160,73,0.08) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <CryptoTicker />
        <MapSection />
        <WhyChooseUs />
        <ReviewsSection />
        <Footer />
      </div>
    </main>
  );
}
