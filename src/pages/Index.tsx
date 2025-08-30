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
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-50 via-blue-50 to-white dark:from-purple-900/20 dark:via-blue-900/20 dark:to-gray-950 -z-10" />
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