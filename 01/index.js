const burger = $(".hamburger");
const middle = $("#middle-bar");
const topBar = $("#top-bar");
const bottom = $("#bottom-bar");

let isOpen = true;

const close = () => {
  isOpen = false;
  topBar.removeClass("top-open").addClass("top-closed");
  bottom.removeClass("bottom-open").addClass("bottom-closed");
  middle.addClass("middle-closed");
};

const open = () => {
  isOpen = true;
  topBar.removeClass("top-closed").addClass("top-open");
  bottom.removeClass("bottom-closed").addClass("bottom-open");
  middle.removeClass("middle-closed");
};

const onLoad = () => {
  burger.on("click", () => {
    isOpen ? close() : open();
  });
};

$(onLoad());
