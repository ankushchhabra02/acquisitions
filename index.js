import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello, Kubernetes!",
    service: "kubernetes-demo",
    pod: process.env.POD_NAME || "unknown",
    timestamp: new Date().toISOString(),
  });
});

app.get("/readyz", (req, res) => {
  res.status(200).send("READY");
});

app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
