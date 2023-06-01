/* ____________________________________________ */
// ==Accordion==

const accordionsController = function () {
	const accordion = document.querySelectorAll('details');

	if (accordion) {
		accordion.forEach((summary) => {
			summary.addEventListener('click', (e) => {
				const self = e.currentTarget;
				const content = self.querySelector('.accordion-content');

				if (self.hasAttribute('open')) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = `${content.scrollHeight}`;
				}
			});
		});

		// Клик снаружи аркадиона. Закрыть аркадион.
		accordion.forEach((closeDetails) => {
			document.addEventListener('click', (e) => {
				if (!closeDetails.contains(e.target)) {
					closeDetails.removeAttribute('open');
				}
			});
		});

		accordion.forEach((targetDetails) => {
			targetDetails.addEventListener('click', () => {
				accordion.forEach((detail) => {
					if (detail !== targetDetails) {
						detail.removeAttribute('open');
					}
				});
			});
		});
	}
};
accordionsController();
