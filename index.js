const nameInputEl = document.querySelector("#name");
const emailInputEl = document.querySelector("#email");
const messageInputEl = document.querySelector("#message");
const sendBtnEl = document.querySelector(".send-btn");
const inputEl = document.querySelector('input');

const nameErrorMsgEl = document.querySelector(".name-error-msg");
const emailErrorMsgEl = document.querySelector(".email-error-msg");
const messageErrorMsgEl = document.querySelector(".message-error-msg");
const nameInfoIconEl = document.querySelector(".name-info__icon");
const emailInfoIconEl = document.querySelector(".email-info__icon");
const messageInfoIconEl = document.querySelector(".message-info__icon");


let nameHasError = false;
let emailHasError = false;
let msgHasError = false;

// messageErrorMsgEl.classList.remove('show');

sendBtnEl.addEventListener("click", (e) => {
  nameErrorMsgEl.classList.remove("show");
  nameInfoIconEl.classList.remove("show");
  emailErrorMsgEl.classList.remove("show");
  emailInfoIconEl.classList.remove("show");
  messageErrorMsgEl.classList.remove("show");

  nameInputEl.classList.remove("error");
  emailInputEl.classList.remove("error");
  messageInputEl.classList.remove("error");

  e.preventDefault();
  let nameValue = nameInputEl.value.trim();
  let emailValue = emailInputEl.value.trim();
  let messageValue = messageInputEl.value.trim();

  if (nameValue === "" || !isName(nameValue)) {
    nameInputEl.classList.add("error");
    nameErrorMsgEl.classList.add("show");
    nameInfoIconEl.classList.add("show");
    // nameHasError = true;

  }

  if (emailValue === "" || !isEmail(emailValue)) {
    emailInputEl.classList.add("error");
    emailErrorMsgEl.classList.add("show");
    emailInfoIconEl.classList.add("show");

    // emailHasError = true;
  }

  if (messageValue === "") {
    messageInputEl.classList.add("error");
    messageErrorMsgEl.classList.add("show");
    messageInfoIconEl.classList.add("show");

    // msgHasError = true;
  }
});


function isEmail(email) {
  // let regex = /^[\w\.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,}$/.test(email);
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  return regex;
}

function isName(name) {
  // let regex = /^[a-zA-ZÀ-ÿ\s'\-]+$/.test(name);
  let regex = /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(name);
  return regex;
}


