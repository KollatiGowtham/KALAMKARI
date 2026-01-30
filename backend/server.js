
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" })); // support base64 images

// SQLite setup
const dbPath = path.join(__dirname, "clothing.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", err);
  } else {
    console.log("Connected to SQLite database");
  }
});

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS clothing_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      image TEXT NOT NULL
    )`,
    (err) => {
      if (err) {
        console.error("Error creating table:", err);
      } else {
        console.log("Table 'clothing_items' ready");
      }
    }
  );
});

// Health check endpoint (required for Render)
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Kalamkari Backend API is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// GET all items
app.get("/api/clothing", (req, res) => {
  db.all("SELECT id, name, category, image FROM clothing_items ORDER BY id ASC", [], (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Failed to fetch items", details: err.message });
    }
    res.json(rows || []);
  });
});

// Add new item
app.post("/api/clothing", (req, res) => {
  const { name, category, image } = req.body;
  if (!name || !category || !image) {
    return res.status(400).json({ error: "Missing required fields: name, category, and image are required" });
  }

  const stmt = db.prepare("INSERT INTO clothing_items (name, category, image) VALUES (?, ?, ?)");
  stmt.run([name, category, image], function (err) {
    if (err) {
      console.error("Database error:", err);
      stmt.finalize();
      return res.status(500).json({ error: "Failed to add item", details: err.message });
    }
    // Return the newly created item
    res.status(201).json({ id: this.lastID, name, category, image });
    stmt.finalize();
  });
});

// Delete item
app.delete("/api/clothing/:id", (req, res) => {
  const { id } = req.params;
  const itemId = parseInt(id, 10);
  
  if (isNaN(itemId)) {
    return res.status(400).json({ error: "Invalid item ID" });
  }

  const stmt = db.prepare("DELETE FROM clothing_items WHERE id = ?");
  stmt.run([itemId], function (err) {
    if (err) {
      console.error("Database error:", err);
      stmt.finalize();
      return res.status(500).json({ error: "Failed to delete item", details: err.message });
    }
    if (this.changes === 0) {
      stmt.finalize();
      return res.status(404).json({ error: "Item not found" });
    }
    stmt.finalize();
    res.status(204).end();
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend listening on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});

