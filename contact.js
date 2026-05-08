/* =========================
   SIMPAN DATA CONTACT
========================= */

document
.getElementById("btnKirim")
.addEventListener("click", kirimPesan);

function kirimPesan() {

  let nama =
  document.getElementById("nama").value.trim();

  let email =
  document.getElementById("email").value.trim();

  let pesan =
  document.getElementById("pesan").value.trim();

  let valid = true;

  /* HAPUS ERROR */
  document
  .querySelectorAll(".error")
  .forEach(e => e.style.display = "none");

  /* VALIDASI */

  if (nama === "") {

    document
    .getElementById("errorNama")
    .style.display = "block";

    valid = false;
  }

  if (email === "") {

    document
    .getElementById("errorEmail")
    .style.display = "block";

    valid = false;
  }

  if (pesan === "") {

    document
    .getElementById("errorPesan")
    .style.display = "block";

    valid = false;
  }

  if (!valid) return;

  /* =========================
     SIMPAN KE LOCAL STORAGE
  ========================= */

  let data = {

    nama: nama,
    email: email,
    pesan: pesan,
    waktu: new Date().toLocaleString()

  };

  let list =
  JSON.parse(localStorage.getItem("contactData")) || [];

  list.push(data);

  localStorage.setItem(
    "contactData",
    JSON.stringify(list)
  );

  /* RESET FORM */

  document.getElementById("nama").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pesan").value = "";

  alert("Data berhasil disimpan!");
}

/* =========================
   SLIDE KIRI
========================= */

let slideIndex1 = 0;

showSlidesLeft();

function showSlidesLeft() {

  let slides =
  document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";
  }

  slideIndex1++;

  if (slideIndex1 > slides.length) {

    slideIndex1 = 1;
  }

  slides[slideIndex1 - 1]
  .style.display = "block";

  setTimeout(showSlidesLeft, 3000);
}

/* =========================
   SLIDE KANAN
========================= */

let slideIndex2 = 0;

showSlidesRight();

function showSlidesRight() {

  let slides =
  document.getElementsByClassName("slide2");

  for (let i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";
  }

  slideIndex2++;

  if (slideIndex2 > slides.length) {

    slideIndex2 = 1;
  }

  slides[slideIndex2 - 1]
  .style.display = "block";

  setTimeout(showSlidesRight, 3000);
}

/* =========================
   REFRESH
========================= */

function tampilData() {

  location.reload();
}