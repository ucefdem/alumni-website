const cursor_circle = document.querySelector(".cursor-circle"),
  cursor = document.querySelectorAll(".cursor"),
  elements = document.querySelectorAll(".getHover"),
  image_wrap = document.querySelector(".image-wrap"),
  curr_lines = document.querySelectorAll(".line .curr");

let timeline = gsap.timeline({
  defaults: { duration: 1.3, ease: "power3.inOut" },
});

gsap.registerPlugin(ScrollTrigger);

timeline
  .to(".image-wrap", {
    height: "440px",
    backgroundSize: "105%",
    duration: 1.5,
    ease: "power4.inOut",
  })
  .to(
    ".image-wrap",
    {
      height: "200px",
      backgroundPosition: "50% 58%",
      y: "0",
    },
    1.5,
  )
  .from(
    ".big-name",
    {
      y: getYDistance(".big-name"),
    },
    1.5,
  )
  .from(
    ".hide",
    {
      opacity: "0",
      duration: 1.3,
    },
    1.5,
  );

function getYDistance(el) {
  return (
    window.innerHeight - document.querySelector(el).getBoundingClientRect().top
  );
}

gsap.fromTo(
  ".about .title-grid--one",
  { y: 150 },
  {
    y: 0,
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "top 10%",
      scrub: 1,
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about .title-grid--one",
  {
    y: 0,
    immediateRender: false,
  },
  {
    y: 150,
    scrollTrigger: {
      trigger: ".about",
      start: "bottom 90%",
      end: "bottom top",
      scrub: 1,
      onEnter: () => {
        gsap.set(".about .title-grid--one", { y: 0, clearProps: "transform" });
      },
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about2",
  {
    y: -150,
    x: -150,
  },
  {
    y: 0,
    x: 0,
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "top 10%",
      scrub: 1,
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about2",
  {
    y: 0,
    x: 0,
    immediateRender: false,
  },
  {
    y: -150,
    x: -150,
    scrollTrigger: {
      trigger: ".about",
      start: "bottom 90%",
      end: "bottom top",
      scrub: 1,
      onEnter: () => {
        gsap.set(".about2", { y: 0, x: 0, clearProps: "transform" });
      },
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about-text",
  {
    y: 100,
  },
  {
    y: -28,
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "top 10%",
      scrub: 1,
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about-text",
  {
    y: -28, // Start from the current position (after forward animation)
    immediateRender: false,
  },
  {
    y: 100, // Animate back to y: 100 when leaving
    scrollTrigger: {
      trigger: ".about",
      start: "bottom 90%",
      end: "bottom top",
      scrub: 1,
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about3",
  {
    x: 75,
    y: 100,
  },
  {
    x: 0,
    y: 0,
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "top 10%",
      scrub: 1,
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about3",
  {
    x: 0,
    y: 0,
    immediateRender: false,
  },
  {
    x: 75,
    y: 80,
    scrollTrigger: {
      trigger: ".about",
      start: "bottom 90%",
      end: "bottom top",
      scrub: 1,
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about4",
  {
    x: -75,
    y: 100,
  },
  {
    x: 0,
    y: 0,
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "top 10%",
      scrub: 1,
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about4",
  {
    x: 0,
    y: 0,
    immediateRender: false,
  },
  {
    x: -75,
    y: 100,
    scrollTrigger: {
      trigger: ".about",
      start: "bottom 90%",
      end: "bottom top",
      scrub: 1,
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about .title-grid--two",
  { y: 70 },
  {
    y: 0,
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "top 10%",
      scrub: 1,
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".about .title-grid--two",
  {
    y: 0,
    immediateRender: false,
  },
  {
    y: 70,
    scrollTrigger: {
      trigger: ".about",
      start: "bottom 90%",
      end: "bottom top",
      scrub: 1,
      onEnter: () => {
        gsap.set(".about .title-grid--one", { y: 0, clearProps: "transform" });
      },
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".more-btn",
  { y: 40 },
  {
    y: 0,
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "top 10%",
      scrub: 1,
    },
    ease: "none",
  },
);

gsap.fromTo(
  ".more-btn",
  {
    y: 0,
    immediateRender: false,
  },
  {
    y: 40,
    scrollTrigger: {
      trigger: ".about",
      start: "bottom 90%",
      end: "bottom top",
      scrub: 1,
      onEnter: () => {
        gsap.set(".about .title-grid--one", { y: 0, clearProps: "transform" });
      },
    },
    ease: "none",
  },
);

// Mission section: 3 cards enter from right + fade in (complete when section bottom hits viewport bottom)
gsap.fromTo(
  ".mission-grid .card",
  {
    x: 120,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".mission",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    },
    ease: "none",
  },
);

// Mission section: cards exit to the right + fade out
gsap.fromTo(
  ".mission-grid .card",
  {
    x: 0,
    opacity: 1,
    immediateRender: false,
  },
  {
    x: 120,
    opacity: 0,
    scrollTrigger: {
      trigger: ".mission",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
    },
    ease: "none",
  },
);

// Board section: Swiper carousel
const boardSwiper = new Swiper("#boardSwiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  grabCursor: true,
  resistance: true,
  resistanceRatio: 0.85,
});

window.addEventListener("mousemove", (e) => {
  let xPosition = e.clientX;
  let yPosition = e.clientY;

  cursor.forEach((el) => {
    el.style.transform = `translate(calc(-50% + ${xPosition}px), calc(-50% + ${yPosition}px))`;
    el.style.opacity = "1";
  });
});

elements.forEach((el) => {
  el.addEventListener("mouseover", () => {
    cursor_circle.classList.add("biggerCursor");
  });
  el.addEventListener("mouseout", () => {
    cursor_circle.classList.remove("biggerCursor");
  });
});

image_wrap.addEventListener("mousemove", (e) => {
  let rect = image_wrap.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  let xSpeed = 0.008,
    ySpeed = 0.02;

  let xMoving = x - image_wrap.clientWidth / 2;
  let yMoving = y - image_wrap.clientHeight / 2;

  image_wrap.style.backgroundPosition = `calc(50% + ${
    xMoving * xSpeed
  }px) calc(58% + ${yMoving * ySpeed}px)`;
});

image_wrap.addEventListener("mouseover", () => {
  image_wrap.style.transition = ".2s background-position";
  setTimeout(() => {
    image_wrap.style.transition = "0s background-position";
  }, 200);
});

image_wrap.addEventListener("mouseout", () => {
  image_wrap.style.transition = ".5s background-position";
  image_wrap.style.backgroundPosition = "50% 58%";
});

setTimeout(() => {
  image_wrap.style.pointerEvents = "auto";
}, timeline.endTime() * 1000);
