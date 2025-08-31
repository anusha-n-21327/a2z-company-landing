const Research = () => {
  return (
    <section id="researches" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-100">Our Researchers: A Collaboration-Driven Approach</h2>
            <p className="text-slate-400 md:text-lg">
              At A2Z Company, our research is a unique partnership between our CEO, Anusha, and the clients we serve. We believe that true innovation comes not from isolated labs, but from real-world collaboration and understanding the challenges our clients face every day.
            </p>
            <p className="text-slate-400 md:text-lg">
              Anusha works directly with clients, treating them as co-researchers in the development process. Through these meaningful conversations, we study their challenges, understand their vision, and work together to create solutions that drive success. This continuous process of learning from every project allows us to refine ideas and deliver results that truly make a difference.
            </p>
            <p className="text-slate-400 md:text-lg">
              Every product we build is a reflection of this collaborative spirit. The stories of our clients are woven into the DNA of A2Z Company, a testament to our mission of empowering individuals and businesses with transformative solutions.
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