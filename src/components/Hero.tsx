import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-lime-400">
            Complete Solutions, from A to Z.
          </h1>
          <p className="mt-6 text-lg text-slate-400 md:text-xl">
            A2Z Company is at the forefront of technological advancement, creating solutions that shape tomorrow's world.
          </p>
          <div className="mt-8">
            <a href="#contact">
              <Button size="lg" className="bg-cyan-500 text-slate-900 font-bold shadow-lg transform transition-all hover:scale-105 hover:bg-cyan-400 [box-shadow:0_0_15px_theme(colors.cyan.500)] hover:[box-shadow:0_0_25px_theme(colors.cyan.400)]">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;