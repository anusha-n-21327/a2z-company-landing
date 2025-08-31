const Research = () => {
  return (
    <section id="researches" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-100">Our Research & Client Collaborations</h2>
            <p className="text-slate-400 md:text-lg">
              At A2Z Company, our research goes beyond theories — it is rooted in real-world collaborations. We believe that innovation happens when technology meets people’s true needs.
            </p>
            <p className="text-slate-400 md:text-lg">
              Through meaningful conversations with our clients, we have studied their challenges, understood their vision, and worked together to create solutions that drive success. Our research is not limited to papers or labs; it is the continuous process of learning from every project, refining ideas, and delivering results that truly make a difference.
            </p>
            <p className="text-slate-400 md:text-lg">
              Every client story is a reflection of our mission — to empower individuals and businesses with transformative solutions that help them achieve what they aspire to.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team collaborating on a futuristic interface"
              className="rounded-lg w-full h-auto max-w-md object-cover border-2 border-lime-500/50 [box-shadow:0_0_20px_theme(colors.lime.500)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;