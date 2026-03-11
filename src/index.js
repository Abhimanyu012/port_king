import app from "./app.js";

const PORT = 5000;
app.get("/", (req, res) => {
  res.json("Server is runnig perfectly in index through app");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});