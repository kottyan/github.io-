const setInitalPage = () => {
  const container = document.getElementById('container');
  const thisMonth = document.getElementById('thisMonth');
  const toDay = new Date();
  thisMonth.innerText = toDay.getFullYear() + ' / ' + ("0"+(toDay.getMonth() + 1)).slice(-2);
    setTimeout(() => {
      container.style.visibility = "visible";
      window.scrollTo(0,0);
    },1000);
}

window.onload = setInitalPage();

