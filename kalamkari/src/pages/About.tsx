import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage1 from "@/assets/kalamkari-craft-1.jpg";
import aboutImage2 from "@/assets/kalamkari-craft-2.jpg";
import { Heart, Sparkles, Users } from "lucide-react";
import video1 from "@/assets/vide1.mp4";
import video4 from "@/assets/vide4.mp4";
import video3 from "@/assets/vide3.mp4";
import video2 from "@/assets/vide.mp4";
import video5 from "@/assets/vide2.mp4";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-bounce-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Preserving the ancient art of Kalamkari and supporting traditional
              Indian handloom weavers for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-in-left hover-scale">
              <img
                src={aboutImage1}
                alt="Kalamkari artisan at work"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-4 md:space-y-6 animate-slide-in-right">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                3,000 Years of Living Heritage
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                KK Handlooms was founded with a singular mission: to preserve and
                celebrate the magnificent art of Kalamkari. This ancient Indian
                textile art form, dating back over 3,000 years, represents one of
                the world&apos;s oldest methods of hand-painting and block-printing on
                fabric.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The word &quot;Kalamkari&quot; is derived from &quot;kalam&quot; (pen) and &quot;kari&quot; (work),
                literally meaning &quot;pen work.&quot; Our artisans use traditional bamboo or
                date palm sticks as pens, dipped in natural dyes extracted from
                plants, minerals, and flowers. Each piece takes weeks to complete,
                involving up to 23 intricate steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1 animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Our Mission & Commitment
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At KK Handlooms, we are deeply committed to supporting the artisan
                communities of Andhra Pradesh and Telangana—the heartlands of
                Kalamkari. By choosing our handlooms, you directly contribute to
                the livelihoods of these skilled craftspeople and help preserve
                this endangered art form.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in ethical fashion that honors tradition while embracing
                sustainability. Every garment is made using 100% natural dyes and
                organic cotton, ensuring zero harm to the environment. Our pieces
                are not mass-produced—each is a unique work of art, bearing the
                subtle variations that come from human hands.
              </p>
            </div>

            <div className="order-1 lg:order-2 animate-slide-in-right hover-scale">
              <img
                src={aboutImage2}
                alt="Traditional handloom weaving"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values are rooted in respect for tradition, commitment to
              artisans, and passion for authentic Indian craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-bounce-in">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary mb-4 animate-float">
                <Heart className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-muted-foreground">
                Every piece is genuine Kalamkari, handcrafted by skilled artisans
                using centuries-old techniques and natural materials.
              </p>
            </div>

            <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-bounce-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We use only natural, vegetable-based dyes and organic cotton,
                making our textiles completely biodegradable and eco-friendly.
              </p>
            </div>

            <div className="text-center p-6 md:p-8 bg-card rounded-lg shadow-sm hover-lift animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary mb-4 animate-float" style={{ animationDelay: '1s' }}>
                <Users className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Artisan Support</h3>
              <p className="text-muted-foreground">
                We ensure fair wages and ethical working conditions, empowering
                artisan families and preserving their traditional livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kalamkari Process */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-8 text-center animate-fade-in">
              The Kalamkari Process
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                Creating authentic Kalamkari involves a painstaking process that can
                take several weeks. The fabric is first treated with a mixture of
                cow dung and bleach to prepare it for dye absorption. It is then
                washed and sun-dried multiple times.
              </p>
              <p>
                Artisans sketch intricate designs freehand using charcoal, then
                meticulously fill in the patterns using bamboo or date palm &quot;pens&quot;
                dipped in natural dyes. The colors—rich indigos from indigo plants,
                vibrant reds from madder root, warm yellows from pomegranate,
                blacks from iron and jaggery—are all derived from nature.
              </p>
              <p>
                Between each color application, the fabric must be washed in running
                water and dried in the sun. The final step involves boiling the
                fabric in a solution of cow milk and myrobalan to set the colors
                permanently. This ancient process results in colors that remain
                vibrant for generations.
              </p>
            </div>

            {/* Video Grid */}
            {/* Mobile-first grid: 1 column on small screens, 2 on tablets, 3 on desktops */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

              {/* Step 1 */}
              <div
                className="bg-card rounded-lg shadow-md overflow-hidden hover-lift cursor-pointer"
                onClick={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) {
                    video.paused ? video.play() : video.pause();
                  }
                }}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) video.pause();
                }}
              >


<video
  muted
  playsInline
  controls
  poster="/kalamkari-step1.jpg"
  className="w-full h-40 sm:h-48 object-cover"
>
  <source src={video1} type="video/mp4" />
  Your browser does not support the video tag.
</video>
                <div className="p-3 sm:p-4">
                  <p className="text-sm text-muted-foreground">Washing and sun-drying the cotton fabric.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="bg-card rounded-lg shadow-md overflow-hidden hover-lift cursor-pointer"
                onClick={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) {
                    video.paused ? video.play() : video.pause();
                  }
                }}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) video.pause();
                }}
              >


<video
  muted
  playsInline
  controls
  poster="/kalamkari-step2.jpg"
  className="w-full h-40 sm:h-48 object-cover"
>
  <source src={video4} type="video/mp4" />
  Your browser does not support the video tag.
</video>
                <div className="p-3 sm:p-4">
                  <p className="text-sm text-muted-foreground">Sketching intricate motifs with charcoal.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="bg-card rounded-lg shadow-md overflow-hidden hover-lift cursor-pointer"
                onClick={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) {
                    video.paused ? video.play() : video.pause();
                  }
                }}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) video.pause();
                }}
              >
                <video
                  muted
                  playsInline
                  controls
                  poster="/kalamkari-step3.jpg"
                  className="w-full h-40 sm:h-48 object-cover"
                >
                  <source src={video3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-3 sm:p-4">
                  <p className="text-sm text-muted-foreground">Applying plant-based colors with bamboo pens.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div
                className="bg-card rounded-lg shadow-md overflow-hidden hover-lift cursor-pointer"
                onClick={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) {
                    video.paused ? video.play() : video.pause();
                  }
                }}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) video.pause();
                }}
              >
                <video
                  muted
                  playsInline
                  controls
                  poster="/kalamkari-step4.jpg"
                  className="w-full h-40 sm:h-48 object-cover"
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-3 sm:p-4">
                  <p className="text-sm text-muted-foreground">Boiling in natural mordants to lock in vibrant hues.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div
                className="bg-card rounded-lg shadow-md overflow-hidden hover-lift cursor-pointer"
                onClick={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) {
                    video.paused ? video.play() : video.pause();
                  }
                }}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video") as HTMLVideoElement;
                  if (video) video.pause();
                }}
              >
                <video
                  muted
                  playsInline
                  controls
                  poster="/kalamkari-step5.jpg"
                  className="w-full h-40 sm:h-48 object-cover"
                >
                  <source src={video5} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-3 sm:p-4">
                  <p className="text-sm text-muted-foreground">Sun-drying and finishing touches for heirloom quality.</p>
                </div>
              </div>

            </div>

            <p className="text-center text-muted-foreground mt-8">
              Each step is a labor of love, passed down through generations of artisans.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
