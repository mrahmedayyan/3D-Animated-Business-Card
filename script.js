document.querySelector(".card").addEventListener("mouseenter", () => {
    document.querySelector(".card").style.transform = "rotateY(180deg)";
  });
  
  document.querySelector(".card").addEventListener("mouseleave", () => {
    document.querySelector(".card").style.transform = "rotateY(0)";
  });
  