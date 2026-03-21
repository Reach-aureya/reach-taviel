import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Faster Design & Iteration",
      description:
        "Quickly create, modify, and test multiple bag designs, colorways, and styles using layered editing, reducing time from concept to final visual."
    },
    {
      icon: Users,
      title: "Realistic Bag Visuals",
      description:
        "Generate high-quality mockups with textures, shadows, materials, and branding that are perfect for e-commerce, catalogs, and presentations."
    },
    {
      icon: TrendingUp,
      title: "Stronger Brand Identity",
      description:
        "Apply consistent branding, colors, and graphics across bags and packaging to build a strong and recognizable brand presence."
    },
    {
      icon: Star,
      title: "Reduced Sampling Effort",
      description:
        "Visualize designs digitally before production to minimize unnecessary samples, saving time, cost, and effort."
    },
    {
      icon: Clock,
      title: "Marketing-Ready Assets",
      description:
        "Create visuals for social media, campaigns, and product listings directly from design files without needing separate tools."
    },
    {
      icon: Users,
      title: "Better Team Collaboration",
      description:
        "Share clear and detailed visuals across design, merchandising, and production teams to improve communication and faster decision-making."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-teal-800">
          Benefits of REACH Taviel
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Best In Class Taviel Bags Design Software
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-50 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-400 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;