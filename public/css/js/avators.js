document.addEventListener("DOMContentLoaded", function() {
    const choices= document.querySelectorAll(".avatar-option");
    const displayImage = document.querySelector("#display_image");
    const modal = document.querySelector("#avatarModal");
    const startbtn = document.querySelector("#openModal");
    const closeBtn = document.querySelector(".close");
  
   
    const savedAvatarSrc = localStorage.getItem("selectedAvatarSrc");
    if (savedAvatarSrc) {
      displayImage.src = savedAvatarSrc;
    }
  
    startbtn.addEventListener("click", function() {
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });

    choices.forEach((avatar) => {
      avatar.addEventListener("click", function() {
        const selectedAvatarSrc = this.getAttribute("src");
        displayImage.src = selectedAvatarSrc;
        localStorage.setItem("selectedAvatarSrc", selectedAvatarSrc); 
        modal.style.display = "none"; 
      });
    });
  });