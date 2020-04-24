const openButton = $(".open-contact");
const up = $(".top");
const bottom = $(".bottom");
const contact = $(".contact-open");
const exit = $(".exit");
const img = $(".contact-image-small");

const load = () => {
  openButton.on("click", () => {
    up.toggleClass("open");
    bottom.toggleClass("open");
    contact.toggleClass("main-open");
    exit.toggleClass("exit-open");
    img.toggleClass("contact-image-open");
  });

  exit.on("click", () => {
    up.toggleClass("open");
    bottom.toggleClass("open");
    contact.toggleClass("main-open");
    exit.toggleClass("exit-open");
    img.toggleClass("contact-image-open");
  });
};

$(load);
