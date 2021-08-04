export function scrolling(){
    //btn
  const btn = document.getElementById("topBtn");

  // scroll reach 100px
  const topUp = () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? (btn.style.display = "block")
      : (btn.style.display = "none");
  };
  window.addEventListener("scroll", topUp);

  //active btn
  const active = (event) => {
    event.preventDefault();
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  btn.addEventListener("click", active);
}