const client = require("./client");

async function init() {
  const result = await client.get("user:1");
    let count = await client.get("count");
    count = await client.incrby("count",10);
  console.log(`Result: ${result}`);
  console.log(`Count: ${count}`);
}

init();
