import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <Avatar className="w-64 h-64 border-4 border-purple-300">
              <AvatarImage src="https://i.pravatar.cc/300?u=anusha" alt="Anusha, CEO & Founder" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About the CEO & Founder – Anusha</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Anusha is a visionary leader with a passion for innovation and a drive to create technology that empowers people. Her leadership at A2Z Company is guided by a commitment to excellence and a future-forward approach, aiming to solve complex challenges with elegant, user-centric solutions.
            </p>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Under her guidance, A2Z has grown from a small startup to a key player in the tech industry, consistently pushing the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;