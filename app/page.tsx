
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import PromoBanners from "@/components/layout/PromoBanners";
import ShopByCategory from "@/components/layout/ShopByCategory";
import PopularProducts from "@/components/layout/PopularProducts";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <PromoBanners />
        <ShopByCategory />
        <PopularProducts />
      </main>
    </>
  );
}
