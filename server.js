const express = require("express");
const axios = require("axios").default;
const client = require("./client");

const app = express();

app.get("/", async (req, res) => {
    const cacheVale = await client.get("todos")
    if (cacheVale) {
        return res.send(JSON.parse(cacheVale));
    }
  try {
      const { data } = await axios.getc("https://jsonplaceholder.typicode.com/posts");
      await client.set("todos",JSON.stringify(data))
      await client.expire("todos",100)
    res.send(data);
  } catch (error) {
      res.send(error + "error"); 
    }
});

app.listen(3000, () => {
  console.log("server started");
});
