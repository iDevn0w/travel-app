const info = document.getElementById('info').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.body.scrollTo({
        top: 0,
        behavior: "smooth",
      });
})


export {
    info
}