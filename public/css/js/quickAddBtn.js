document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("addToListBtn");
    const dropdown = document.getElementById("listSelect");
  
    button.addEventListener("click", function() {
      if (dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("visible");
      } else {
        dropdown.classList.remove("visible");
        dropdown.classList.add("hidden");
      }
    });
  });