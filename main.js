(function() {
  const thisMonth = document.getElementById('thisMonth');
  const toDay = new Date();
  thisMonth.innerText = String(toDay.getFullYear()) + '/' + String(toDay.getMonth() + 1);
}());