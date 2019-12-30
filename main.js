const setInitalPage = () => {
  const container = document.getElementById('container');
  const thisMonth = document.getElementById('thisMonth');
  const toDay = new Date();
  thisMonth.innerText = String(toDay.getFullYear()) + ' / ' + String(toDay.getMonth() + 1);
    setTimeout(() => {
      container.style.visibility = "visible";
      window.scrollTo(0,0);
    },1000);
}

window.onload = setInitalPage();

