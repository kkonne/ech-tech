const HEADER_MENU = document.querySelector("header");
const CONTACT_FORM = document.getElementById("contact-form");

const setMenuItemEffect = (item, index) => {
  item.onmouseover = () => {
    HEADER_MENU.dataset.activeIndex = index;
  };
  item.ontouchstart = () => {
    HEADER_MENU.dataset.activeIndex = index;
  };
};

const setMessage = (type, message) => {
  const messageTypeId = `alert-${type}`;
  const counterMessageTypeId =
    type !== "error" ? "alert-error" : "alert-success";
  const messageDurationInSeconds = 7;
  document.getElementById(counterMessageTypeId).style.display = "none";
  document.getElementById(messageTypeId).textContent = message;
  document.getElementById(messageTypeId).style.display = "block";
  setTimeout(() => {
    document.getElementById(messageTypeId).style.display = "none";
  }, 1000 * messageDurationInSeconds);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  setMessage("error", "An error ocurred. Please try again later.");
};

const onInit = () => {
  document.querySelectorAll("nav > a").forEach(setMenuItemEffect);
  CONTACT_FORM.addEventListener("submit", handleFormSubmit);
};

onInit();
