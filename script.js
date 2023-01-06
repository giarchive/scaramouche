document.addEventListener('DOMContentLoaded', function() {
fetch("/parts/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#header").innerHTML = data;
});
fetch("/parts/head.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#head").innerHTML = data;
});
fetch("/parts/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#footer").innerHTML = data;
});
fetch("/parts/menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#menu").innerHTML = data;
});
});