import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Scaling } from "lucide-react";

const aboutItems = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "User-Centric",
    description: "Our products are designed with the user in mind, ensuring an intuitive and seamless experience.",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: "Scalability",
    description: "We build robust and scalable solutions that grow with your business, ensuring long-term success.",
  },
];

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose A2Z Company?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            We are dedicated to providing innovative solutions that drive progress and success.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {aboutItems.map((item, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                {item.icon}
                <CardTitle className="mt-4">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;