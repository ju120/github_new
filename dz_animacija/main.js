const button = document.querySelector(".button");

document.querySelector(".player1").style["boxShadow"] = "rgba(0, 0, 0, 0.25) 0px 54px 55px, " + "rgba(0, 0, 0, 0.12) 0px -12px 30px, " + "rgba(0, 0, 0, 0.12) 0px 4px 6px, " + "rgba(0, 0, 0, 0.17) 0px 12px 13px, " + "rgba(0, 0, 0, 0.09) 0px -3px 5px";

button.addEventListener("mouseover", () => {
  anime({
    targets: ".player1",
    width: "30%",
    backgroundColor: "#ccc",
    scale: {
      value: 1.3,
    },
    duration: 1000,

    complete: () => {
      anime({
        targets: ".player1",
        backgroundColor: "#3dd8b3",
        rotate: "2turn",
        direction: "alternate",

        delay: anime.stagger(100, { start: 200 }), // Faster color transition

        complete: () => {
          anime({
            targets: ".player1",
            backgroundColor: "#000",
            rotate: {
              value: "1turn",
              easing: "linear",
              duration: 500,
            },
          });
        },
      });
    },
  });
});

const animation2 = {
  targets: ".player1",
  translateX: 700,
  translateY: -60,
  rotate: "1turn",
  backgroundColor: "#000",
  duration: 1000,
  autoplay: true,
};

anime(animation2);

const animation3 = {
  targets: ".noviDiv1",
  translateX: 610,
  translateY: -500,
  rotate: "10turn",
  delay: anime.stagger(100, { start: 100 }),
};

anime(animation3);

const animation4 = {
  targets: ".noviDiv",
  translateX: 610,
  translateY: -500,
  rotate: "6turn",
  backgroundColor: "#0abdc6",
  duration: 1000,
  easing: "easeInOutQuad",
  autoplay: true,
};

anime(animation4);

const animation5 = {
  targets: ".button",
  translateX: 628,
  translateY: -200,
  rotate: "15turn",
};

anime(animation5);

const cube = document.querySelector(".cube-container");

const cubeAnimation = {
  targets: cube,
  translateX: [-120, 0],
  duration: 1000,
  easing: "easeInOutQuad",
};

anime(cubeAnimation);
