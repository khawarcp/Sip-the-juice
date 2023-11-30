var acc = document.getElementsByClassName("accordion-faqs");

function openAccordion() {
  var panel = this.nextElementSibling;
  this.classList.add("accordion-active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}

function closeAccordion() {
  var panel = this.nextElementSibling;
  this.classList.remove("accordion-active");
  panel.style.maxHeight = null;
}

function toggleAccordion() {
  var isActive = this.classList.contains("accordion-active");

  // Close all accordions
  for (let i = 0; i < acc.length; i++) {
    var otherPanel = acc[i].nextElementSibling;
    acc[i].classList.remove("accordion-active");
    otherPanel.style.maxHeight = null;
  }

  // Open the clicked accordion if it was not active
  if (!isActive) {
    openAccordion.call(this);
  }
}

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("mouseenter", openAccordion);
  acc[i].addEventListener("mouseleave", closeAccordion);

  // Remove the click event listener if present to avoid double click issues
  acc[i].removeEventListener("click", toggleAccordion);

  // Add click event listener for mobile devices
  acc[i].addEventListener("click", toggleAccordion);

  // Prevent the default behavior of the click event on mobile devices
  acc[i].addEventListener("touchstart", function (e) {
    e.preventDefault();
    toggleAccordion.call(this);
  });
}
