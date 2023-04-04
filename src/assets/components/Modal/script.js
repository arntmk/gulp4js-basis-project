/* ____________________________________________ */
// ===Modal===

const modal = document.querySelector('dialog');
const openModal = document.querySelector('.open-btn');
const closeModal = document.querySelector('.close-btn');

const { body } = document;

if (modal && openModal && closeModal) {
	openModal.addEventListener('click', () => {
		body.classList.toggle('lock');
		modal.showModal();
	});

	closeModal.addEventListener('click', () => {
		body.classList.remove('lock');
		modal.close();
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			body.classList.remove('lock');
			modal.close();
		}
	});
}