
document.addEventListener("DOMContentLoaded", function() {
    let loaderText = document.querySelector(".loaderVal");
    let progressLine = document.querySelector(".progress-line");
    let loader = document.querySelector(".loader");
    
    gsap.to(loaderText, {
        innerHTML: 100,
        duration: 6,
        snap: "innerHTML",
        onUpdate: function() {
            loaderText.innerHTML = Math.round(this.targets()[0].innerHTML) + "%";
        }
    });
    
    gsap.to(progressLine, {
        width: "100%",
        duration: 9,
        ease: "power2.out"
    });
    
    gsap.to(loader, {
        y: "-100%",
        duration: 1.5,
        delay: 6,
        ease: "power4.inOut"
    });
});


// Dark Mode Toggle
// const toggle = document.getElementById('darkModeToggle');
// toggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme');
// });


const tabButtons = document.querySelectorAll('.tab-btn');
const featureBoxes = document.querySelectorAll('.feature-box');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Add active to clicked button
    button.classList.add('active');

    // Hide all feature boxes
    featureBoxes.forEach(box => box.classList.remove('active'));
    // Show selected feature box
    const target = button.dataset.target;
    document.getElementById(target).classList.add('active');
  });
});
