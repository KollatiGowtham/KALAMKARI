import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ClothingItem } from "./Clothing";

interface AdminProps {
  addClothingItem: (item: Omit<ClothingItem, "id">) => Promise<void>;
  clothingItems: ClothingItem[];
  deleteClothingItem: (id: number) => Promise<void>;
}

const Admin = ({
  addClothingItem,
  clothingItems,
  deleteClothingItem,
}: AdminProps) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const categories = ["Sarees", "Kurtas", "Dupattas", "Dress Materials", "Shirts", "Pen Kalamkari", "Others"];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return;
    const newItem = { 
      name,
      category,
      image: imagePreview
    };
    await addClothingItem(newItem);
    // Reset form
    setName("");
    setCategory("");
    setImageFile(null);
    setImagePreview("");
  };

  const handleDelete = async (id: number) => {
    await deleteClothingItem(id);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Admin - Add Clothing</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <Label htmlFor="name">Item Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Kalamkari Saree"
            required
          />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={setCategory} required>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="image">Upload Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
            </div>
          )}
        </div>
        <Button type="submit" disabled={!imageFile}>Add Item</Button>
      </form>

      {/* List existing items with delete option */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Existing Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clothingItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.category}</p>
              <Button
                variant="destructive"
                size="sm"
                className="mt-2"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;