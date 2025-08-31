import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LayoutTemplate, Smartphone, Megaphone, Cloud, Bot } from "lucide-react";

const products = [
  {
    icon: <LayoutTemplate className="h-10 w-10 text-fuchsia-400 mb-4" />,
    title: "Website Development Kit",
    description: "A complete solution to design and launch responsive startup websites.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-fuchsia-400 mb-4" />,
    title: "Mobile App Starter Pack",
    description: "Tools and templates for building Android and iOS apps quickly.",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-fuchsia-400 mb-4" />,
    title: "Digital Marketing Toolkit",
    description: "Branding, social media setup, and marketing strategies for growth.",
  },
  {
    icon: <Cloud className="h-10 w-10 text-fuchsia-400 mb-4" />,
    title: "Cloud Hosting & Deployment",
    description: "Scalable and secure hosting solutions for startups.",
  },
  {
    icon: <Bot className="h-10 w-10 text-fuchsia-400 mb-4" />,
    title: "AI-Powered Business Assistant",
    description: "Smart automation for customer support and business operations.",
  },
];

const Product = () => {
  return (
    <section id="product" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-100">Our Flagship Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 md:text-xl">
            Discover our suite of products designed to empower your business.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-slate-900/50 border border-fuchsia-500/30 hover:border-fuchsia-500 transition-all duration-300 hover:-translate-y-1 hover:[box-shadow:0_0_15px_theme(colors.fuchsia.500)]">
              {product.icon}
              <CardHeader>
                <CardTitle className="text-slate-100">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;