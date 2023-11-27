var acc = document.getElementsByClassName("accordion-faqs");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("mouseenter", function() {
    this.classList.add("accordion-active");
    var panel = this.nextElementSibling;
    if (!panel.style.maxHeight) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


var acc_item = document.getElementsByClassName("item-faq-wrapper");
for (let s = 0; s < acc_item.length; s++) {
  acc_item[s].addEventListener("mouseleave", function() {
    this.querySelector('.accordion-faqs').classList.remove("accordion-active");
    var panel = this.querySelector('.accordion-faqs').nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    }
  });
}