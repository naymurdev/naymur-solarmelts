document
  .querySelector("body > div.subs-cont > div > p.close-cont > span")
  .addEventListener("click", () => {
    Object.assign(document.querySelector(".subs-cont").style, {
      display: "none",
    });

    Object.assign(document.querySelector("html").style, {
      overflow: "auto",
    });
  });

// display: grid;

setTimeout(() => {
  Object.assign(document.querySelector(".subs-cont").style, {
    display: "grid",
  });

  Object.assign(document.querySelector("html").style, {
    overflow: "hidden",
  });
}, 2500);
