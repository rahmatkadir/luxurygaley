// Function to open lightbox
function openLightbox(imgSrc) {
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox").style.display = "flex";
    document.body.classList.add("lightbox-active"); // Hide navbar
}

// Function to close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.body.classList.remove("lightbox-active"); // Show navbar again
}

// Close lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function(event) {
    if (event.target !== document.getElementById("lightbox-img")) {
        closeLightbox();
    }
});

// Attach event listeners to gallery images
document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", function() {
        openLightbox(this.src);
    });
});



// Contact Form Submission (EmailJS)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent! We will get back to you soon.");
});
