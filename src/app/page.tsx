import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductCard from "@/components/ProductCard";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />

        {/* Product Section */}
        <section className="px-6 md:px-24 py-24 space-y-48" id="menu">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-headline text-5xl md:text-6xl text-center max-w-3xl">
              Doğayı Tabağınıza Taşıyoruz
            </h2>
          </div>

          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              reversed={index % 2 !== 0}
            />
          ))}
        </section>

        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
