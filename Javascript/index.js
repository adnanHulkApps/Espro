// Changing hamburger toggle icon

let sidebar = document.querySelector(".offcanvas-start");
let toggleIcon = document.querySelector("#navbar_toggle_icon");

function iconChanger() {
  console.log(sidebar);
  console.log(toggleIcon);

  if (sidebar.classList.contains("show")) {
    toggleIcon.src = "./Images/close menu icon.svg";
  } else {
    toggleIcon.src = "./Images/icon_menu_bars.svg";
  }
}

// Testimonial images

let bigScreenTest = document.querySelector(".testimonial_big_screen_text");

function innerTestimonialText() {
  bigScreenTest.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores at culpa, praesentium 
  necessitatibus fugit quod quia dolore iste fuga adipisci, modi consequuntur obcaecati? Debitis 
  inventore neque voluptates odio nisi nihil.`;
}

function marthaText() {
  bigScreenTest.innerText = `The result is a richly flavored, super aromatic cup of coffee without the usual silt in the 
  bottom. The press isn’t just for coffee, either—there’s also a tea filter available that 
  isolates tea leaves to prevent oversteeping.`;
}

// Video play/pause

function playPause(event) {
  let video = document.querySelector("video");
  if (video.paused) video.play();
  else video.pause();
}
