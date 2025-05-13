// Simple scroll-to-top button functionality

// Get the button
let scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = "&uarr;"; // Up arrow
scrollToTopBtn.setAttribute("id", "scrollToTopBtn");
scrollToTopBtn.style.display = "none"; // Hidden by default
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.right = "30px";
scrollToTopBtn.style.zIndex = "99";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.outline = "none";
scrollToTopBtn.style.backgroundColor = "#555";
scrollToTopBtn.style.color = "white";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.padding = "15px";
scrollToTopBtn.style.borderRadius = "10px";
scrollToTopBtn.style.fontSize = "18px";

document.body.appendChild(scrollToTopBtn);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
