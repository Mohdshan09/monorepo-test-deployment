import express from "express";
import { client } from "@repo/db/client";

const app = express();
const port = 3002;

app.use(express.json());

app.listen(port, () => {
  console.log("server is running");
});

app.get("/", (req, res) => {
  res.send("API Working !");
});

app.post("/sign-up", async (req, res) => {
  const { username, password } = req.body;

  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  res.json({
    message: "Signup successful",
    id: user.id,
  });
});
