const openModal = document.getElementById('abrir-popup');
const closeModal = document.getElementById('fechar-popup');
const modal = document.getElementById('popup');
openModal.onclick = function() {
    modal.classList.remove('hidden');
}
closeModal.onclick = function() {
    modal.classList.add('hidden');
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
}