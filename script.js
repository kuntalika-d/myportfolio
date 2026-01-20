// Navigation
document.querySelectorAll(".nav a[data-page]").forEach(link => {
  link.addEventListener("click", () => {

    // sidebar active state
    document.querySelectorAll(".nav a").forEach(a =>
      a.classList.remove("active")
    );
    link.classList.add("active");

    // page switching
    document.querySelectorAll(".page").forEach(p =>
      p.classList.remove("visible")
    );

    document
      .getElementById(link.dataset.page)
      .classList.add("visible");
  });
});


// Sliders
["low", "mid", "high"].forEach(id => {
  const s = document.getElementById(id);
  const v = document.getElementById(id + "Val");
  s.oninput = () => v.textContent = s.value + "%";
});

// Upload
const fileInput = document.getElementById("fileInput");
document.getElementById("browseBtn").onclick = () => fileInput.click();
fileInput.onchange = () => {
  document.getElementById("convertBtn").disabled = !fileInput.files.length;
};