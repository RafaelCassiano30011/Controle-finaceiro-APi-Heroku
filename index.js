import express from "express";
import generateId from "./utils/generateID.js";

const app = express();
app.use(express.json());

const transaction = {
  data: [],
};

app.get("/ping", (req, res) => {
  return res.send("Eaw Seus noia");
});
app.get("/get", (req, res) => {
  return res.send(transaction.data);
});

app.post("/create", (req, res) => {
  const data = transaction.data;
  transaction.data.push({ ...req.body, id: generateId() });
  return res.send(transaction.data);
});

app.delete("/task/:id", (req, res) => {
  const { id } = req.params;

  const data = transaction.data;

  const newData = data.filter((task) => task.id !== id);

  transaction.data = newData;

  return res.send(transaction.data);
});

app.put("/task/:id", (req, res) => {
  const { id } = req.params;

  const data = transaction.data;

  const newData = data.map((task) => {
    if (task.id !== id) {
      return res.send("id Errado");
    } else {
      const listTaskUpdate = { ...task, ...req.body };
      return listTaskUpdate;
    }
  });
  transaction.data = newData;
  return res.send(newData);
});

app.listen(3333, () => console.log("servidor boa"));
