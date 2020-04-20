const sidebar = $(".sidebar");
const hotdog = $(".hamburger");
const main = $(".project");
const searchBtn = $(".search");
const search = $(".search-bar");

const sidebarToggle = () => {
  hotdog.on("click", () => {
    sidebar.toggleClass("sidebar-open");
    main.toggleClass("open");
  });
};

const searchToggle = () => {
  searchBtn.on("click", () => {
    search.toggleClass("search-bar-show");
  });
};

const loaded = () => {
  sidebarToggle();
  searchToggle();
};

$(loaded());
