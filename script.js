const Username = document.querySelector(".userName");
const Message = document.querySelector(".message");
const Container = document.querySelector(".taxt-container");
const FirstBtn = document.querySelector(".first-btn");
const SecondBtn = document.querySelector(".second-btn");

let date = new Date;
let TIME = date.format();

let new_data = DATA.slice();

function loadPage() {
  DATA.forEach((item) => {
    makeList(item.user, item.message, item.created_at);
  })
}

function makeList(user, message, time) {
  const Big_box = document.createElement("div");

  const name_box = document.createElement("button");
  name_box.addEventListener("click", handleFilter);

  const message_box = document.createElement("p");

  const date_box = document.createElement("p");

  name_box.innerHTML = user;
  message_box.innerHTML = message;
  date_box.innerHTML = time;

  Big_box.appendChild(name_box);
  Big_box.appendChild(message_box);
  Big_box.appendChild(date_box);

  Container.appendChild(Big_box);  
}

function handleInput (e) {
  e.preventDefault();
  const userValue = Username.value;
  const messageValue = Message.value;

  makeList(userValue, messageValue, TIME);
  let newObj = {user: userValue, message: messageValue, created_at: TIME}
  new_data.push(newObj)
  console.log(new_data)
}

function handleSubmit(e) {
  e.preventDefault();
  let randomValue = generateNewTweet();
  makeList(randomValue.user, randomValue.message, TIME);
  let newObj = {user: randomValue.user, message: randomValue.message, created_at: TIME}
  new_data.push(newObj)
  console.log(new_data)
}

function handleFilter() {
  Container.innerHTML = '';
  new_data
    .filter(data => data.user === this.textContent)
    .forEach(data => makeList(data.user, data.message, data.created_at));
}

function init() {
  loadPage();
  FirstBtn.addEventListener("click", handleInput);
  SecondBtn.addEventListener("click", handleSubmit);
}

init();