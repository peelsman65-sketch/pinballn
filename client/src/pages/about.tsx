import Layout from "@/components/layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-5xl font-bold mb-8 text-white">About <span className="text-secondary">Pinballn</span></h1>
        <div className="prose prose-invert prose-lg">
          <p>
            Pinballn started from a genuine passion for arcade culture. What began as a personal collection has grown into Melbourne's premier pinball hire service.
          </p>
          <p>
            We believe that pinball is more than just a game—it's a tactile, physical experience that digital games simply can't replicate. The lights, the sounds, the mechanical feedback; it creates an atmosphere of excitement and nostalgia.
          </p>
          <p>
            Our mission is to share this joy by making high-quality, reliable machines accessible for everyone. Whether it's a corporate office looking to boost morale, or a 50th birthday party needing that "wow" factor, we have the perfect machine for you.
          </p>
          <h3 className="text-primary mt-8">Our Promise</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Immaculately maintained machines</li>
            <li>Prompt and professional delivery</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>Friendly support from real enthusiasts</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
