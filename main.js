const setInitalPage = () => {
  const container = document.getElementById('container');
    setTimeout(() => {
      container.style.visibility = "visible";
      window.scrollTo(0,0);
    },1000);
}

window.onload = setInitalPage();

