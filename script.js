// Function to open modal with the clicked image
function openModal(element) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');

    modal.style.display = "flex";
    modalImg.src = element.src;
    caption.innerHTML = element.alt;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('image-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
