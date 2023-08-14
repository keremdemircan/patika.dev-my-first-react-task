import getData from "./app.js";

try {
  const res = await getData(1);
  console.log(res);
} catch (e) {
  console.log(e.response);
}