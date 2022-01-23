const showCircle = (cx, cy, radius) => {
  document.body.innerHTML = "";
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);
  document.querySelector(".circle").style.transition =
    "width 2s, height 2s, margin 2s";
  document.querySelector(".circle").style.position = "fixed";
  document.querySelector(".circle").style.transform =
    "translateX(-50%) translateY(-50%)";
  document.querySelector(".circle").style.backgroundColor = "red";
  document.querySelector(".circle").style.borderRadius = "50%";

  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";
      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 100);
  });
};

const textHandling = (e) => {
  e.classList.add("message-ball");
  document.querySelector(".circle").style.fontSize = "20px";
  document.querySelector(".circle").style.lineHeight = "200px";
  document.querySelector(".circle").style.textAlign = "center";
  e.append("안녕하세요!");
};

const solution = async () => {
  let result = await showCircle(150, 150, 100);
  textHandling(result);
};
