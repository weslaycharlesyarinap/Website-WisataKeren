// Select elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Add click event listener to hamburger
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Optional: Close the menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Handle form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Pesan Anda telah terkirim!");
    this.reset();
  });

// Ambil elemen-elemen yang diperlukan
const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.querySelector(".lightbox .close");

// Fungsi untuk membuka lightbox
galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    const src = image.getAttribute("src"); // Ambil path gambar dari atribut data-src
    lightboxImage.src = src; // Set sumber gambar lightbox
    lightbox.style.display = "block"; // Tampilkan lightbox
  });
});

// Fungsi untuk menutup lightbox
closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none"; // Sembunyikan lightbox
});

// Tutup lightbox jika klik di luar gambar
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});


// Fungsi untuk menyembunyikan loading screen
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");

  // Tunggu 3 detik sebelum menyembunyikan loading screen
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 3000); // 3000ms = 3 detik
});



