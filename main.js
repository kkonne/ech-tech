const header = document.querySelector("header");
const contactForm = document.getElementById("contact-form");
const navItemsList = document.querySelectorAll("nav > a");
const testimonialItemsWrap = document.querySelector(
  ".testimonials .testimonials__wrap"
);
const testimonialItemsList = testimonialItemsWrap.querySelectorAll(
  ".testimonials__item"
);

const setMenuItemEffect = (item, index) => {
  item.onmouseover = () => {
    header.dataset.activeIndex = index;
  };
  item.ontouchstart = () => {
    header.dataset.activeIndex = index;
  };
};

const handleTestimonialEffect = (event) => {
  const { currentTarget: target } = event;
  const rect = target.getBoundingClientRect(),
    x = event.clientX - rect.left,
    y = event.clientY - rect.top;
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
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
  navItemsList.forEach(setMenuItemEffect);
  // testimonialItemsList.forEach((testimonialItem) => {
  //   testimonialItem.onmousemove = (event) => handleTestimonialEffect(event);
  // });
  testimonialItemsWrap.onmousemove = (event) => {
    for (const testimonialItem of document.getElementsByClassName(
      "testimonials__item"
    )) {
      const rect = testimonialItem.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;

      testimonialItem.style.setProperty("--mouse-x", `${x}px`);
      testimonialItem.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  contactForm.addEventListener("submit", handleFormSubmit);
};

onInit();
