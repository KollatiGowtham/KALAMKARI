import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-bounce-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Reach out to us for any inquiries or support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
            {/* Left Card: Contact Information */}
            <div className="lg:col-span-2 bg-card rounded-2xl shadow-lg p-8 border border-border/50">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                We’d love to hear from you. Choose your preferred way to connect:
              </p>

              <div className="space-y-5">
                <a className="flex items-center gap-4 text-primary hover:text-primary/80 transition-colors group">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">Owner</p>
                    <p className="text-sm text-muted-foreground">Mr. Palla Suri Babu</p>
                  </div>
                </a>
                <a
                  href="tel:9912566016"
                  className="flex items-center gap-4 text-primary hover:text-primary/80 transition-colors group"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">9912566016</p>
                  </div>
                </a>

                <a
                  href="mailto:kkhandloom1983@gmail.com?subject=Inquiry&body=Hello KK Landlooms,%0D%0A%0D%0A"
                  className="flex items-center gap-3 sm:gap-4 text-primary hover:text-primary/80 transition-colors group"
                >
                  <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />  
                  </span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">kkhandloom1983@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/919912566016"
                  className="flex items-center gap-4 text-primary hover:text-primary/80 transition-colors group"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">9912566016</p>
                  </div>
                </a>
                <a
                  href="https://maps.app.goo.gl/eVAK522sYeNfA9Hs5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-primary hover:text-primary/80 transition-colors group"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full /10 group-hover:bg-primary/20 transition mt-1">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition mt-1">
                    <MapPin className="h-5 w-5" />
                  </span>
                  </span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm text-muted-foreground">
                    Gollapalem, V53C+Q47, Kakinada - Draksharama Rd, Gollapalem, Andhra Pradesh 533468
                    </p>
                  </div>
                </a>

                <div className="mt-6">
                  <iframe
                    title="KK Handlooms Location"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5400.165137161464!2d82.1702303470354!3d16.851470543422888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDUxJzA1LjciTiA4MsKwMTAnMTMuNCJF!5e0!3m2!1sen!2sin!4v1761720309973!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Response time: within 24 hours
                </p>
              </div>
            </div>

            {/* Right Card: Contact Form */}
            <div className="lg:col-span-3 bg-card rounded-2xl shadow-lg p-8 border border-border/50">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Send us a message</h3>
              <p className="text-muted-foreground mb-6">Fill out the form and we’ll get back to you shortly.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const { name, email, message } = formData;
                  const subject = encodeURIComponent(`Message from ${name}`);
                  const body = encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                  );
                  window.location.href = `mailto:kkhandloom1983@gmail.com?subject=${subject}&body=${body}`;
                  toast({
                    title: "Opening email client…",
                    description: "Complete the email to send your message.",
                  });
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="space-y-5"
              >
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

<ul className="space-y-2">
  <li>
    <a href="tel:+9912566016" className="flex items-center text-blue-900 hover:underline">
      <Phone className="mr-2" /> Phone: 9912566016
    </a>
  </li>
  <li>
    <a 
      href="tel:+919912566016" 
      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover-scale"
    >
      +91 9912566016
    </a>
  </li>
  <li>
    <a href="https://wa.me/919912566016" className="flex items-center text-blue-900 hover:underline">
      <MessageCircle className="mr-2" /> WhatsApp: 9912566016
    </a>
  </li>
</ul>

