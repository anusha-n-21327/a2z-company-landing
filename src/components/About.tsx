import { Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rounded-full bg-cyan-900/50 p-3 mb-4 border border-cyan-500/30">
            <Target className="h-8 w-8 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-100">About Our Mission</h2>
          <div className="mt-6 space-y-4 text-slate-400 md:text-lg">
            <p>
              At A2Z Company, we are a team of passionate innovators committed to shaping the future with cutting-edge technology and creative solutions. Our mission is to empower individuals and businesses by delivering transformative products and services that inspire growth, efficiency, and long-term value.
            </p>
            <p>
              From ideation to execution, we work closely with our clients and communities to understand their needs, overcome challenges, and build tailor-made solutions that truly make an impact. Guided by innovation, trust, and excellence, A2Z Company strives to be a leader in creating meaningful change for a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;