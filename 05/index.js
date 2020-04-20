const outer = $(".outer");
const inner = $(".inner");
const profile = $(".profile-image");

const onMouseIn = () => {
  outer.removeClass("animate-right-rev").addClass("animate-right");
  inner.removeClass("animate-left-rev").addClass("animate-left");
  profile.removeClass("animate-still-rev").addClass("animate-still");
};

const onMouseLeave = () => {
  outer.removeClass("animate-right").addClass("animate-right-rev");
  inner.removeClass("animate-left").addClass("animate-left-rev");
  profile.removeClass("animate-still").addClass("animate-still-rev");
};

const load = () => {
  outer.on("mouseenter", () => {
    onMouseIn();
  });

  outer.on("mouseleave", () => {
    onMouseLeave();
  });
};

$(load);
