// Function to open lightbox and set download link
function openLightbox(imgSrc) {
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox").style.display = "flex";
    document.body.classList.add("lightbox-active"); // Hide navbar

    // Set download link
    let downloadBtn = document.getElementById("download-btn");
    downloadBtn.href = imgSrc;
    downloadBtn.setAttribute("download", "gallery-image.jpg");
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
