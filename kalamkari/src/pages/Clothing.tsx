import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
// ============================================
// 📸 HOW TO ADD YOUR OWN IMAGES:
// ==========================A==================
// 1. Upload your image to src/assets/ folder
// 2. Import it here like this:
//    import myImage from "@/assets/your-image-name.jpg";
// 3. Use it in the clothingItems array below
// ============================================
import clothing1 from "@/assets/saree1.jpg";
import clothing2 from "@/assets/fab1.jpg";
import clothing3 from "@/assets/duppata1.jpg";
import clothing4 from "@/assets/dm1.jpg";
import clothing5 from "@/assets/pen1.jpg";
import clothing6 from "@/assets/kalamkari-suit-1.jpg";
import clothing7 from "@/assets/saree2.jpg";
import clothing8 from "@/assets/fab5.jpg";
import clothing9 from "@/assets/dm2.jpg";
import clothing10 from "@/assets/pen2.jpg";
import clothing11 from "@/assets/saree3.jpg";
import clothing12 from "@/assets/dm3.jpg";
import clothing13 from "@/assets/fab3.jpg";
import clothing14 from "@/assets/saree9.jpg";
import clothing15 from "@/assets/pen4.jpg";
import clothing16 from "@/assets/duppata3.jpg";
import clothing17 from "@/assets/saree4.jpg";
import clothing18 from "@/assets/fab6.jpg";
import clothing19 from "@/assets/duppata4.jpg";
import clothing20 from "@/assets/dm5.jpg";
import clothing21 from "@/assets/fab7.jpg";
import clothing22 from "@/assets/pen6.jpg";
import clothing23 from "@/assets/dm8.jpg";
import clothing24 from "@/assets/saree14.jpg";
import clothing25 from "@/assets/shrt.jpg";

export interface ClothingItem {
  id: number;
  name: string;
  category: string;
  image: string;
}

// Static default items shown to all users.
// Admin-added items from the database are displayed in addition to these.
export const clothingItems: ClothingItem[] = [
  { id: 1001, name: "Kalamkari Saree", category: "Sarees", image: clothing1 },
  { id: 1002, name: "Fabric", category: "Kurtas", image: clothing2 },
  { id: 1003, name: "Hand-Painted Dupatta", category: "Dupattas", image: clothing3 },
  { id: 1004, name: "Kalamkari Dress Material", category: "Fabrics", image: clothing4 },
  { id: 1005, name: "Tree of Life Kalamkari Stole", category: "Pen Kalamkari", image: clothing5 },
  { id: 1006, name: "Floral Kalamkari Salwar Suit", category: "Suits", image: clothing6 },
  { id: 1007, name: "Floral Kalamkari Saree", category: "Sarees", image: clothing7 },
  { id: 1008, name: "Fabric", category: "Fabrics", image: clothing8 },
  { id: 1009, name: "Kalamkari Dress Material", category: "Fabrics", image: clothing9 },
  { id: 1010, name: "Floral Pen Kalamkari", category: "Pen Kalamkari", image: clothing10 },
  { id: 1011, name: "Kalamkari Saree", category: "Sarees", image: clothing11 },
  { id: 1012, name: "Dress Material", category: "Fabrics", image: clothing12 },
  { id: 1013, name: "Kalamkari Fabric", category: "Fabrics", image: clothing13 },
  { id: 1014, name: "Kalamkari Saree", category: "Sarees", image: clothing14 },
  { id: 1015, name: "Floral Pen Kalamkari", category: "Pen Kalamkari", image: clothing15 },
  { id: 1016, name: "Kalamkari Dupattas", category: "Dupattas", image: clothing16 },
  { id: 1017, name: "Floral Pen Saree", category: "Sarees", image: clothing17 },
  { id: 1018, name: "Kalamkari Fabric", category: "Fabrics", image: clothing18 },
  { id: 1019, name: "Pen Dupatta", category: "Dupattas", image: clothing19 },
  { id: 1020, name: "Kalamkari Pen Dress Materials", category: "Kurtas", image: clothing20 },
  { id: 1021, name: "Kalamkari Fabric", category: "Fabrics", image: clothing21 },
  { id: 1022, name: "Pen Dupatta", category: "Pen Kalamkari", image: clothing22 },
  { id: 1023, name: "Dess Materaial", category: "Kurtas", image: clothing23 },
  { id: 1024, name: "Floral Pen Saree", category: "Sarees", image: clothing24 },
  { id: 1025, name: "Short Kurta", category: "Kurtas", image: clothing25 },
];

interface ClothingProps {
  clothingItems: ClothingItem[];
}

const Clothing = ({ clothingItems: itemsToDisplay }: ClothingProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const swipeRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const categories = ["All", "Sarees", "Kurtas", "Dupattas", "Suits", "Fabrics", "Pen Kalamkari"];

  const filteredItems =
    selectedCategory === "All"
      ? itemsToDisplay
      : itemsToDisplay.filter((item) => item.category === selectedCategory);

  // Carousel navigation with direction awareness
  const goPrev = () => {
    if (selectedIndex === null) return;
    setDirection("left");
    const newIndex = selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1;
    setTimeout(() => {
      setSelectedIndex(newIndex);
      setDirection(null);
    }, 150);
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setDirection("right");
    const newIndex = selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1;
    setTimeout(() => {
      setSelectedIndex(newIndex);
      setDirection(null);
    }, 150);
  };

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    // Swipe threshold: 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left -> next
        goNext();
      } else {
        // Swipe right -> prev
        goPrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-bounce-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in-up">
              Handloom Collection
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
              Authentic Kalamkari handlooms crafted with traditional techniques
              and natural dyes. Each piece is a testament to India's rich textile
              heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-0 z-20 bg-background/90 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "hero" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Clothing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-lg text-muted-foreground">
                No items found in this category. Check back soon for new handlooms!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="relative aspect-[4/5] overflow-hidden bg-secondary/20 cursor-pointer"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-5 md:p-6">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Carousel Modal with swipe support */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            ref={swipeRef}
            className="relative max-w-5xl max-h-[90vh] p-4 flex items-center select-none"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Previous Button - spaced further left */}
            <button
              className="absolute -left-20 top-1/2 -translate-y-1/2 bg-white/20 text-white rounded-full p-4 hover:bg-white/40 transition-all duration-300 hover:scale-110"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image with slide animation */}
            <div
              className={`w-full h-auto max-h-[85vh] transition-transform duration-300 ease-out select-none ${direction === "left" ? "-translate-x-10 opacity-50" : direction === "right" ? "translate-x-10 opacity-50" : "translate-x-0 opacity-100"}`}
            >
              <img
                src={filteredItems[selectedIndex].image}
                alt={filteredItems[selectedIndex].name}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl pointer-events-none"
                draggable={false}
              />
              {/* Caption below the image */}
              <div className="text-center text-white/90 text-sm mt-3">
                {filteredItems[selectedIndex].name}
              </div>
            </div>

            {/* Next Button - spaced further right */}
            <button
              className="absolute -right-20 top-1/2 -translate-y-1/2 bg-white/20 text-white rounded-full p-4 hover:bg-white/40 transition-all duration-300 hover:scale-110"
              onClick={goNext}
              aria-label="Next image"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Close Button - top right corner */}
            <button
              className="absolute -top-10 right-0 text-white text-3xl leading-none hover:text-red-400 transition-colors duration-300"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close carousel"
            >
              &times;
            </button>

            {/* Swipe hint for mobile - only show on first 4 images */}
            {selectedIndex < 4 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs sm:hidden">
                Swipe left/right to navigate
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Clothing;

