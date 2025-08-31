import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Product from "@/components/Product";
import Research from "@/components/Research";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-50 dark:bg-slate-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Product />
        <Research />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;