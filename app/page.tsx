
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import PromoBanners from "@/components/layout/PromoBanners";
import ShopByCategory from "@/components/layout/ShopByCategory";
import PopularProducts from "@/components/layout/PopularProducts";
import LocalStores from "@/components/layout/LocalStores";
import SpecialOffers from "@/components/layout/SpecialOffers";
import WhyShopWithUs from "@/components/layout/WhyShopWithUs";
import HowItWorks from "@/components/layout/HowItWorks";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <PromoBanners />
        <ShopByCategory />
        <PopularProducts />
        <LocalStores />
        <SpecialOffers />
        <WhyShopWithUs />
        <HowItWorks />
      </main>

      <Footer />
    </>
  );
}
