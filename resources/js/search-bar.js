var acc = document.getElementById("search-button");
var close_button = document.getElementById("close-button");

acc.addEventListener("click", function() {
  var searchPanel = document.getElementById('search-panel');
  searchPanel.classList.toggle("active");
  if (searchPanel.style.maxHeight) {
    searchPanel.style.maxHeight = null;
  } else {
    searchPanel.style.maxHeight =50 + "px";
  }
});

close_button.addEventListener("click", function() {
  var searchPanel = document.getElementById('search-panel');
  searchPanel.classList.toggle("active");
  if (searchPanel.style.maxHeight) {
    searchPanel.style.maxHeight = null;
  } else {
    searchPanel.style.maxHeight =50 + "px";
  }
});
