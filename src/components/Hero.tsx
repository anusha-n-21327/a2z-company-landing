import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500">
            Innovating the Future, Today.
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            InnovateX is at the forefront of technological advancement, creating solutions that shape tomorrow's world.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold shadow-lg transform hover:scale-105 transition-transform">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;