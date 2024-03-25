import { createServer } from "node:http";

createServer((req, res) => {
  res.end('{ "status": "ok" }');
}).listen(8000, () => {
  console.log("server listening http://localhost:8000");
});
