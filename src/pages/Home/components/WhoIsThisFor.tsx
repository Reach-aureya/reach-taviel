const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Taviel For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Taviel for Bags Design is built for brands, manufacturers, and creative teams who need to design, visualize, and present bags with speed, accuracy, and strong visual impact.
        </p>

        {/* Fashion brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Fashion bag and accessory brands
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Brands developing handbags, backpacks, luggage, and accessories with strong visual storytelling and fast trend adaptation.
            </li>
            <li>
              Teams that need high-quality visuals for campaigns, e-commerce, and internal approvals.
            </li>
          </ul>
        </div>

        {/* Manufacturers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            OEM / ODM manufacturers and suppliers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Manufacturers creating design proposals and mockups for global clients and brands.
            </li>
            <li>
              Teams needing clear visuals to reduce sampling errors and speed up development cycles.
            </li>
          </ul>
        </div>

        {/* Corporate gifting */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Corporate gifting and promotional companies
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Companies designing branded tote bags, laptop bags, and promotional merchandise.
            </li>
            <li>
              Teams that need to quickly create logo placements, variations, and client-ready presentations.
            </li>
          </ul>
        </div>

        {/* Retail & ecommerce */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Retailers and e-commerce brands
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Online and offline brands creating product visuals, mockups, and marketing creatives for sales.
            </li>
            <li>
              Teams focused on improving product presentation and conversion through strong visuals.
            </li>
          </ul>
        </div>

        {/* Agencies */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Packaging, branding, and creative agencies
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Agencies designing shopping bags, packaging visuals, and brand campaigns.
            </li>
            <li>
              Teams creating cohesive branding across products and marketing touchpoints.
            </li>
          </ul>
        </div>

        {/* Designers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Surface pattern and graphic designers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Designers creating prints, patterns, and graphics for bags and accessories.
            </li>
            <li>
              Professionals who want to test artwork directly on realistic bag mockups.
            </li>
          </ul>
        </div>

        {/* Studios */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design studios and freelancers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Creative studios delivering bag designs, presentations, and marketing assets for multiple clients.
            </li>
            <li>
              Freelancers looking to produce high-quality visuals and scale their design workflow.
            </li>
          </ul>
        </div>

        {/* Marketing */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            In-house marketing and content teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Teams creating campaign visuals, social media creatives, and product imagery.
            </li>
            <li>
              Professionals ensuring consistent brand identity across all marketing channels.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design institutes and training centres
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Institutes teaching bag design, digital visualization, and accessory workflows.
            </li>
            <li>
              Training programs preparing students for real-world fashion and accessories industries.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;