import express from "express";

const app = express();

// Middleware to read JSON
app.use(express.json());

// =======================
// GET → uses req.query
// =======================
app.get("/user", (req, res) => {
  const { name, age } = req.query;

  console.log("GET request received");
  console.log("Query data:", req.query);

  res.send(`GET: Name = ${name}, Age = ${age}`);
});

// =======================
// POST → uses req.body
// =======================
app.post("/user", (req, res) => {
  const { name, age } = req.body;

  console.log("POST request received");
  console.log("Body data:", req.body);

  res.send(`POST: Name = ${name}, Age = ${age}`);
});

// =======================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});