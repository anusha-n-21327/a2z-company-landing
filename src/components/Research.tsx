import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Lightbulb, FlaskConical } from "lucide-react";

const researchItems = [
  {
    icon: <FileText className="h-8 w-8 text-lime-400" />,
    title: "AI-Driven Predictive Analytics",
    description: "Published a groundbreaking paper on using machine learning models to predict market trends with over 95% accuracy, now a core component of Synapse AI.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-lime-400" />,
    title: "Quantum-Resistant Encryption",
    description: "Led the development of a novel encryption algorithm for Aegis Security, ensuring data protection against emerging threats from quantum computing.",
  },
  {
    icon: <FlaskConical className="h-8 w-8 text-lime-400" />,
    title: "Decentralized Application Frameworks",
    description: "Pioneered research into scalable and efficient frameworks for decentralized applications, which became the foundation for the Quantum Core platform.",
  },
];

const Research = () => {
  return (
    <section id="researches" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-100">Research Work of CEO & Founder – Anusha</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 md:text-xl">
            Anusha's innovative research contributions have been instrumental in shaping the technological landscape and driving A2Z Company's success.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {researchItems.map((item, index) => (
            <Card key={index} className="bg-slate-900/50 border border-lime-500/30 hover:border-lime-500 transition-all duration-300 hover:-translate-y-1 hover:[box-shadow:0_0_15px_theme(colors.lime.500)]">
              <CardHeader className="flex flex-col items-center text-center">
                {item.icon}
                <CardTitle className="mt-4 text-slate-100">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;