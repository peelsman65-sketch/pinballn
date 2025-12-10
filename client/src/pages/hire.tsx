import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Hire() {
  const machines = [
    { title: "Twilight Zone", type: "Premium", price: "From $350" },
    { title: "Addams Family", type: "Premium", price: "From $350" },
    { title: "Fish Tales", type: "Standard", price: "From $290" },
    { title: "Terminator 2", type: "Standard", price: "From $290" },
    { title: "Star Trek TNG", type: "Premium", price: "From $350" },
    { title: "Getaway", type: "Standard", price: "From $290" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-white">Hire <span className="text-primary">Machines</span></h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.map((machine, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-white/5 rounded-xl overflow-hidden group hover:border-primary/50 transition-all"
            >
              <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-100 opacity-50 transition-opacity" />
                 <span className="relative z-10 text-4xl font-display font-bold text-white/20 group-hover:text-white/40 transition-colors">
                   {machine.title.substring(0, 2)}
                 </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{machine.title}</h3>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded uppercase tracking-wider">{machine.type}</span>
                </div>
                <p className="text-muted-foreground mb-6">Ideally suited for themed parties and retro enthusiasts. Features classic gameplay and stunning artwork.</p>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span className="text-xl font-bold text-white">{machine.price}</span>
                  <Link href="/contact">
                    <Button variant="ghost" className="text-secondary hover:text-white hover:bg-secondary/20">Book Now</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
