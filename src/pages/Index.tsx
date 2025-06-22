import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBases from "@/components/FeaturedBases";
import FishingTips from "@/components/FishingTips";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedBases />
      <FishingTips />
      <Footer />
    </div>
  );
};

export default Index;
