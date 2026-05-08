let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // sembunyikan semua slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // pindah slide
    slideIndex++;

    // kembali ke slide pertama
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // tampilkan slide aktif
    slides[slideIndex - 1].style.display = "block";

    // ganti slide setiap 3 detik
    setTimeout(showSlides, 3000);
}