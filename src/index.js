import app from "./app.js";

const PORT = 5000;
app.get("/health", (req, res) => {
  res.status(200).json({ message: "ok" });
  // res.send(`<button>button</button>`)
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
