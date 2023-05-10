// ===Adaptive-body-min-width===
(function () {
	const { width } = window.screen;
	const oldViewport = document.querySelector('meta[name="viewport"]');
	const viewport = document.createElement('meta');
	viewport.setAttribute('name', 'viewport');
	viewport.setAttribute('content', `width=${width <= 320 ? '320' : 'device-width'}`);
	document.head.replaceChild(viewport, oldViewport);
}());