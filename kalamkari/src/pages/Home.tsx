import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Palette } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/kalamkari-hero.jpg";
import saree10 from "@/assets/saree10.jpg";
import dressmaterial from "@/assets/dm6.jpg";
import dupatta from "@/assets/duppata45.jpg";
import bg12 from "@/assets/bg12.jpg";
import bg13 from "@/assets/bg13.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              The Ancient Art of Kalamkari
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience the timeless beauty of traditional hand-painted and
              block-printed textiles. Each piece tells a story of centuries-old
              Indian craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto hover-lift">
                <Link to="/clothing">
                  Explore Collection <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto hover-scale">
                <Link to="/about">Our Heritage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20 bg-secondary/30 relative overflow-hidden"
        style={{ backgroundImage: `url('@/assets/.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* subtle animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4 animate-typing">
              The Kalamkari Legacy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-in-up">
              Kalamkari, meaning "pen work" in Persian, is a 3,000-year-old art
              form from India that uses natural dyes and hand-painting or
              block-printing techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-6 md:p-8 bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover-lift animate-fade-in-up group">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4 animate-bounce-in group-hover:scale-110 transition-transform duration-300">
                <Palette className="h-7 w-7 md:h-8 md:w-8 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                Natural Dyes
              </h3>
              <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Made using traditional vegetable dyes extracted from roots,
                leaves, and minerals—completely eco-friendly and sustainable.
              </p>
            </div>

            <div
              className="text-center p-6 md:p-8 bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover-lift animate-fade-in-up group"
              style={{ animationDelay: '0.1s' }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4 animate-bounce-in group-hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: '0.1s' }}
              >
                <Heart className="h-7 w-7 md:h-8 md:w-8 group-hover:animate-pulse" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                Handcrafted Excellence
              </h3>
              <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Each piece is meticulously created by skilled artisans who have
                inherited this craft through generations of families.
              </p>
            </div>

            <div
              className="text-center p-6 md:p-8 bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover-lift animate-fade-in-up group"
              style={{ animationDelay: '0.2s' }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4 animate-bounce-in group-hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: '0.2s' }}
              >
                <Sparkles className="h-7 w-7 md:h-8 md:w-8 group-hover:animate-spin-slow" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                Cultural Heritage
              </h3>
              <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Every motif—peacocks, paisleys, lotus flowers—carries deep
                cultural significance and mythological stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/src/assets/.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Floating subtle pattern animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4 animate-typing">
              Our Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up">
              From elegant sarees to contemporary kurtas, discover authentic
              Kalamkari handlooms for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <Link
              to="/clothing"
              className="group relative overflow-hidden rounded-xl shadow-2xl hover-lift animate-slide-in-left transition-all duration-300 hover:shadow-3xl"
            >
              <div className="aspect-[3/4] relative overflow-hidden">


                <img
                  src={saree10}
                  alt="Kalamkari Saree"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <span className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white drop-shadow-2xl group-hover:scale-125 transition-transform duration-500">
                  Sarees
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex items-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-foreground font-semibold text-base md:text-lg animate-fade-in-up">
                  Traditional Elegance →
                </p>
              </div>
            </Link>

            <Link
              to="/clothing"
              className="group relative overflow-hidden rounded-xl shadow-2xl hover-lift animate-slide-in-left transition-all duration-300 hover:shadow-3xl"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={dressmaterial}
                  alt="Kalamkari Kurta"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <span className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white drop-shadow-2xl group-hover:scale-125 transition-transform duration-500">
                  Kurtas
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex items-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-foreground font-semibold text-base md:text-lg animate-fade-in-up">
                  Ethnic Comfort →
                </p>
              </div>
            </Link>

            <Link
              to="/clothing"
              className="group relative overflow-hidden rounded-xl shadow-2xl hover-lift animate-slide-in-left sm:col-span-2 md:col-span-1 transition-all duration-300 hover:shadow-3xl"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={dupatta}
                  alt="Kalamkari Dupatta"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <span className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white drop-shadow-2xl group-hover:scale-125 transition-transform duration-500">
                  Dupattas
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex items-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-foreground font-semibold text-base md:text-lg animate-fade-in-up">
                  Graceful Drapes →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Kalamkari */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div className="max-w-3xl text-center lg:text-left">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                Why Choose Kalamkari?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 animate-fade-in leading-relaxed">
                Kalamkari is not just clothing—it&apos;s wearable art. Each garment is
                a masterpiece created using techniques that have remained unchanged
                for over 3,000 years. When you wear Kalamkari, you carry forward a
                legacy of Indian craftsmanship, support local artisans, and make a
                sustainable fashion choice.
              </p>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in leading-relaxed">
                The intricate patterns of peacocks, paisleys, and floral motifs are
                not merely decorative—they symbolize prosperity, spirituality, and
                the beauty of nature in Indian culture.
              </p>
              <Button asChild variant="hero" size="lg" className="animate-fade-in">
                <Link to="/clothing">
                  Discover Our Handlooms <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            {/* Right: Image */}
            <div className="relative overflow-hidden rounded-lg shadow-xl animate-fade-in">
              <img
                src={bg12}
                alt="Artisan hand-painting Kalamkari fabric"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from our happy customers who love our authentic Kalamkari handlooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up">
              <p className="text-sm md:text-base text-muted-foreground">
                "Absolutely love the quality and craftsmanship. Each piece is a work of art!"
              </p>
              <h3 className="text-lg md:text-xl font-semibold mt-4">- Keerthana</h3>
            </div>

            <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-sm md:text-base text-muted-foreground">
                "The natural dyes and intricate designs are simply stunning. Highly recommend!"
              </p>
              <h3 className="text-lg md:text-xl font-semibold mt-4">- Ramesh</h3>
            </div>

            <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-sm md:text-base text-muted-foreground">
                "Wearing Kalamkari feels like carrying a piece of history. Beautiful and sustainable!"
              </p>
              <h3 className="text-lg md:text-xl font-semibold mt-4">- Subba Lakshmi</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Well-Established Section */}
      <section
        className="py-20 bg-primary/10"
        style={{
          backgroundImage: `url('/src/assets/.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              We Are Well-Established
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proudly offering authentic Kalamkari products including dress materials, sarees, dupattas, and kurtas. Each piece reflects the timeless beauty of this ancient art form.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative overflow-hidden rounded-lg shadow-xl animate-fade-in">
              <img
                src={bg13}
                alt="Kalamkari products showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>

            {/* Right: Product boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up">
                <h3 className="text-lg md:text-xl font-semibold mb-3">Dress Materials</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Perfect for creating your own unique outfits.
                </p>
              </div>
              <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Sarees</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Elegant and timeless, for every occasion.
                </p>
              </div>
              <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Dupattas</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Add a touch of grace to any outfit.
                </p>
              </div>
              <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Kurtas</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Comfortable and stylish ethnic wear.
                </p>
              </div>

              <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Fabric</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Premium hand-loomed cotton and silk bases ready for your creative designs.
                </p>
              </div>

              <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Shirts</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Contemporary silhouettes with traditional Kalamkari artistry for everyday elegance.
                </p>
              </div>

              <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Hand Keys</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Exquisite key-shaped accessories hand-painted to unlock unique style statements.
                </p>
              </div>

              <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Bedsheets</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Transform your bedroom into an artistic retreat with our Kalamkari-printed linens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
