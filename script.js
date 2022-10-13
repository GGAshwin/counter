/*const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getrandomNumber()];
    }
    document.getElementById('color').innerText = hexcolor;
    document.body.style.backgroundColor = hexcolor;
})

function getrandomNumber() {
    return Math.floor(Math.random() * hex.length);
}*/

const updateNumber = (n, increasing = false) => {
  achievement_list.forEach((item) => {
    if (item.achieved === false) {
      if (n >= item.min_count) {
        let achievement_item = document.createElement("div");
        achievement_item.classList.add("achievement-item");
        achievement_item.innerHTML = item.title;
        document.getElementById("my-achievement").prepend(achievement_item);
        item.achieved = true;
      }
    }
  });

  document.getElementById("number").innerText = n;
  if (n > 0 || increasing) {
    document.getElementById("number").style.color = "green";
  } else if (n < 0) {
    document.getElementById("number").style.color = "red";
  } else if (n == 0) {
    document.getElementById("number").style.color = "black";
  }
};

let n = 0;
const btn_plus = document.getElementById("btn_plus");
const btn_minus = document.getElementById("btn_minus");
const btn_reset = document.getElementById("btn_reset");
const start = document.getElementById("start");

btn_plus.addEventListener("click", () => {
  n++;
  updateNumber(n);
});

btn_minus.addEventListener("click", () => {
  n--;
  updateNumber(n);
});

btn_reset.addEventListener("click", () => {
  n = 0;
  updateNumber(n);
  document.getElementById("my-achievement").innerHTML = "";
});

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
let counting = false;
start.addEventListener("click", async function () {
  if (counting) {
    return;
  }
  counting = true;
  for (var i = 0; i < 10; i++) {
    n++;
    await sleep(1000);
    updateNumber(n, true);
  }
  updateNumber(n);
  counting = false;
});
