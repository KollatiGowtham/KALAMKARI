import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Clothing, {
  ClothingItem,
  clothingItems as staticClothingItems,
} from "./pages/Clothing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";

// API helpers
import {
  fetchClothingItems,
  createClothingItem,
  removeClothingItem,
} from "@/lib/api";

const queryClient = new QueryClient();

const App = () => {
  const [items, setItems] = useState<ClothingItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Initial load from backend (and seed with static items if empty)
  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        setError(null);
        try {
          let data = await fetchClothingItems();

          // If database is empty, seed it with the existing static items
          if (!data || data.length === 0) {
            const createdItems: ClothingItem[] = [];
            for (const item of staticClothingItems) {
              const { name, category, image } = item;
              const created = await createClothingItem({ name, category, image });
              createdItems.push(created);
            }
            data = createdItems;
          }

          setItems(data);
        } catch (err) {
          console.error(err);
          setError("Failed to load clothing items.");
        } finally {
          setIsLoading(false);
        }
      })();
    } catch (err) {
      console.error(err);
      setError("Failed to load clothing items.");
      setIsLoading(false);
    }
  }, []);

  const addClothingItem = async (
    item: Omit<ClothingItem, "id">
  ): Promise<void> => {
    try {
      const created = await createClothingItem(item);
      setItems((prev) => [...prev, created]);
    } catch (err) {
      console.error(err);
      // Optional: surface error via toast
    }
  };

  const deleteClothingItem = async (id: number): Promise<void> => {
    try {
      await removeClothingItem(id);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err);
      // Optional: surface error via toast
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/clothing"
              element={
                <Clothing
                  clothingItems={items}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/admin"
              element={
                <Admin
                  addClothingItem={addClothingItem}
                  deleteClothingItem={deleteClothingItem}
                  clothingItems={items}
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
