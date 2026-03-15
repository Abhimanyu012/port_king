import app from "./app.js";

const PORT = 5000;
app.get("/health", (req, res) => {
  res.status(200).json({ message: "ok" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
