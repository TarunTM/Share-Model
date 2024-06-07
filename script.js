const modal= document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
    console.log("Modal is open");
    modal.classList.add("modalactive");
    overlay.classList.add("overlayactive");
};

const closeModal = () => {
    modal.classList.remove("modalactive");
    overlay.classList.remove("overlayactive");
};
