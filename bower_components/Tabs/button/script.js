const tabsNav = document.querySelectorAll('.tabs__nav-btn');
const tabsContent = document.querySelectorAll('.tabs__content');

if (tabsNav && tabsContent) {
	tabsNav.forEach((item) => item.addEventListener('click', () => {
		const currentBtn = item;
		const tabId = currentBtn.getAttribute('data-tab');
		const currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsNav.forEach((child) => { child.classList.remove('active'); });

			tabsContent.forEach((child) => { child.classList.remove('active'); });

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	}));
	document.querySelector('.tabs__nav-btn').click();
}