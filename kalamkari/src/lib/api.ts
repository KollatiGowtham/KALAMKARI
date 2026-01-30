import type { ClothingItem } from "@/pages/Clothing";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export async function fetchClothingItems(): Promise<ClothingItem[]> {
  const res = await fetch(`${API_BASE_URL}/api/clothing`);
  if (!res.ok) {
    throw new Error("Failed to fetch clothing items");
  }
  return res.json();
}

export async function createClothingItem(
  item: Omit<ClothingItem, "id">
): Promise<ClothingItem> {
  const res = await fetch(`${API_BASE_URL}/api/clothing`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  if (!res.ok) {
    throw new Error("Failed to create clothing item");
  }

  return res.json();
}

export async function removeClothingItem(id: number): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/api/clothing/${id}`, {
    method: "DELETE",
  });

  if (!res.ok && res.status !== 204) {
    throw new Error("Failed to delete clothing item");
  }
}

