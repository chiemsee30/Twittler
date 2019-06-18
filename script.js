const Username = document.querySelector(".userName");
const Message = document.querySelector(".message");
const Container = document.querySelector(".taxt-container");
const FirstBtn = document.querySelector(".first-btn");
// const SecondBtn = documetn.querySelector(".second-btn");

let date = new Date;
let TIME = date.format();

function handleInput (e) {
  e.preventDefault();
  const userValue = Username.value;
  const messageValue = Message.value;

  const Big_box = document.createElement("div");

  const name_box = document.createElement("button");

  const message_box = document.createElement("p");

  const date_box = document.createElement("p");

  name_box.innerHTML = userValue;
  message_box.innerHTML = messageValue;
  date_box.innerHTML = TIME;

  Big_box.appendChild(name_box);
  Big_box.appendChild(message_box);
  Big_box.appendChild(date_box);

  Container.appendChild(Big_box);
}





function init() {
  FirstBtn.addEventListener("click", handleInput);
}

init();