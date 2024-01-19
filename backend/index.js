const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "https://debugging-masters-client.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://debugging-masters-client.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/", (req, res) => {
  return res.json({ message: "hello world" });
});
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
app.use("/", require("./routes/user.route"));
app.use("/", require("./routes/problem.route"));
app.use("/", require("./routes/tag.route"));
app.use("/", require("./routes/solution.route"));
