import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-white">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to book a machine or have a question about our services? Fill out the form below and we'll get back to you faster than a multiball.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call Us", value: "0400 123 456" },
                { icon: Mail, label: "Email Us", value: "info@pinballn.com.au" },
                { icon: MapPin, label: "Location", value: "Melbourne, Victoria (Delivery Only)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-white/5">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-lg font-bold text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-background/50 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-white/10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="0400..." className="bg-background/50 border-white/10" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Event Type</Label>
                  <select className="flex h-9 w-full rounded-md border border-white/10 bg-background/50 px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-foreground">
                    <option>Private Party</option>
                    <option>Corporate Event</option>
                    <option>Long Term Hire</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your event..." className="min-h-[120px] bg-background/50 border-white/10" />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-700 text-white font-bold py-6 text-lg shadow-lg">
                  Send Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
