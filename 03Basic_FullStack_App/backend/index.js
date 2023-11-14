import express from "express";
/**
 * changes made --
 * express imported using module style -- write type: module (in packaje jason)
 * given start(script)
 * Note - need to re run application when changes made -- does not reload on its own
 */

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, Content: "hi joke 1" },
    { id: 2, Content: "hi joke 2" },
    { id: 3, Content: "hi joke 3" },
    { id: 4, Content: "hi joke 4" },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(PORT);
});
