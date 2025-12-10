import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, Settings, Zap } from "lucide-react";
import heroImage from "@assets/generated_images/cinematic_shot_of_a_retro_pinball_arcade_with_neon_lights.png";
import detailImage from "@assets/generated_images/close_up_of_a_pinball_machine_flipper_and_ball.png";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Retro Arcade" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        </div>

        <div className="container relative z-10 px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                LEVEL UP <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary text-glow">
                  YOUR EVENT
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Melbourne's premier pinball machine hire. We bring the nostalgic arcade experience directly to your party, office, or function.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/hire">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-white text-lg px-8 py-6 rounded-full shadow-[0_0_20px_theme('colors.primary')] hover:shadow-[0_0_40px_theme('colors.primary')] transition-all duration-300">
                  <Zap className="mr-2 fill-current" />
                  View Machines
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-full hover:border-white transition-all">
                  Get a Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative bg-card/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">WHY CHOOSE <span className="text-secondary">PINBALLN?</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-10 h-10 text-primary" />,
                title: "Premium Machines",
                desc: "Meticulously maintained collection of classic and modern pinball titles."
              },
              {
                icon: <Truck className="w-10 h-10 text-secondary" />,
                title: "Delivery & Setup",
                desc: "We handle everything. Full delivery, installation, and leveling at your venue."
              },
              {
                icon: <Settings className="w-10 h-10 text-accent" />,
                title: "Flexible Hire",
                desc: "Single night hire for parties to monthly rentals for office entertainment."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-background/50 border border-white/5 p-8 rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                BRING THE <br/>
                <span className="text-primary">ARCADE</span> HOME
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're hosting a 40th birthday bash, a corporate Christmas party, or just want to add some retro flair to your break room, our machines are the perfect ice breaker.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Free play setup - no coins needed",
                  "Demonstration on delivery",
                  "24/7 technical support",
                  "Wide range of themes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white/80">
                    <div className="w-2 h-2 rounded-full bg-secondary mr-3 shadow-[0_0_5px_theme('colors.secondary')]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/hire">
                <Button className="text-white border-b-2 border-primary pb-1 rounded-none px-0 hover:text-primary transition-all text-lg h-auto hover:bg-transparent">
                  Browse Collection <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 rounded-full" />
              <img 
                src={detailImage} 
                alt="Pinball Detail" 
                className="relative z-10 rounded-2xl border border-white/10 shadow-2xl w-full max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
        <div className="container relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">PLAY?</span></h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Book your machine today and secure the ultimate entertainment for your next event.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-background hover:bg-gray-200 font-bold text-xl px-12 py-8 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
