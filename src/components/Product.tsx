import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Bot, ShieldCheck } from "lucide-react";

const products = [
  {
    icon: <Code className="h-10 w-10 text-primary mb-4" />,
    title: "Quantum Core",
    description: "A revolutionary development platform for building next-gen applications with unprecedented speed and efficiency.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary mb-4" />,
    title: "Synapse AI",
    description: "An advanced AI assistant that automates complex tasks, providing intelligent insights and boosting productivity.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary mb-4" />,
    title: "Aegis Security",
    description: "A comprehensive security suite that protects your digital assets with proactive threat detection and response.",
  },
];

const Product = () => {
  return (
    <section id="product" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Flagship Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Discover our suite of products designed to empower your business.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
              {product.icon}
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;