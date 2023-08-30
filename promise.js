const getData = new Promise((resolve, reject) => {
  //   resolve(58843);
  reject("NO Data available");
});

// console.log(getData); // A Promise return Pormise{resolve or refect}
getData
  .then((data) => console.log(data))
  .catch((err) => console.log("error:", err));
console.log(getData);

// syntax of writing async and await function
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error =", err);
  }
}
