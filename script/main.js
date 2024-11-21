let buttonModal = document.getElementById("modal");

buttonModal.addEventListener('click', () => {
   let showModal = document.getElementById("form-event");
   showModal.style.display = "flex";
});

let closeModal = document.getElementById("close-modal");

closeModal.addEventListener('click', () => {
    let showModal = document.getElementById("form-event");
    showModal.style.display = "none";
});