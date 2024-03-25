(async function () {
  console.time();
  for (let index = 0; index < 1_000; index++) {
    await fetch("http://localhost:8000", { keepalive: true }).then((res) =>
      res.json()
    );
  }
  console.timeEnd();
})();
