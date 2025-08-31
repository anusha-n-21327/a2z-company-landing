import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users } from "lucide-react";

const teamMembers = [
  {
    icon: <User className="h-10 w-10 text-cyan-400 mb-4" />,
    name: "Anusha",
    role: "CEO & Founder",
    description: "Anusha believes research is not just theory but learning through real-world collaborations. By working closely with clients, she studies their challenges, designs innovative solutions, and transforms their vision into reality.",
  },
  {
    icon: <Users className="h-10 w-10 text-cyan-400 mb-4" />,
    name: "A2Z Research Team",
    role: "Innovators & Collaborators",
    description: "A passionate group of thinkers and developers dedicated to exploring new technologies, refining ideas, and building impactful solutions that empower businesses and communities.",
  },
];

const Research = () => {
  return (
    <section id="researches" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-100">Our Research & Collaborations</h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-400 md:text-xl">
            Exploring ideas and building real-world solutions through client-focused innovation.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-slate-900/50 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:[box-shadow:0_0_15px_theme(colors.cyan.500)]">
              {member.icon}
              <CardHeader>
                <CardTitle className="text-slate-100 text-2xl">{member.name}</CardTitle>
                <p className="text-cyan-400 font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;