import { createServer } from "node:http";

createServer((req, res) => {
  res.end('{ "status": "ok" }');
})
  .listen(8000, () => {
    console.log("server listening http://localhost:8000");
  })
  .unref();

(async function () {
  console.time();
  for (let index = 0; index < 1_000; index++) {
    await fetch("http://localhost:8000", { keepalive: true }).then((res) =>
      res.json()
    );
  }
  console.timeEnd();
})();
